import React from 'react'

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center mt-12 px-24">
        <div className="w-full text-center md:text-left">
          <h1 className="text-indigo-400 text-3xl font-light mb-4">About</h1>
          <p className="text-gray-700 text-md font-light">
            I'm a Global Account Director with 10+ years of experience working in the advertising and technology sectors in the UK and US. I co-founded the women in technology group DevelopHer while also on the board of Girls in Tech. In addition, I mentor at The Creative Mentor Network.
          </p>
        </div>
        <div className="w-full text-center md:text-left mt-12">
          <h2 className="text-indigo-400 text-2xl font-light mb-4">My Passion</h2>
          <p className="text-gray-700 text-md font-light">
            I am passionate about learning and growing and meeting new people… something about what brought me to coaching… courses etc.
          </p>
        </div>
        <div className="w-full text-center md:text-left mt-12">
          <h2 className="text-indigo-400 text-2xl font-light mb-4">Coaching Journey</h2>
          <p className="text-gray-700 text-md font-light">
            I've been fortunate enough to have a performance coach and mentors early on in my career, which gave me so much useful insight and objective support to determine my next steps.
          </p>
        </div>
    </main>
  )
}