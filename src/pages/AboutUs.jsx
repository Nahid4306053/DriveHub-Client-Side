import Pagetitle from "../Hooks/Pagetitle";
import ScrollTop from "../Hooks/ScrollTop";

import OurCountDown from "../components/Home/OurCouwndown";
import PageBanner from "../components/shared/PageBanner";

export default function AboutUs() {
  ScrollTop();
  return (
    <>
      <Pagetitle>About us || DriveHub</Pagetitle>
      <PageBanner
        polygon={
          "polygon(100% 0, 100% 70%, 90% 85%, 80% 80%, 50% 100%, 21% 80%, 10% 85%, 0 69%, 0 0)"
        }
        bgimg={"https://i.ibb.co/RTBK4y8/ezgif-2-01e9e428a9.png"}
      >
        <div className="text-center space-y-4 mt-20">
          <h1 className="md:text-5xl text-3xl text-white font-bold ita">
          About DriveHub
          </h1>
          <h3 className="md:text-2xl text-xl text-white italic">
            Rent Your Dream Car Today - Seamless, Reliable, Unforgettable
          </h3>
        </div>
      </PageBanner>
      <div>
        <div className="container mx-auto lg:my-20 mt-10 ">
          <div className=" w-full gap-20 items-center">
            <div className="max-w-3xl mx-auto text-center space-y-5">
              <h1 className="text-2xl lg:text-5xl font-bold max-w-5xl">
                DriveHub Chronicles: Crafting Your Epic Journey
              </h1>
              <p className="text-gray-500 text-lg leading-8">
              Experience the extraordinary at DriveHub, where your dreams take the driver's seat. "You Journey Your Way" is not just a tagline; it's our promise to elevate your travel escapades. Unleash the extraordinary with DriveHub—your gateway to unparalleled car rental experiences. Your dream car awaits, and every journey is a canvas for your unique story. Welcome to DriveHub, where adventure knows no bounds.
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
