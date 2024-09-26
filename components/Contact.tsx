// components/ContactForm.js
import Image from "next/image";
const ContactForm = () => {
    return (
      <section id="contact" className="text-gray-600 body-font bg-navy">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-6xl text-4xl font-medium title-font mb-4 text-slate-300">Contact Me</h1>
            
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-lg text-gray-500">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-teal-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <form name="contact" data-netlify="true" method="post"></form>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-lg text-gray-500">Contact Number</label>
                  <input
                    type="tel"
                    id="tel"
                    name="contactnumber"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-teal-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-lg text-gray-500">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-teal-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button type="submit" className="flex mx-auto text-teal-400 bg-navy border border-teal-400 font-semibold py-2 px-8 focus:outline-none  rounded text-lg">
                  Submit
                </button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                
                <span className="inline-flex">
                  <a href="https://www.instagram.com/hasti_delvadiya/" className="mr-4"><Image src="/contact/instagram.png" alt="" height={20} width={20}/></a>
                  <a href="https://github.com/hastidelvadiya2004" className="mr-4"><Image src="/contact/github.png" alt="" height={20} width={20}/></a>
                  <a href="https://www.linkedin.com/in/hasti-delvadiya-894145260/" className="mr-4"><Image src="/contact/linkedin.png" alt="" height={20} width={20}/></a>
                  
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ContactForm;
  

