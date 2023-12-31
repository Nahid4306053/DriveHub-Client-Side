import React from "react";

export default function AboutUs() {
  return (
    <>
      <Pagetitle>About us - TripGudance</Pagetitle>
      <PageBanner
        title="Contact Us"
        bgimg="https://i.ibb.co/jRrg30L/IMG-2019-06-06-011244-1024x682.jpg"
      >
        <div className="flex justify-center  text-white gap-2 text-xl mt-5">
          <Link className="hover:text-yellow-400 " to="/">
            Home
          </Link>{" "}
          / About us us{" "}
        </div>
      </PageBanner>

      <div className="container mx-auto mt-20"></div>
    </>
  );
}
