"use client";

import React, { useState } from 'react';

const testimonials = [
    {
        name: "Kinga L",
        text: `Ella has been an exceptional mentor, providing invaluable support during a challenging time of redundancy.
        Our weekly meetings were instrumental in restructuring my CV and boosting my morale.
        Ella's kindness and helpfulness were evident throughout our interactions, making the process much smoother.
        I highly recommend her mentorship to anyone navigating career transitions.`,
        title: "Social Media Executive",
    },
    {
        name: "Izzy T",
        text: `Ella has been a fantastic coach, helping me navigate a tricky period at work and busild my confidence and assertiveness within my role.
                During the course of my coaching sessions Ella helped me to see opportunities at work and build the tools to advocate for myself, meaning I successfully negotiated a promotion—so couldn't ask for more!
                Ella is friendly, encouraging and level headed.
                I highly recommend her for anyone looking for coaching to navigate difficult situations at work and progression in tsheir career.`,
        title: "Research Operations Manager",
    },
    {
        name: "Sam S",
        text: `Ella attentively listened to my goals and ambitions, offering fresh perspectives through insightful questions.
                Her coaching facilitated goal achievement by encouraging both lateral and direct thinking through probing questions and thoughtful discussion.
                She is also a compassionate person and a competent listener.
                She's taught me a lot from just being herself!`,
        title: "Actor",
    },
    {
        name: "Hani S",
        text: `The sessions gave me an opportunity to think about the important decisions I need to make in my life, in a clear and constructive way.
                What I got out of my sessions with Ella is a great level of clarity about what motivates me and what would therefore fulfill me in both my personal and professional life.
                I've built a framework for myself to inform the decisions I want to make, at this point in my life and career.
                Before the sessions, I used to find the nature of these kinds of questions daunting.
                However, using this framework I now feel more confident in thinking about bigger changes in my life as I start thinking more seriously about where I want to go next.`,
        title: "Senior Researcher",
    },
    {
        name: "Lucy D",
        text: `Ella is an amazing coach and I immediately felt comfortable with her.
                She holds space with compassion and I feel really heard when we have our sessions.
                Her questioning and insights have really helped me to unblock some old patterns which have held me back my whole life.
                I feel more free after working with her and look forward to continuing our sessions.
                Would highly recommend Ella to anyone wanting to make meaningful change in their life.`,
        title: "Account Manager",
    },
];

export default function Testimonials() {
    const [current, setCurrent] = useState(0);

    const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);
    const next = () => setCurrent((current + 1) % testimonials.length);

    // Calculate indices for previous and next testimonials
    const prevIdx = (current - 1 + testimonials.length) % testimonials.length;
    const nextIdx = (current + 1) % testimonials.length;

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 md:w-1/2 w-full">
                        <div className="h-full bg-gray-100 p-8 rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                            </svg>
                            <p className="leading-relaxed mb-6">{testimonials[prevIdx].text}</p>
                            <a className="inline-flex items-center">
                                <img alt="testimonial" src="https://dummyimage.com/110x110" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                <span className="flex-grow flex flex-col pl-4">
                                    <span className="title-font font-medium text-gray-900">{testimonials[prevIdx].name}</span>
                                    <span className="text-gray-500 text-sm">{testimonials[prevIdx].title}</span>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/2 w-full">
                        <div className="h-full bg-gray-100 p-8 rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                            </svg>
                            <p className="leading-relaxed mb-6">{testimonials[current].text}</p>
                            <a className="inline-flex items-center">
                                <img alt="testimonial" src="https://dummyimage.com/110x110" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                <span className="flex-grow flex flex-col pl-4">
                                    <span className="title-font font-medium text-gray-900">{testimonials[current].name}</span>
                                    <span className="text-gray-500 text-sm">{testimonials[current].title}</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="relative left-0 top-1/2 transform -translate-y-1/2">
                        <button
                            onClick={prev}
                            className="bg-indigo-100 hover:bg-indigo-200 bg-base rounded-full p-2 focus:outline-none"
                            aria-label="Previous testimonial"
                        >
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                    </div>
                    <div className="relative right-0 transform -translate-y-1/2">
                        <button
                            onClick={next}
                            className="bg-indigo-100 hover:bg-indigo-200 bg-base rounded-full p-2 focus:outline-none"
                            aria-label="Next testimonial"
                        >
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                <div className="flex justify-center mt-6 space-x-2">
                    {testimonials.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrent(idx)}
                            className={`w-3 h-3 rounded-full ${current === idx ? "bg-earth5" : "bg-indigo-200"}`}
                            aria-label={`Go to testimonial ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
{/* 
<section class="text-gray-600 body-font"> 
  <div class="container px-5 py-24 mx-auto">
    <h1 class="text-3xl font-medium title-font text-gray-900 mb-12 text-center">Testimonials</h1>
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/2 w-full">
        <div class="h-full bg-gray-100 p-8 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p class="leading-relaxed mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque semper elit non pellentesque. Curabitur neque arcu, efficitur facilisis porta at, feugiat ut est. Vivamus sed dui in dui vehicula congue. Phasellus sed pellentesque nisi. Phasellus tempus bibendum massa ut tincidunt. Nam hendrerit ut tortor eget rutrum. Suspendisse facilisis ante eget fringilla auctor. Nam a odio orci. Pellentesque imperdiet quis sem</p>
          <a class="inline-flex items-center">
            <img alt="testimonial" src="https://dummyimage.com/110x110" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center">
            <span class="flex-grow flex flex-col pl-4">
              <span class="title-font font-medium text-gray-900">Jon doe</span>
              <span class="text-gray-500 text-sm">DESIGNER</span>
            </span>
          </a>
        </div>
      </div>
      <div class="p-4 md:w-1/2 w-full">
        <div class="h-full bg-gray-100 p-8 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p class="leading-relaxed mb-6">Fusce pharetra eget augue ac condimentum. Fusce dictum ex mauris, porta semper mi malesuada dictum. Donec congue ipsum diam. Donec eu tellus laoreet, iaculis mi sit amet, ultricies nulla. Maecenas orci metus, gravida et sodales eget, varius nec nibh. Suspendisse eget lorem blandit, sodales est eget, efficitur erat. Pellentesque feugiat velit in ante tincidunt, sed fringilla dui dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam sit amet ipsum viverra, bibendum odio vel, tempus arcu.</p>
          <a class="inline-flex items-center">
            <img alt="testimonial" src="https://dummyimage.com/110x110" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center">
            <span class="flex-grow flex flex-col pl-4">
              <span class="title-font font-medium text-gray-900">Jane Doe</span>
              <span class="text-gray-500 text-sm">DESIGNER</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section> */}