
import Image from 'next/image';

const CustomSection = () => {
  return (
    <section id='projects' className="text-gray-600 body-font bg-navy">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex justify-center sm:text-6xl text-4xl text-slate-300 mb-10">
          Projects
        </div>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-slate-500 font-medium text-center mb-11">
        I've developed several web applications using React, Node.js, and MongoDB. My projects focus on creating responsive designs, optimizing performance, and enhancing user engagement.
          </p>
        <div className="flex flex-wrap justify-center -m-4">
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/projects/Pinterest.png"
                alt="content"
                width={720}
                height={400}
              />
              <h2 className="text-xl text-gray-900 font-medium title-font mb-4">Pinterest Clone</h2>
              <p className="leading-relaxed text-base">
              Built a Pinterest clone using the MERN stack, featuring user authentication, image uploads, and dynamic pinboards.
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/projects/todo.jpeg"
                alt="content"
                width={721}
                height={401}
              />
              <h2 className="text-xl text-gray-900 font-medium title-font mb-4">ToDo List App</h2>
              <p className="leading-relaxed text-base">
              Developed a to-do list app with React, featuring task management, edit functionality, and local storage support.
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/projects/expense.avif"
                alt="content"
                width={722}
                height={402}
              />
              <h2 className="text-xl text-gray-900 font-medium title-font mb-4">Expense Manager</h2>
              <p className="leading-relaxed text-base">
              Created an expense manager using the MERN stack, enabling users to track expenses and manage budgets.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default CustomSection;
