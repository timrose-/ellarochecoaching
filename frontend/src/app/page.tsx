"use client";

import Image from "next/image";
import Testimonials from "./components/Testimonials";

import React, { useEffect, useState } from "react";

export default function Home() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      setOpacity(1 - Math.min(window.scrollY / 200, 1));
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div
        id="hero"
        className="sticky top-0 -z-10 w-200 h-[30vh] transition-opacity flex justify-center items-center px-24"
        style={{
          opacity,
          transition: "opacity 0.3s",
        }}
      >
        <Image
          src="/logo.png"
          alt="Hero Background"
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </div>
      
      <section id="about" className="w-full mt-12 pb-20 px-24">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 px-4">
          <div className="w-full md:w-1/3">
            <Image
              src="/ella-portrait.png"
              alt="Ella Roche"
              width={400}
              height={400}
              className="rounded-full shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-light mb-8">Welcome to Ella Roche Coaching</h2>
            <p className="text-md font-light">
              Hello, I'm Ella. I'm an Animas certified performance and mindset coach. I believe that everyone should have access to coaching to help facilitate change and overcome barriers in their professional lives. It's not just for the C-Suite. It's for anyone who wants to make a change at work and is unsure how. 
            </p>
            <p className="text-md mt-4 font-light">
              I work with individuals to help them gain clarity of thought, troubleshoot issues, overcome challenges, break down barriers, build confidence and more. 
            </p>
            <p className="text-md mt-4 font-light">
              If you're feeling unsure of how to move forward in your professional life and would like to do something about it, please get in touch. I'll ask you questions aimed to help you broaden your thinking around your chosen topic, to challenge you, and ultimately help you move forward. 
            </p>
            <p className="text-md mt-4 font-light">
              Why not book in a free, no obligation, 30 min introductory session here and find out how coaching can help you.
            </p>
          </div>
        </div>
      </section>

      {/* <hr className="w-full border-t my-12" /> */}

      <section id="testimonials" className="w-full py-20 px-24">
            <h2 className="text-4xl font-light mb-8">Testimonials</h2>
            <p className="text-md">
              Here are some testimonials from clients I've worked with. If you'd like to see more, please visit my <a href="https://www.linkedin.com/in/ella-roche-1b0b4a1b2/" className="text-indigo-600 hover:underline">LinkedIn</a> page.
            </p>
        <Testimonials />
      </section>

      {/* <hr className="w-full border-t border-gray-400 my-12" /> */}

      <section id="accreditations" className="w-full py-20 px-24">
        <h2 className="text-4xl font-light mb-4">Accreditations</h2>
        <p className="text-md mb-8">
          I am an Animas certified performance and mindset coach, and a member of the International Coaching Federation (ICF). I also hold a diploma in coaching and mentoring.
        </p>
        <div className="flex justify-center items-center space-x-8">
            <div className="w-auto h-auto flex items-center justify-center">
              <Image
              src="/accreditations.png"
              alt="Accreditations"
              width={1000}
              height={100}
              />
            </div>
        </div>
      </section>
    </main>
  );
}
