import img from "/images/img2.png"

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 md:px-16 overflow-hidden"
    >
       <style>
        {`
          @keyframes floatX {
            0% { transform: translateX(0px); }
            50% { transform: translateX(40px); }
            100% { transform: translateX(0px); }
          }

          @keyframes floatXReverse {
            0% { transform: translateX(0px); }
            50% { transform: translateX(-40px); }
            100% { transform: translateX(0px); }
          }
        `}
      </style>

      {/* Decorative Circles */}
      <div className="absolute left-110 w-24 h-24 bg-blue-200 rounded-full opacity-40 animate-bounce" style={{animationDuration: "4s"}}></div>
      <div className="absolute -bottom-120 w-20 h-20 bg-blue-400 rounded-full opacity-40 animate-bounce" style={{ animation: "floatX 5s ease-in-out infinite" }}></div>

      <div className="flex flex-col md:flex-row  items-center gap-12">

        {/* Profile Image */}
        <div className="shrink-0 flex-1">
          <div data-aos="fade-right" data-aos-duration="1000" className="w-80 h-80 ml-24  rounded-full border-4 border-blue-200 shadow-lg overflow-hidden">
            <img
              src={img}   // <-- Replace with your image path
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Content */}
        <div data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000" className="flex-1">
          <h2 className="text-4xl font-bold mb-6">
            About <span className="text-sky-400">Me</span>
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4 text-base md:text-lg">
            I'm a passionate Full Stack Developer with over 5 years of experience
            creating digital solutions that bridge the gap between design and
            functionality.
          </p>

          <p className="text-gray-600 leading-relaxed mb-4 text-base md:text-lg">
            My expertise spans modern web technologies including React,
            Node.js, TypeScript, and cloud platforms. I thrive on solving
            complex problems and turning ideas into scalable,
            user-friendly applications.
          </p>

          <p className="text-gray-600 leading-relaxed mb-4 text-base md:text-lg">
            When I'm not coding, you'll find me exploring new technologies,
            contributing to open source projects, or sharing knowledge with
            the developer community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;