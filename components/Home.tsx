'use client';

const Hero = () => {
  return (
    <section id="home" className=" w-full h-[650px] flex items-center justify-center bg-navy">
      {/* Centered Text */}
      <div className="  text-left p-5">
        <p className="mb-7 text-teal-400 text-lg font-medium">Hi, my name is</p>
        <h1 className="text-4xl md:text-6xl font-bold text-slate-300 mb-3">Hasti Delvadiya.</h1>
        <h1 className="text-4xl md:text-6xl font-bold text-slate-500 mb-5">I build fullstack websites.</h1>
        <p className="text-base md:text-base text-slate-500 ">I'm a full-stack developer specializing in building and delivering</p>
        <p className="text-base md:text-base text-slate-500 ">exceptional digital experiences. My current focus is on creating accessible,</p>
        <p className="text-base md:text-base text-slate-500 mb-9">intuitive products that provide seamless user interactions.</p>
        <a href="#contact" className="inline-flex items-center justify-center border border-teal-400 text-teal-400 font-semibold py-2 px-4 rounded">
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
