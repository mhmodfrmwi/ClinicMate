import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./button";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-teal-50 py-20 dark:from-slate-900 dark:to-slate-800">
      {/* Abstract Background Shapes */}
      <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-blue-300/30 blur-3xl dark:bg-blue-900/20"></div>
      <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-teal-300/30 blur-3xl dark:bg-teal-900/20"></div>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="animate-fade-in-up mb-6 text-5xl font-extrabold leading-tight text-gray-900 dark:text-white lg:text-6xl">
              Your Health, <br />
              <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                Our Priority
              </span>
            </h1>
            <p
              className="animate-fade-in-up mb-8 text-lg text-gray-600 dark:text-gray-300"
              style={{ animationDelay: "100ms" }}
            >
              Book appointments with top-rated doctors in seconds. Experience
              healthcare managing re-imagined for the modern age.
            </p>
            <div
              className="animate-fade-in-up flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
              style={{ animationDelay: "200ms" }}
            >
              <Link to="/allDoctors">
                <Button className="h-12 rounded-full bg-blue-600 px-8 text-lg font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-blue-700">
                  Find a Doctor
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="h-12 rounded-full border-2 border-blue-600 px-8 text-lg font-semibold text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-slate-800">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div
            className="animate-fade-in-up flex-1"
            style={{ animationDelay: "300ms" }}
          >
            <div className="glass relative z-10 mx-auto max-w-lg overflow-hidden rounded-2xl p-4 shadow-2xl">
              <img
                src="assets/doc-header-img.png"
                alt="Doctor Team"
                className="h-auto w-full rounded-xl object-cover"
              />
              {/* Floating Badge */}
              <div className="glass absolute -bottom-6 -left-6 flex items-center gap-3 rounded-xl p-4 shadow-lg animate-bounce hidden md:flex">
                 <div className="h-3 w-3 rounded-full bg-green-500"></div>
                 <p className="font-semibold text-gray-800 dark:text-gray-200">24/7 Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
