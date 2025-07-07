import React from 'react'

const FAQ = () => {
  return (
    <section className=' h-[60vh] faq-section py-24 xl:py-28' id='faq'>
                                                   
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-1">
          <h6 className="text-lg text-indigo-600 font-medium text-center mb-2">
            FAQs
          </h6>
          <h2
            className="text-4xl font-manrope text-center font-bold text-gray-900 leading-[3.25rem]"
          >
            Frequently asked questions
          </h2>
        </div>

        <div className="accordion-group" data-accordion="default-accordion">
          <div
            className="accordion py-8 px-6 border-b border-solid border-gray-200 transition-all duration-500 rounded-2xl hover:bg-indigo-50 accordion-active:bg-indigo-50 active"
            id="basic-heading-one-with-arrow"
          >
            <button
              className="accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-900 w-full transition duration-500 text-left hover:text-indigo-600 accordion-active:font-medium accordion-active:text-indigo-600"
              aria-controls="basic-collapse-one-with-arrow"
            >
              <h5>How do I update my billing information?</h5>
              <svg
                className="text-gray-500 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600 accordion-active:rotate-180"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                  stroke="currentColor"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
            <div
              id="basic-collapse-one-with-arrow"
              className="accordion-content w-full px-0 overflow-hidden"
              aria-labelledby="basic-heading-one-with-arrow"
              style={{  maxHeight: '250px'}} 
            >
              <p className="text-base text-gray-900 leading-6">
                To contact customer support, look for a 'Contact us' or 'Help'
                button or link on the website or platform. You may be able to
                email, call, or chat with customer support for assistance.
              </p>
            </div>
          </div>
          <div
            className="accordion py-8 px-6 border-b border-solid border-gray-200 transition-all duration-500 rounded-2xl hover:bg-indigo-50 accordion-active:bg-indigo-50"
            id="basic-heading-two-with-arrow"
          >
            <button
              className="accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-900 w-full transition duration-500 text-left hover:text-indigo-600 accordion-active:text-indigo-600"
              aria-controls="basic-collapse-two-with-arrow"
            >
              <h5>How can I contact customer support?</h5>
              <svg
                className="text-gray-500 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600 accordion-active:rotate-180"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                  stroke="currentColor"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
            <div
              id="basic-collapse-two-with-arrow"
              className="accordion-content w-full px-0 overflow-hidden"
              aria-labelledby="basic-heading-two-with-arrow"
            >
              <p className="text-base text-gray-900 leading-6">
                To contact customer support, look for a 'Contact us' or 'Help'
                button or link on the website or platform. You may be able to
                email, call, or chat with customer support for assistance.
              </p>
            </div>
          </div>
          <div
            className="accordion py-8 px-6 border-b border-solid border-gray-200 transition-all duration-500 rounded-2xl hover:bg-indigo-50 accordion-active:bg-indigo-50"
            id="basic-heading-three-with-arrow"
          >
            <button
              className="accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-900 w-full transition duration-500 text-left hover:text-indigo-600 accordion-active:text-indigo-600"
              aria-controls="basic-collapse-three-with-arrow"
            >
              <h5>How do I update my profile information?</h5>
              <svg
                className="text-gray-500 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600 accordion-active:rotate-180"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                  stroke="currentColor"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
            <div
              id="basic-collapse-three-with-arrow"
              className="accordion-content w-full px-0 overflow-hidden"
              aria-labelledby="basic-heading-three-with-arrow"
            >
              <p className="text-base text-gray-900 leading-6">
                To contact customer support, look for a 'Contact us' or 'Help'
                button or link on the website or platform. You may be able to
                email, call, or chat with customer support for assistance.
              </p>
            </div>
          </div>
          <div
            className="accordion py-8 px-6 transition-all duration-500 rounded-2xl hover:bg-indigo-50 accordion-active:bg-indigo-50"
            id="basic-heading-three-with-arrow"
          >
            <button
              className="accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-900 w-full transition duration-500 text-left hover:text-indigo-600 accordion-active:text-indigo-600"
              aria-controls="basic-collapse-three-with-arrow"
            >
              <h5>How do I find my purchase history?</h5>
              <svg
                className="text-gray-500 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600 accordion-active:rotate-180"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                  stroke="currentColor"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
            <div
              id="basic-collapse-three-with-arrow"
              className="accordion-content w-full px-0 overflow-hidden"
              aria-labelledby="basic-heading-three-with-arrow"
            >
              <p className="text-base text-gray-900 leading-6">
                To contact customer support, look for a 'Contact us' or 'Help'
                button or link on the website or platform. You may be able to
                email, call, or chat with customer support for assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
   
                                            
    </section>
  )
}

export default FAQ
