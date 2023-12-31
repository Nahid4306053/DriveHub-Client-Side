
export default function ConatactBanner() {
  return (
    <div
      style={{ background: `url(https://i.ibb.co/C1z7WZF/bt45.jpg)`, clipPath: "polygon(50% 0%, 100% 25%, 97% 50%, 100% 75%, 68% 100%, 32% 100%, 0 75%, 3% 50%, 0 25%)" }}
      className="relative min-h-[600px] py-32 flex  pagebanner "
    >
      <div className="pagebanneroverly"></div>
      <div className="mx-auto p-5">
         <div className="relative h-full w-full flex items-center justify-center z-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-3">
           <div className="lg:text-end text-white space-y-6 text-center">
              <h3 className="md:text-2xl text-xl">Call Today For Booking Your Next Ride</h3>
              <h3 className="md:text-5xl text-3xl font-bold"><i className="text-red-500 mr-2 fa-solid fa-phone"></i> (900) 999 999</h3>
              <p className="italic">Operators available 24/7 </p>
           </div>         
           <div className="lg:text-start text-white space-y-6 text-center">
           </div>          
           <div className="lg:text-start text-white space-y-6 text-center">
             <h3 className="md:text-2xl text-xl">Upto 25% Discounts & Special Offers</h3>
             <h3 className="md:text-5xl text-3xl font-bold">Rent a Car for 7 Days</h3>
             <p className="italic">and get 3 days extra absolutely FREE</p>
           </div>
       </div>
      </div>
      </div>
    </div>
  );
}
