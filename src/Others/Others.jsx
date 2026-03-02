// animate progress  technique: 1

// import { useEffect, useRef, useState } from "react";

// export default function SkillCard({ title, skills }) {
//   const [animatedLevels, setAnimatedLevels] = useState(
//     skills.map(() => 0)
//   );
//   const [isVisible, setIsVisible] = useState(false);
//   const cardRef = useRef(null);

//   // 👀 Detect when section is visible
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (cardRef.current) {
//       observer.observe(cardRef.current);
//     }

//     return () => {
//       if (cardRef.current) {
//         observer.unobserve(cardRef.current);
//       }
//     };
//   }, []);

//   // 🎬 Animate with stagger
//   useEffect(() => {
//     if (isVisible) {
//       skills.forEach((skill, index) => {
//         setTimeout(() => {
//           setAnimatedLevels((prev) => {
//             const updated = [...prev];
//             updated[index] = skill.level;
//             return updated;
//           });
//         }, index * 300); // stagger delay
//       });
//     }
//   }, [isVisible, skills]);

//   return (
//     <div
//       ref={cardRef}
//       className="card bg-base-100 border border-base-300 p-6 shadow-xl"
//     >
//       <h2 className="text-2xl font-semibold text-center mb-6">
//         {title}
//       </h2>

//       <div className="space-y-6">
//         {skills.map((skill, index) => (
//           <div key={index}>
//             {/* Name + % */}
//             <div className="flex justify-between mb-2">
//               <span className="font-medium">{skill.name}</span>
//               <span className="text-sm text-gray-500">
//                 {animatedLevels[index]}%
//               </span>
//             </div>

//             {/* Progress Bar */}
//             <div className="w-full bg-base-300 rounded-full h-3 overflow-hidden">
//               <div
//                 className="h-3 rounded-full transition-all duration-1000 ease-out
//                            bg-linear-to-r from-sky-300 to-blue-400
//                            shadow-[0_0_12px_rgba(59,130,246,0.7)]"
//                 style={{ width: `${animatedLevels[index]}%` }}
//               ></div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }




// animate progress technique: 2

// import { useEffect, useState } from "react";

// export default function SkillCard({ title, skills }) {
//   const [loaded, setLoaded] = useState(false);

//   useEffect(() => {
//     setLoaded(true);
//   }, []);

//   return (
//     <div className="card bg-base-100 border border-base-300 p-6">
//       <h2 className="text-2xl font-semibold text-center mb-6">
//         {title}
//       </h2>

//       <div className="space-y-5">
//         {skills.map((skill, index) => (
//           <div key={index}>
//             <div className="flex justify-between mb-2">
//               <span>{skill.name}</span>
//               <span>{skill.level}%</span>
//             </div>

//             <div className="w-full bg-base-300 rounded-full h-2 overflow-hidden">
//               <div
//                 className="bg-info h-2 rounded-full transition-all duration-1000 ease-out  animate-[grow_1s_ease-out]"
//                 style={{
//                   width: loaded ? `${skill.level}%` : "0%",
//                 }}
//               ></div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



//categories:

//   <div key={project.id} className="rounded-xl shadow-md overflow-hidden bg-white group p-6 flex flex-col">
//                             <div className="overflow-hidden">
//                                 <img loading="lazy" className="h-72 w-full object-cover
//                                         transition-transform duration-500
//                                         group-hover:scale-110"
//                                     src={project.image} alt={project.title} />
//                             </div>

//                             <div className="p-5 flex flex-col grow">
//                                 <h1 className="text-2xl font-semibold">{project.title}</h1>
//                                 <p className="text-gray-500 mt-2 font-medium text-[17px]">{project.description}</p>

//                                 {/* technologies */}

//                                 <div className="flex flex-wrap gap-2 mt-4">
//                                     {project.technologies.map((tech, index) => (
//                                         <span key={index} className="text-xs border-2 border-blue-50 text-blue-500 transition-all duration-300 ease-in-out hover:bg-blue-100 hover:text-gray-600 px-3 py-1 rounded-full cursor-pointer">{tech}</span>
//                                     ))}
//                                 </div>

//                             </div>
//                         </div>


// back to tp and react scroll

// import React from 'react';
// import { Link, Element, animateScroll as scroll } from 'react-scroll';

// export default function App() {
//   return (
//     <div>
//       {/* Navbar */}
//       <nav className="fixed top-0 w-full bg-white shadow p-4 flex justify-around">
//         <Link to="home" smooth={true} duration={500} className="cursor-pointer">Home</Link>
//         <Link to="about" smooth={true} duration={500} className="cursor-pointer">About</Link>
//         <Link to="contact" smooth={true} duration={500} className="cursor-pointer">Contact</Link>
//       </nav>

//       <div className="pt-16">
//         {/* Sections */}
//         <Element name="home" className="h-screen flex items-center justify-center bg-sky-100">
//           <h1 className="text-4xl font-bold">Home Section</h1>
//         </Element>

//         <Element name="about" className="h-screen flex items-center justify-center bg-green-100">
//           <h1 className="text-4xl font-bold">About Section</h1>
//         </Element>

//         <Element name="contact" className="h-screen flex items-center justify-center bg-pink-100">
//           <h1 className="text-4xl font-bold">Contact Section</h1>
//           <button
//             onClick={() => scroll.scrollToTop({ duration: 500 })}
//             className="mt-4 px-4 py-2 bg-sky-400 text-white rounded"
//           >
//             Back to Top
//           </button>
//         </Element>
//       </div>
//     </div>
//   );
// }

//navbar 

// import { useEffect, useState } from "react";
// import { IoMdDownload } from "react-icons/io";
// import { Link } from "react-scroll";

// export default function Navbar() {
//     const [scrolled, setScrolled] = useState(false)

//     useEffect(() => {
//         const handleScroll = () => {
//             setScrolled(window.scrollY > 50)
//         }

//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll)

//     }, [])

//     return (
//         <nav className={`fixed w-full left-0 top-0 z-10 px-6 py-3 transition-all duration-300 delay-1 ${scrolled ? "bg-white shadow" : "bg-transparent"} `}>
//             <div className="flex justify-around items-center">
//                 <h1 className="text-[28px] font-serif font-extrabold text-gray-500">Imran <span className="text-sky-400">Sirajee</span></h1>
//                 <ul className="flex gap-12 text-[20px] font-semibold">
//                     <li>
//                         <Link smooth={true} duration={500} href="#home" className="relative group text-gray-500 hover:text-sky-400 focus:text-sky-400">Home
//                             <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-sky-400 transition-all duration-300 group-hover:w-full g roup-focus:w-full">
//                             </span>
//                         </Link>
//                     </li>

//                     <li>
//                         <a href="#home" className="relative group text-gray-500 hover:text-sky-400 focus:text-sky-400">About
//                             <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-sky-400 transition-all duration-300 group-hover:w-full group-focus:w-full">
//                             </span>
//                         </a>
//                     </li>

//                     <li>
//                         <a href="#home" className="relative group text-gray-500 hover:text-sky-400 focus:text-sky-400">Skills
//                             <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-sky-400 transition-all duration-300 group-hover:w-full group-focus:w-full">
//                             </span>
//                         </a>
//                     </li>

//                     <li>
//                         <a href="#home" className="relative group text-gray-500 hover:text-sky-400 focus:text-sky-400">Projects
//                             <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-sky-400 transition-all duration-300 group-hover:w-full group-focus:w-full">
//                             </span>
//                         </a>
//                     </li>

//                     <li>
//                         <a href="#home" className="relative group text-gray-500 hover:text-sky-400 focus:text-sky-400">Contact
//                             <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-sky-400 transition-all duration-300 group-hover:w-full group-focus:w-full">
//                             </span>
//                         </a>
//                     </li>

//                 </ul>

//                 <button className="flex items-center gap-3 text-sky-400 border border-sky-400 hover:bg-white px-6 py-2 rounded-xl transition-all duration-300 delay-1">
//                     <IoMdDownload />
//                     <span className="font-serif ">Resume</span>
//                 </button>
//             </div>
//         </nav>
//     )
// }
// navbar 2

// Navbar.jsx
// import { useEffect, useState } from "react";
// import { IoMdDownload } from "react-icons/io";
// import { Link } from "react-scroll";
// import { HiMenu, HiX } from "react-icons/hi";

// export default function Navbar() {
//     const [scrolled, setScrolled] = useState(false);
//     const [mobileOpen, setMobileOpen] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => setScrolled(window.scrollY > 50);
//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     const navItems = ["home", "about", "skills", "projects", "contact"];

//     return (
//         <nav
//             className={`fixed w-full left-0 top-0 z-20 px-6 py-3 transition-all duration-300 ${scrolled ? "bg-white shadow" : "bg-transparent"
//                 }`}
//         >
//             <div className="flex justify-between items-center max-w-7xl mx-auto">
//                 {/* Logo */}
//                 <h1 className="text-2xl md:text-3xl font-serif font-extrabold text-gray-500">
//                     Imran <span className="text-sky-400">Sirajee</span>
//                 </h1>

//                 {/* Desktop Menu */}
//                 <ul className="hidden md:flex gap-8 text-lg font-semibold">
//                     {navItems.map((item) => (
//                         <li key={item}>
//                             <Link
//                                 to={item}
//                                 smooth={true}
//                                 duration={500}
//                                 offset={-80} // Adjust for fixed navbar height
//                                 className="relative group text-gray-500 hover:text-sky-400 cursor-pointer"
//                             >
//                                 {item.charAt(0).toUpperCase() + item.slice(1)}
//                                 <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-sky-400 transition-all duration-300 group-hover:w-full"></span>
//                             </Link>
//                         </li>
//                     ))}
//                 </ul>

//                 {/* Resume Button */}
//                 <button className="hidden md:flex items-center gap-2 text-sky-400 border border-sky-400 hover:bg-white px-4 py-2 rounded-xl transition-all duration-300">
//                     <IoMdDownload />
//                     <span className="font-serif">Resume</span>
//                 </button>

//                 {/* Mobile Hamburger */}
//                 <div className="md:hidden">
//                     <button onClick={() => setMobileOpen(!mobileOpen)}>
//                         {mobileOpen ? <HiX size={28} /> : <HiMenu size={28} />}
//                     </button>
//                 </div>
//             </div>

//             {/* Mobile Menu */}
//             {mobileOpen && (
//                 <ul className="flex flex-col items-center gap-6 mt-4 bg-white shadow-md py-6 md:hidden">
//                     {navItems.map((item) => (
//                         <li key={item}>
//                             <Link
//                                 to={item}
//                                 smooth={true}
//                                 duration={500}
//                                 offset={-80}
//                                 className="text-gray-500 hover:text-sky-400 text-xl cursor-pointer"
//                                 onClick={() => setMobileOpen(false)}
//                             >
//                                 {item.charAt(0).toUpperCase() + item.slice(1)}
//                             </Link>
//                         </li>
//                     ))}
//                     <li>
//                         <button className="flex items-center gap-2 text-sky-400 border border-sky-400 hover:bg-white px-4 py-2 rounded-xl transition-all duration-300">
//                             <IoMdDownload />
//                             <span className="font-serif">Resume</span>
//                         </button>
//                     </li>
//                 </ul>
//             )}
//         </nav>
//     );
// }
