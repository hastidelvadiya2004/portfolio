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
            <div className="flex flex-wrap -m-2 justify-center">
              
              
                
                <span className="inline-flex">
                  <a href="https://www.instagram.com/hasti_delvadiya/" className="mr-10 ml-8"><Image src="/contact/instagram.png" alt="" height={50} width={50}/></a>
                  <a href="https://github.com/hastidelvadiya2004" className="mr-10"><Image src="/contact/github.png" alt="" height={50} width={50}/></a>
                  <a href="https://www.linkedin.com/in/hasti-delvadiya-894145260/" className="mr-10"><Image src="/contact/linkedin.png" alt="" height={50} width={50}/></a>
                  
                </span>
              </div>
            </div>
          </div>
      </section>
    );
  };
  
  export default ContactForm;
  