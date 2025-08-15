import React from 'react'

const About = () => {
  return (
    <div>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 text-gray-800">
        {/* Text Section */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
            Who We Are
          </h2>
          <p className="text-lg md:text-xl mb-6 leading-relaxed">
            We are committed to making communication seamless. Our contact form allows you to reach out
            easily with questions, feedback, or project ideas, and our team ensures a fast and professional response.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center">
              <lord-icon
                src="https://cdn.lordicon.com/aupkjxuw.json"
                trigger="hover"
                classNamee="width:250px;height:250px">
              </lord-icon>
              <span className="font-medium text-gray-700">Fast Response</span>
            </li>
            <li className="flex items-center">
              <lord-icon
                src="https://cdn.lordicon.com/aupkjxuw.json"
                trigger="hover"
                className="width:250px;height:250px">
              </lord-icon>
              <span className="font-medium text-gray-700">User-Friendly Form</span>
            </li>
            <li className="flex items-center">
               <lord-icon
                src="https://cdn.lordicon.com/aupkjxuw.json"
                trigger="hover"
                className="width:250px;height:250px">
              </lord-icon>
              <span className="font-medium text-gray-700">Professional Support</span>
            </li>
          </ul>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
            src="/public/services.jpg"
            alt="Contact Illustration"
            className="w-72 md:w-full transform transition duration-500 hover:scale-105"
          />
        </div>
      </section>


    </div>
  )
}

export default About
