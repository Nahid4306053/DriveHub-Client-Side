import SectionTitle from "../shared/SectionTitle";
import  { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
export default function Testimonial() {
  const [data,setdata] = useState([]);
  useEffect(()=>{
     fetch("/data/Testimonial.json").then(res=> res.json()).then((data)=> setdata(data)).catch(err=>console.log(err))
  },[])
  return (
    <div className="container mx-auto my-28">
      <SectionTitle
        title={"Satisfactions"}
        subtitle={"Discover What Our Customers Have to Say About DriveHub"}
      ></SectionTitle>
      <div className="container mt-24">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper min-h-[300px]"
      >  
           {data.length > 0 && data.map((ele,ind)=>{
               return( 
               <SwiperSlide className="px-14 pb-20" key={ind}>
                  <div className=" text-center">
                  <i className="fa-solid fa-quote-right text-6xl text-red-600"></i>
                  <div className="mt-8">
                    <h3 className="text-xl max-w-4xl mx-auto">{ele.quote}</h3>
                    <div className="author mt-10">
                      <img className="h-14 w-14 object-cover rounded-full mx-auto" src={ele.author.avatar} alt="" />
                      <h3 className="mt-4 font-bold text-xl">{ele.author.name}</h3>
                    </div>
                  </div>
                  </div>
               </SwiperSlide>
               )
           })}
      </Swiper>
      </div> 
    </div>
  );
}
