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
        <div className="w-full max-w-xl mx-auto py-12">
            <div className="relative flex items-center justify-center">
                {/* Previous card (peek) */}
                <div
                    className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-8/7 w-72 opacity-60 scale-90 pointer-events-none transition-all duration-300"
                    aria-hidden="true"
                >
                    <div className="testimonials-card rounded-lg shadow p-6 text-justified border border-gray-100">
                        <p className="text-sm italic text-gray-500 mb-2 line-clamp-4">
                            "{testimonials[prevIdx].text}"
                        </p>
                        <div className="mt-2">
                            <h1>{testimonials[prevIdx].name}</h1>
                            <span className="block text-xs text-gray-400">{testimonials[prevIdx].title}</span>
                        </div>
                    </div>
                </div>

                {/* Main card */}
                <div className="relative testimonials-card rounded-lg shadow-lg p-8 text-justified z-10 w-full mx-4">
                    <p className="text-md italic text-gray-700 mb-4 whitespace-pre-line">
                        "{testimonials[current].text}"
                    </p>
                    <div className="mt-4">
                        <h1>{testimonials[current].name}</h1>
                        <span className="block text-sm text-gray-500">{testimonials[current].title}</span>
                    </div>
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                        <button
                            onClick={prev}
                            className="bg-indigo-100 hover:bg-indigo-200 text-indigo-600 rounded-full p-2 focus:outline-none"
                            aria-label="Previous testimonial"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                    </div>
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2">
                        <button
                            onClick={next}
                            className="bg-indigo-100 hover:bg-indigo-200 text-indigo-600 rounded-full p-2 focus:outline-none"
                            aria-label="Next testimonial"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Next card (peek) */}
                <div
                    className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-8/7 w-72 opacity-60 scale-90 pointer-events-none transition-all duration-300"
                    aria-hidden="true"
                >
                    <div className="testimonials-card rounded-lg shadow p-6 text-justified border border-gray-100">
                        <p className="text-sm italic text-gray-500 mb-2 line-clamp-4">
                            "{testimonials[nextIdx].text}"
                        </p>
                        <div className="mt-2">
                            <h1>{testimonials[nextIdx].name}</h1>
                            <span className="block text-xs text-gray-400">{testimonials[nextIdx].title}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        className={`w-3 h-3 rounded-full ${current === idx ? "bg-indigo-600" : "bg-indigo-200"}`}
                        aria-label={`Go to testimonial ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}