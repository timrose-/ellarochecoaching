import React from 'react'

export default function Coaching() {
  return (
    <main className="flex min-h-screen flex-col mt-12 px-24">

      <h1 className="text-indigo-400 text-3xl font-light mb-4">Coaching</h1>
      <section className="mb-8">
        <h2 className="text-indigo-400 text-2xl font-light mb-4">What is coaching?</h2>
        <p className="text-gray-700 text-md font-light">
          Coaching is a collaborative, non-directive conversation that brings about change through inquiry, reflection, choice and new behaviours.
          My job is not to know all the answers or to be an expert in every field/industry, coaching is about facilitation, helping you to find your own answers through open exploratory questions.
        </p>
        <p className="text-gray-700 text-md font-light mt-4">
          Coaching is not mentorship, therapy or counselling. It’s forward looking and non-directive.
          The sessions can take on several forms from open questions following a particular pattern or working through specific models or frameworks. It depends on how you’d like to work.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-indigo-400 text-xl font-light mb-4">Professional Support Topics</h3>
        <p className="text-gray-700 text-md font-light mt-4">
          From a professional point of view, there are many topics I can support you with:
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-700 text-md font-light mt-4">
          <li>Finding clarity on career goals</li>
          <li>Career transition</li>
          <li>Feeling stuck/procrastination</li>
          <li>Looking for a change and unsure where to start</li>
          <li>Challenges at work</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-indigo-400 text-xl font-light mb-4">Benefits</h3>
        <div className="mb-4">
          <strong className="block mb-1 text-gray-700 text-md font-light mt-4">To individuals</strong>
          <ul className="list-disc list-inside space-y-1 text-gray-700 text-md font-light mt-4">
            <li>Confidence</li>
            <li>Self-advocacy</li>
            <li>Meaning/purpose/fulfillment</li>
            <li>Satisfaction</li>
            <li>Clarity</li>
            <li>Self awareness</li>
            <li>Motivation</li>
            <li>Combatting limiting beliefs</li>
            <li>Growth mindset</li>
            <li>Personal advocacy</li>
          </ul>
        </div>
        <div>
          <strong className="block mb-1 text-gray-700 text-md font-light mt-4">To businesses</strong>
          <ul className="list-disc list-inside space-y-1 text-gray-700 text-md font-light mt-4">
            <li>Productivity</li>
            <li>Increased engagement</li>
            <li>Job satisfaction</li>
            <li>Feeling valued</li>
            <li>Focus</li>
          </ul>
        </div>
      </section>
    </main>
  );
}