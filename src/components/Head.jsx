import React from "react";
import { Nav } from "./Nav";
import HeroImg from "../assets/Hero.png";
import Icon1 from "../assets/icon-1.png";
import Icon2 from "../assets/icon-2.png";
import Icon3 from "../assets/icon-3.png";
import { PrimaryBtn } from "./PrimaryBtn";
import { Blogs } from "./Blogs";
import { Journey } from "./Journey";
import { Enjoy } from "./Enjoy";
import { Reivew } from "./Reivew";
import { Footer } from "./Footer";
export const Header = () => {
  const Info = [
    {
      icon: Icon1,
      title: "Secret Locations",
      decrisbe:
        "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor.",
    },
    {
      icon: Icon2,
      title: "Safe Adventure",
      decrisbe:
        "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor.",
    },
    {
      icon: Icon3,
      title: "Professional Hikers",
      decrisbe:
        "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor.",
    },
  ];
  return (
    <section className="bg-Hero bg-center h-screen py-4 md:px-24 px-4">
      <Nav />
      <div className="flex sm:flex-wrap sm:justify-around">
        <div className="my-24 basis-2/3">
          <h1 className="text-5xl font-semibold tracking-wide py-2 leading-tight">
            Be prepared for the mountains and beyond.
          </h1>
          <p className="mt-4 text-base font-normal tracking-wide leading-loose lg:pr-0">
            Are you looking for amazing hiking travel? Don’t worry! We got it
            for you
          </p>
          <div className="mt-8 flex gap-3 sm:flex-wrap">
            <PrimaryBtn>Contact Us</PrimaryBtn>
            <button className="border-[0.5px] text-sky-500 border-sky-500 rounded-full px-6 py-2 sm:mb-4">
              Watch Video
            </button>
          </div>
        </div>
        <img
          src={HeroImg}
          className="bg-cover w-[380px] h-[514px] basis-1/3 lg:ml-10 -mr-10 my-20"
        />
      </div>
        <div className="bg-white flex drop-shadow-2xl flex-col lg:flex-row w-[400px] lg:w-full mx-24 lg:mx-0">
            { 
              Info.map((info, index)=>(
                <div  className="ml-10 mr-10" key={index}>
                    <img className="bg-cover h-14 w-14 my-4 mt-10" src={info.icon}/>
                    <h3 className="my-4 text-base font-semibold">{info.title}</h3>
                    <p className="tracking-wide text-xs">{info.decrisbe}</p>
                    <p className="mt-4 mb-12 text-base text-red-500">Read More</p>
                </div>
              ))
            }
        </div>
        <div className="text-center">
            <Blogs/>
        </div>
        <div className="text-center">
          <Journey/>
        </div>
        <div className="text-center">
          <Enjoy/>
        </div>
        <div>
            <Reivew/>
        </div>
        <div className="w-[100vw] relative left-[calc(-50vw_+_49.3%)] mx-auto">
        <Footer/>
        </div>
    </section>
  );
};
