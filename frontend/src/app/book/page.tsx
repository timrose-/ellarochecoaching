import React from 'react';

const pricingOptions = [
  {
    title: 'Single Session',
    price: '£40',
    description: '1 hour session',
    features: [],
  },
  {
    title: '4 Session Package',
    price: '£144',
    description: '4 x 1 hour sessions',
    features: ['10% discount'],
  },
  {
    title: '6 Session Package',
    price: '£204',
    description: '6 x 1 hour sessions',
    features: ['15% discount'],
  },
  {
    title: 'Discovery Call',
    price: 'Free',
    description: '30 min introductory call (required before package)',
    features: [],
  },
];

const specialDeals = [
  {
    title: 'CMN Alumni Special',
    price: 'Free',
    description: '5 free sessions for CMN alumni (1 hour per week, waiting list applies). 25% discount on future sessions after the first 5.',
    features: ['Exclusive for CMN alumni', 'Limited availability'],
  },
  {
    title: 'Group Coaching & Training',
    price: 'Contact for pricing',
    description: 'Group coaching, training, and facilitation available (pending extra Animas training).',
    features: ['Ideal for teams and organisations'],
  },
  {
    title: 'Animas Trainer',
    price: 'Contact for details',
    description: 'Available for Animas training sessions.',
    features: [],
  },
  {
    title: 'BetterUp Coaching',
    price: 'Via BetterUp',
    description: 'Coaching available through the BetterUp platform.',
    features: [],
  },
];

export default function Book() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-indigo-400 text-3xl text-center font-light mb-4">Book a free, no obligation, 30 min introductory session here and find out how coaching can help you!</h1>

      <hr className="w-full border-t border-gray-400 my-12" />

      <div
        className="calendly-inline-widget mb-8"
        data-url="https://calendly.com/timrose-dev"
        style={{ minWidth: '320px', height: '630px' }}
      ></div>
      <script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      ></script>

      <hr className="w-full border-t border-gray-400 my-12" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {pricingOptions.map((option) => (
          <div
            key={option.title}
            className="border-2 border-gray-400 rounded-lg shadow p-6 flex flex-col items-center bg-white"
          >
            <div className="text-lg text-gray-700 font-semibold mb-2">{option.title}</div>
            <div className="text-3xl text-indigo-400 font-bold mb-2">{option.price}</div>
            <div className="mb-2 text-gray-600">{option.description}</div>
            {option.features.length > 0 && (
              <ul className="mb-2 text-sm text-green-700">
                {option.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      <div className="mt-12">
        <div className="text-indigo-300 text-xl text-center font-semibold mb-6">Special Deals</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {specialDeals.map((deal) => (
            <div
              key={deal.title}
              className="border-2 border-indigo-400 rounded-lg shadow p-6 flex flex-col items-center bg-indigo-50"
            >
              <div className="text-lg font-semibold mb-2">{deal.title}</div>
              <div className="text-2xl font-bold mb-2">{deal.price}</div>
              <div className="mb-2 text-gray-700">{deal.description}</div>
              {deal.features.length > 0 && (
                <ul className="mb-2 text-sm text-indigo-700">
                  {deal.features.map((feature) => (
                    <li key={feature}>• {feature}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
