/* eslint-disable no-unused-vars */

import { Link } from 'react-router-dom'
import { useAuth } from '../../Context/AuthnicationContext'



export default function MyProfile() {
  const {CurrentUser}  = useAuth()
  const role = CurrentUser.role                
  return (
    <div className=''>
     <div className="">
      <div style={{background:"url(https://i.ibb.co/2FvJ77q/do-ur-work.jpg)",backgroundPosition:"center" , backgroundRepeat:"no-repeat" ,backgroundSize:"cover" }}  className="md:h-48  h-28">
          <img className=' translate-y-1/2 h-full w-28 md:w-48 mx-auto object-cover bg-white p-1  rounded-full' src={CurrentUser.photoURL} alt="" />
        </div>
         <div className="deatils  text-center  md:mt-16 mt-8 pt-10">
           <h3 className='name text-2xl font-bold'>{CurrentUser.displayName}</h3> 
           <h4>{CurrentUser.email}</h4>         
        </div>  
         <div className="additionalInfo px-10 flex items-center lg:flex-row flex-col  gap-10">
             
           <div className='flex-1'>
           <img src="https://i.ibb.co/BzQL5Mg/scheduling-tasks-flat-concept-illustration-editable-2d-cartoon-character-on-white-for-web-design-to.png" alt="" />
           </div>

            <div className='mt-10 flex-1 text-4xl text-rose-400 '>
              <h1>Hellow {CurrentUser.displayName}<br />  Welocome Back <br />  Complete Your Todays Tasks</h1>
              <Link to="/dashboard/todays-task"><button className='btn bg-red-300 border-none hover:bg-red-300 mt-7 text-white'>See Todays Tasks</button></Link>
              </div>       
         </div>                        
      </div>                 
    </div>
  )
}
