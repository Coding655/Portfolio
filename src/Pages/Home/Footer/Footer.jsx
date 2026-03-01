import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

export default function Footer() {
  return (
    <section className="bg-mauve-950 text-neutral-content mt-16 pt-12 px-6">
      <div data-aos="fade-down" className="flex justify-between gap-8 h-96 w-full">

        <div className="max-w-sm" >
          <h1 className="text-3xl font-medium mb-6 font-serif">Imran <span className="text-sky-400">Sirajee</span></h1>
          <p className=" text-lg">Full Stack Developer passionate about creating innovative solutions and building the future through code.</p>
        </div>

        <div>
          <h1 className="text-3xl font-medium mb-6 font-serif">Quick Links</h1>

          <div className="flex flex-col gap-2 text-center text-lg">
            <p>About</p>
            <p>Skills</p>
            <p>Projects</p>
            <p>Experience</p>
            <p>Contact</p>
          </div>

        </div>

        <div>
          <h1 className="text-3xl font-medium mb-6 font-serif">Get In Touch</h1>

          <div className="space-y-2 text-lg">
            <p>imransirazee2001@gmail.com</p>
            <p>01751083562</p>
            <p>Bangladesh</p>
          </div>

          <div className="flex gap-4 items-center mt-6">
            <FaGithub></FaGithub>
            <FaLinkedin></FaLinkedin>
            <FaTwitter></FaTwitter>
            <IoMailOutline></IoMailOutline>
          </div>
        </div>
      </div>
      <hr/>
      <div className="flex justify-between items-center text-md px-5 py-5 ">
        <p>Copy 2026 Hrithik, Made with ❤ and lots of coffee </p>
        <p className="capitalize">build with react & tailwind CSS  -  hosted on netlify</p>
      </div>

    </section>
  )
}
