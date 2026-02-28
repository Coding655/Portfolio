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