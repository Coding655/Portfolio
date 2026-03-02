import { MdOutlineEmail } from "react-icons/md";

export default function Banner() {

  return (
    <section id="home">
       {/* banner */}
      <div className='min-h-screen bg-sky-100 w-full items-center justify-center px-6 md:px-12 lg:px-24 py-24'>

        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" className="max-w-4xl mx-auto text-center pt-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Imran <span className="text-sky-300">Sirajee</span></h1>

          <h4 className="text-3xl md:text-3xl mb-6 text-gray-600">Full Stack Developer</h4>

          <p className="text-lg md:text-xl mb-12 text-gray-600 w-3xl mx-auto">Building modern, high-performance web applications with clean architecture and scalable solutions. Focused on turning ideas into impactful digital products.</p>

          <div className="flex justify-center gap-6">
            <button className="btn flex gap-4 items-center px-8 py-6 bg-sky-300 hover:bg-sky-500 text-white font-medium rounded-lg transition-all duration-300 delay-2">
              <MdOutlineEmail className="text-xl animate-bounce delay-3" style={{animationDuration: "2s"}} /> <span>Get In Task</span>
            </button>

            <button className="btn px-8 py-6 border border-blue-500 bg-white text-sky-400 hover:bg-sky-500 font-medium hover:text-white rounded-lg transition-all duration-300 delay-2">View My Work</button>
          </div>
        </div>
      </div>
    </section>
  )
}
