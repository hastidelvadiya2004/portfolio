'use client';
import Image from 'next/image';

const About = () => {
  return (
    <section id='about' className="text-teal-600 body-font bg-navy">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            src="/about.gif"
            width={550}
            height={550}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-6xl text-4xl mb-5 text-slate-300">
            About Me
          </h1>
          <p className="mb-8 leading-relaxed text-slate-500 font-medium">
          As a full-stack developer, I am passionate about creating impactful, user-focused digital experiences that combine functionality and aesthetics. With a strong foundation in both front-end and back-end technologies, I specialize in building scalable, high-performance applications. My goal is to deliver accessible, intuitive solutions that provide a seamless experience across platforms. Whether it's enhancing user interfaces or optimizing server-side logic, I strive to write clean, efficient code that meets modern web standards. I am constantly learning and adapting to emerging technologies to craft solutions that drive meaningful engagement.
          </p>
          <div className="flex justify-center">
          <a href="/hasti_delvadiya_resume.pdf" target='_blank' className="inline-flex items-center justify-center border mr-5 border-teal-400  text-teal-400 font-semibold py-2 px-4 rounded">
          My Resume
        </a>
        <a href="#projects" className="inline-flex items-center justify-center border  border-teal-400  text-teal-400 font-semibold py-2 px-4 rounded">
          My Projects
        </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
