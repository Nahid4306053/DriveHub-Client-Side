/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */


export default function OurMision() {
    const Principles = [ "Exceeding Expectations", "Tailored Customer Experiences", "Innovative Solutions", "Sustainability at Heart", "Community Impact", "Transparent Integrity", "Continuous Evolution", "Empowering Your Journey" ]
                      
  return (
    <div className="container mx-auto my-28">
      <div className="flex lg:flex-row flex-col lg:gap-20 gap-10 ">
          <div className="flex-1">
            <img className="w-full" src="https://i.ibb.co/T46mCxx/b4523.jpg" alt="" />        
          </div>
          <div className="flex-1  space-y-6">
            <h1 className="text-3xl font-semibold">Mission to Catalyzing Transformation Through Unforgettable Journeys</h1>    
            <p className="leading-8">At DriveHub, our mission transcends the traditional role of a car rental service; it's a commitment to not only provide vehicles but to enrich your journey and elevate your life experiences. We are driven by the following principles, striving to create a seamless fusion of exceptional service and unforgettable moments.</p>
             <br />
            <ul className="list-disc ml-5 grid grid-cols-2 gap-6">
             {Principles.map((ele,ind)=>{
                  return <li key={ind}>{ele}</li>
              })}
           </ul>     
          </div>
      </div>
    </div>
  )
}
