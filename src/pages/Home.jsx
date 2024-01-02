/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
// import React from "react";
// import { Link } from "react-router-dom";
import Pagetitle from "../Hooks/Pagetitle";
import ScrollTop from "../Hooks/ScrollTop";
import ConatactBanner from "../components/Home/ConatactBanner";
import OurMision from "../components/Home/OurMision";
import RentalCarsection from "../components/Home/RentalCarsection";
import Testimonial from "../components/Home/Testimonial";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import Blogs from '../components/Home/Blogs'
import PageBanner from "../components/shared/PageBanner";
import SectionTitle from "../components/shared/SectionTitle";


export default function Home() {
  ScrollTop(0, 0);

  return (
    <>
      <Pagetitle>Home || DriveHub</Pagetitle>
      <PageBanner polygon={"polygon(100% 0, 100% 70%, 90% 85%, 80% 80%, 50% 100%, 21% 80%, 10% 85%, 0 69%, 0 0)"} bgimg={"https://i.ibb.co/x7575j4/ks-rental.jpg"}>
        <div className="content min-h-[400px] flex items-center">
          <div className="text-center space-y-6">
          <h1 className="md:text-5xl text-3xl  text-white font-bold ita">Discover the Journey</h1>
          <h3 className="md:text-3xl text-xl text-white italic">Rent Your Dream Car Today - Seamless, Reliable, Unforgettable</h3>
          <div className=""><button style={{clipPath:"polygon(100% 0, 100% 70%, 90% 85%, 80% 80%, 50% 100%, 21% 80%, 10% 85%, 0 69%, 0 0)"}} className="md:mt-8 md:btn-lg bg-red-600 hover:bg-red-600 btn border-none pb-2 text-white rounded-none">Explore cars</button>
          <br />
          <i className="fa-solid fa-fade text-3xl mt-10 text-white fa-chevrons-down"></i>
          </div>
          </div>
        </div>
      </PageBanner>
      <WhyChooseUs></WhyChooseUs>
      <div className="container mx-auto mb-28">
 
      <div className="flex lg:gap-20 items-center gap-10 lg:flex-row flex-col">
        <div className="flex-1">
        <SectionTitle customcss={"text-start"} title={"Best Rental Service"} subtitle={"Unmatched Excellence in Every Journey"}></SectionTitle>  
          <p className="mt-5 leading-8">
          Welcome to our world of exceptional car rental services where excellence is not just a promise; it's our commitment to ensuring every journey exceeds expectations. Discover why we stand out as the best in the business:
                  <br />
                  <br />
            At DriveHub, our dedication to providing the finest rental experience is evident in every aspect of our service. From a diverse fleet of meticulously maintained vehicles to transparent pricing and seamless booking processes, we prioritize your satisfaction at every turn.
          </p>
        </div>
        <div className="flex-1">
          <img className="h-full w-full object-cover" src="https://i.ibb.co/LxSLy6P/552-5522716-thumb-image-three-cars-png-transparent-png.jpg" alt="" />
        </div>
      </div>

      </div>
      <RentalCarsection></RentalCarsection>
      <ConatactBanner></ConatactBanner>
      <OurMision></OurMision>
      <Testimonial></Testimonial>
      <Blogs></Blogs>
    </>
  );
}
