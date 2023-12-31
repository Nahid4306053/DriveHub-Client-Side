

import Pagetitle from "../Hooks/Pagetitle";
import ScrollTop from "../Hooks/ScrollTop";

import OurCountDown from "../components/Home/OurCouwndown";

export default function AboutUs() {
  ScrollTop();
  return (
    <>
      <Pagetitle>About us || TourGuidance</Pagetitle>

      <div>
  
      <div className="container mx-auto lg:my-20 mt-10 ">
        <div className=" w-full gap-20 items-center">
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <h1 className="text-2xl lg:text-5xl font-bold max-w-5xl">
            TaskOver - Elevate Your Productivity with Seamless Task Management
            </h1>
            <p className="text-gray-500 text-lg leading-8">
            Experience the next level of productivity with TaskOver, your go-to task management solution. Streamline your workflow, collaborate effortlessly, and achieve more with our intuitive platform. Say goodbye to chaos and hello to efficiency - TaskOver makes managing tasks a breeze!
            </p>
          </div>
          <div className="">
            <img
              className="mx-auto max-h-[600px]"
              src="https://i.ibb.co/SmwxmNr/Illustrator-Vector-Illustration-1.jpg"
              alt="task"
            />
          </div>
        </div>
      </div>
        <OurCountDown></OurCountDown>
      </div>
    </>
  );
}
