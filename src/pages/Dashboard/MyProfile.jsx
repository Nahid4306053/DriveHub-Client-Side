/* eslint-disable no-unused-vars */
import PaymentAnimation from "../../assets/Payment.json"
import { Link } from 'react-router-dom'
import { useAuth } from '../../Context/AuthnicationContext'
import Lottie from "lottie-react"



export default function MyProfile() {
  const {CurrentUser}  = useAuth()
  const role = CurrentUser.role                
  return (
    <div className=''>
     <div className="">
      <div style={{background:"url(https://i.ibb.co/Nj9T8Cw/10001.png)",backgroundPosition:"center" , backgroundRepeat:"no-repeat" ,backgroundSize:"cover" }}  className="md:h-48  h-28">
          <img className=' translate-y-1/2 h-full w-28 md:w-48 mx-auto object-cover bg-white p-1  rounded-full' src={CurrentUser.photoURL} alt="" />
        </div>
         <div className="deatils mt-24 pt-2  text-center  ">
           <h3 className='name text-2xl font-bold'>{CurrentUser.displayName}</h3> 
           <h4>{CurrentUser.email}</h4>         
        </div>  
         <div className="additionalInfo   flex items-center lg:flex-row flex-col  gap-10">
             
           <div className='flex-1'>
           <Lottie animationData={PaymentAnimation}></Lottie>
           </div>

            <div className='mt-10 flex-1 text-2xl  text-rose-400 '>
              <h1>Hellow {CurrentUser.displayName} ,  Welocome Back,  <br />  Complete Your Upcoming Booking Payment</h1>
              <Link to="/dashboard/upcoming-bookings"><button className='btn bg-red-300 border-none hover:bg-red-300 mt-7 text-white'>Upcoming Bookings</button></Link>
              </div>       
         </div>                        
      </div>                 
    </div>
  )
}
