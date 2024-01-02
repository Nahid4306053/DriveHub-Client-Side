import SectionTitle from "../shared/SectionTitle"

export default function WhyChooseUs() {
  const data = [
                    {
                      "title": "Wide Range of Cars",
                      "icon": "fas fa-car",
                      "description": "Explore a diverse fleet: Choose from a wide selection of vehicles, from compact cars to spacious SUVs, ensuring there's a perfect car for every need."
                    },
                    {
                      "title": "Competitive Pricing",
                      "icon": "fa-solid fa-money-check",
                      "description": "Affordable rates: Enjoy competitive and transparent pricing with no hidden fees. We strive to offer the best value for your money."
                    },
                    {
                      "title": "Easy Booking Process",
                      "icon": "fas fa-book",
                      "description": "Simple and secure: Our user-friendly platform makes booking a breeze. A few clicks are all it takes to secure your dream car for the journey ahead."
                    }
                  ]                  
  return (
    <div className="my-28">
     <SectionTitle title={"Why Choose us"} subtitle={"Discover the Advantages of Choosing Our Car Rental Service"}></SectionTitle>               
     <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-24 lg:gap-20 gap-10 ">
        {data.map((ele,ind)=>{
          return (
             <div key={ind} className="text-center p-5 py-10 transition-all group hover:cursor-pointer hover:bg-red-600 hover:text-white">
               <i className={`${ele.icon} group-hover:text-white text-red-600 text-5xl`}></i>
               <h3 className="text-xl font-semibold  mt-5">{ele.title}</h3>
               <div><div className="my-7 h-[2px] w-[50px] group-hover:bg-white bg-red-600 mx-auto"></div></div>
               <p className="leading-8 ">{ele.description}</p>
             </div>
          )
        })}
      </div>               
     </div>                
    </div>
  )
}
