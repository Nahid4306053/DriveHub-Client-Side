/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { CardElement, Elements, useElements, useStripe, } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../Context/AuthnicationContext";
import useAxiosPublicV1 from "../../Hooks/useAxiosPublicV1";

const CheckoutForm = ({ totalpay, carid, booking_id  ,PickUpDate ,DropOffDate}) => {
  const stripe = useStripe();
  const elements = useElements(); 

  const AxiosSecure = useAxiosPublicV1();
  const [paysecret, SetPaysecret] = useState();
  const { CurrentUser } = useAuth();
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: ({ transectionId }) => {
      const res = AxiosSecure.post("/payment/save", {
        carData: carid,
        booking_id,
        totalpay,
        transectionId: transectionId,
        PickUpDate,
        DropOffDate
      });
      return res;
    },
    onSuccess: () => {
      toast.success("Happy Tour, Payment Successfull");
      navigate("/dashboard/payment-history");
    },
    onError: () => {
      toast.error("Payment Create failed");
    },
  });

  useEffect(() => {
    if (totalpay > 0) {
      AxiosSecure.post("payment/create-secret", { totalpay: totalpay })
        .then((res) => SetPaysecret(res.data))
        .catch((err) => toast.error("Failed to create Payment"));
    }
  }, [totalpay]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }

    const { paymentIntent, error: confError } = await stripe.confirmCardPayment(
      paysecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: CurrentUser.displayName || "anormus",
            email: CurrentUser.email || "anormus",
          },
        },
      }
    );

    if (confError) {
      toast.error("Failed to Create payment");
    } else {
      if (paymentIntent.id) {
        
        mutation.mutate({ transectionId: paymentIntent.id });
      }
    }
  };

  return (
    <form className="mt-5" onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#000",
              "::placeholder": {
                color: "#000",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />

      <button
        className="btn mt-5 w-full  text-white hover:bg-red-600 bg-red-600"
        type="submit"
        disabled={!stripe || !totalpay || !paysecret}
      >
       
        Pay Now
      </button>
    </form>
  );
};

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);

const Payment = ({ totalpay, carid, booking_id , PickUpDate , DropOffDate }) => {

  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm
        totalpay={totalpay}
        carid={carid}
        booking_id={booking_id}
        DropOffDate={DropOffDate}
        PickUpDate={PickUpDate}
      />
    </Elements>
  );
};

export default Payment;
