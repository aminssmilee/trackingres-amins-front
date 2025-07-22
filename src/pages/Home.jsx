import React from "react";
import Logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

import jnt from "../assets/images/logo/jnt.svg";
import jne from "../assets/images/logo/JNE.svg";
import lion from "../assets/images/logo/lion.svg";
import ninja from "../assets/images/logo/ninja.svg";
import pos from "../assets/images/logo/pos.svg";
import sicepat from "../assets/images/logo/sicepat.svg";
import tiki from "../assets/images/logo/tiki.svg";
import web from "../assets/icons/webapp.png";
import uiux from "../assets/icons/uiux.png";
import design from "../assets/icons/design.png";
import coding from "../assets/icons/coding.png";
// import wahana from "../assets/images/logo/wahana.svg";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="h-[70vh] bg-zinc-200 flex justify-center items-center px-4 rounded-b-[100px] font-poppins">
        <div className="text-center max-w-2xl w-full">
          <div className="flex justify-between mb-6 items-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-snug text-left">
              <span className="font-semibold text-gray-800">Lacak Paketmu</span>
              <br className="hidden sm:block" />
              <span className="font-jakarta text-gray-800">
                {" "}
                dengan Mudah dan Cepat!
              </span>
            </h1>

            <img
              src={Logo}
              alt="Logo Tracking Resi"
              className="w-20 sm:w-24 md:w-56 h-auto object-contain"
            />
          </div>

          <p className="text-sm sm:text-base md:text-lg text-gray-600 font-jakarta leading-relaxed text-left">
            Cukup masukkan nomor resi, dan kami akan tunjukkan di mana posisi
            paketmu sekarang.
          </p>

          <Link to="/tracking">
            <button
              type="button"
              className="bg-black text-white text-sm sm:text-base md:text-lg px-6 py-2 rounded-full font-semibold hover:bg-gray-800 transition duration-300 ease-in-out mt-6"
            >
              Lacak Pengiriman
            </button>
          </Link>
        </div>
      </div>

      <div className="bg-zinc-200">
        <div className="h-[30vh] bg-white flex justify-center items-center px-4 rounded-b-[100px]">
          <div className="flex gap-8">
            <img src={jne} alt="Logo JNE" className="h-12 object-contain" />
            <img src={jnt} alt="Logo J&T" className="h-12 object-contain" />
            <img
              src={lion}
              alt="Logo lion prcel"
              className="h-12 object-contain"
            />
            <img
              src={ninja}
              alt="Logo Ninja Express"
              className="h-12 object-contain"
            />
            <img
              src={pos}
              alt="Logo Pos Indonesia"
              className="h-12 object-contain"
            />
            <img
              src={sicepat}
              alt="Logo Sicepat"
              className="h-12 object-contain"
            />
            <img src={tiki} alt="Logo Tiki" className="h-12 object-contain" />
            {/* <img src={wahana} alt="Logo Wahana" className="h-12 object-contain" /> */}
          </div>
        </div>
      </div>

      <div className="bg-zinc-200 py-20 px-6 text-center">
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-800">
          <span className="font-bold">Custom Website Development</span> for
          Businesses
          <br />
          <span className="font-medium">
            Professional, Fast, and Tailored to Your Needs
          </span>
        </h2>

        <div className="relative mt-16 mb-10 flex items-center gap-4">
          <div className="flex-grow border-t border-gray-300" />
          <span className="bg-white px-4 py-1 rounded-full text-sm shadow-md font-medium text-gray-600">
            Services
          </span>
          <div className="flex-grow border-t border-gray-300" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-left max-w-6xl mx-auto">
          <div>
            <img src={uiux} alt="UX & UI Icon" className="h-8 mb-4" />
            <h3 className="font-semibold text-gray-800">UX & UI</h3>
            <p className="text-sm text-gray-600">
              Designing interfaces that are intuitive, efficient, and enjoyable
              to use.
            </p>
          </div>
          <div>
            <img src={web} alt="Web & Mobile App Icon" className="h-8 mb-4" />
            <h3 className="font-semibold text-gray-800">Web & Mobile App</h3>
            <p className="text-sm text-gray-600">
              Transforming ideas into exceptional web and mobile app
              experiences.
            </p>
          </div>
          <div>
            <img
              src={design}
              alt="Design & Creative Icon"
              className="h-8 mb-4"
            />
            <h3 className="font-semibold text-gray-800">Design & Creative</h3>
            <p className="text-sm text-gray-600">
              Crafting visually stunning designs that connect with your
              audience.
            </p>
          </div>
          <div>
            <img src={coding} alt="Development Icon" className="h-8 mb-4" />
            <h3 className="font-semibold text-gray-800">Development</h3>
            <p className="text-sm text-gray-600">
              Bringing your vision to life with the latest technology and design
              trends.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between min-h-screen bg-zinc-200 relative ">
        <div className="flex-1 flex flex-col items-center justify-center px-4 bg-white rounded-t-[100px]">
          <h1 className="text-8xl font-semibold text-gray-800 text-center leading-tight">
            Tell me about <br /> the next project
          </h1>
          <a
            type="button"
            href="mailto:salisahmad48@gmail.com"
            className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition mt-4"
          >
            Email
          </a>
        </div>

        <div className="flex justify-center bg-white">
          <div className="w-full border-t-2 border-gray-200 my-6"></div>
        </div>

        <div className="flex justify-between items-end bg-white px-4 pb-6 relative">
          <div className="text-left text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Tracking Resi. All rights
            reserved.
          </div>

          <footer className="flex flex-row items-center space-x-2 text-sm text-gray-600">
            <a
              href="https://www.instagram.com/aminssmile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline cursor-pointer"
            >
              Instagram
            </a>
            <span>/</span>
            <a
              href="https://www.linkedin.com/in/aminssmile/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline cursor-pointer"
            >
              LinkedIn
            </a>
            <span>/</span>
            <a
              href="https://aminssmileporto.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline cursor-pointer"
            >
              Web Portfolio
            </a>
          </footer>
        </div>
      </div>
      {/* <p className="font-">Teks Medium 500</p> */}
    </div>
  );
}
