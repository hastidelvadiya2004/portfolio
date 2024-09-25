'use client';
import Image from "next/image";
const Team = () => {
  return (
    <section id="skills" className="text-teal-400 bg-navy body-font ">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-6xl text-4xl  title-font mb-4 text-slate-300">Skills</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-slate-500 font-medium">
          Skilled in front-end and back-end development, I work with technologies like JavaScript, React, and Node.js. I build responsive, scalable solutions with a focus on clean code and user experience.
          </p>
        </div>
        <div className="flex flex-wrap -m-2">
          {teamMembers.map((member, index) => (
            <div key={index} className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center  border-teal-400 border p-4 rounded-lg">
                <Image
                  alt="team"
                  className=" bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src={member.image}
                  height={68}
                  width={68}
                />
                <div className="flex-grow">
                  <h2 className="text-slate-400 text-lg title-font font-medium">{member.name}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Team member data
const teamMembers = [
  { name: "HTML",image: "/skills/html.png" },
  { name: "CSS",image: "/skills/css.png" },
  { name: "JavaScript",image: "/skills/javascript.png" },
  { name: "Node.JS",image: "/skills/node.png" },
  { name: "React.JS",image: "/skills/react.png" },
  { name: "MongoDB",image: "/skills/mongodb.png" },
];

export default Team;
