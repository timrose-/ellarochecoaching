import React from 'react';

const faqs = [
  {
    question: 'What does a typical coaching journey look like?',
    answer: '',
  },
  {
    question: 'How much does it cost?',
    answer: '',
  },
  {
    question: 'How long are the sessions?',
    answer:
      'The first introductory call will be 30 minutes. I will ask you a number of questions to understand your current situation and determine whether coaching appears to be the right course of action for you at this time. It is also an opportunity for you to ask questions, so please feel free.',
  },
  {
    question: 'What does a typical session look like?',
    answer: '',
  },
  {
    question: 'What outcomes can I expect from coaching?',
    answer: '',
  },
  {
    question: 'What hours are you available?',
    answer:
      'Please check Calendly, but it is outside of typical working hours, so outside of 9-6pm Monday to Friday.',
  },
  {
    question: 'What credentials do you have?',
    answer:
      'I am certified by the Animas Centre for Coaching. I began the training course in January 2024 and qualified in October 2024. Their triple accredited Diploma in Transformative Coaching (ICF, EMCC, AC).',
  },
  {
    question: 'What experience do you have?',
    answer:
      'I have completed 50+ hours of coaching so far and am working towards my next qualification - ICF Level 3.',
  },
  {
    question: 'Is coaching confidential?',
    answer: 'Yes.',
  },
  {
    question: 'Do you do vouchers?',
    answer: 'Yes.',
  },
];

export default function FAQ() {
  return (
    <main className="flex min-h-screen flex-col mt-12 px-24">
      <section className="bg-white dark:bg-gray-900">

        <div className="container max-w-4xl px-6 py-10 mx-auto">
          <h1 className="text-indigo-400 text-left text-3xl font-light mb-4">Frequently Asked Questions</h1>

          <div className="mt-12 space-y-8">
            {faqs.map((faq, idx) => (

              <div
                key={idx}
                style={{
                  border: '1px solid #e0e0e0',
                  borderRadius: 8,
                  padding: '1.5rem',
                  background: '#fafafa',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                }}
              >

                <h2 className="collapse-title font-semibold" style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem', color: '#333' }}>
                  {faq.question}
                </h2>
                <p className="collapse-content text-sm" style={{ margin: 0, color: '#555' }}>
                  {faq.answer || <span style={{ color: '#aaa' }}>Answer coming soon.</span>}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
