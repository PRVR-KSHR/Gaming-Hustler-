import React from "react";
const Hero = () => {
  return (
    <div
      className="min-h-screen bg-cover rounded-b-3xl"
      style={{
        backgroundImage: 'url("https://i.ibb.co/pJZyS8X/banner-1.gif")',
      }}
    >
      <div className="min-h-screen flex justify-start pl-11 text-white items-center bg-black bg-opacity-60 rounded-b-3xl">
        <div className="">
          <div className="space-y-4">
            {/* <h3 className='md:text-4xl text-2xl'>WE PROVIDES</h3> */}
            <h1 className="md:text-7xl text-4xl font-bold ">
              Your Esports
              <br />
              Quest Begins Here!{" "}
            </h1>
            <div className="font-bold text-orange-200">
              <p className="">
                Where champions are made: join our elite Esports Tournaments
                online.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-5">
              <button
                onClick={() => (window.location.href = "/register")}
                className="px-7 py-3 rounded-lg bg-secondary font-bold uppercase hover:bg-sky-700"
              >
                Join Now
              </button>
              <button
                onClick={() => (window.location.href = "/instructors")}
                className="px-7 py-[10px] bg-opacity-80 hover:bg-white hover:text-black hover:outline-white duration-200  rounded-lg bg-transparent outline  font-bold uppercase"
              >
                View Tournaments
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
