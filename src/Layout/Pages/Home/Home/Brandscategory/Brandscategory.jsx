// import { useState } from "react";
// import img1 from "./../../../../../assets/images/logo1.jpeg";
// import img2 from "./../../../../../assets/images/logo2.jpeg";
// import img3 from "./../../../../../assets/images/logo3.jpeg";
// import img4 from "./../../../../../assets/images/logo4.jpeg";
// import img5 from "./../../../../../assets/images/logo5.png";

// const Brandscategory = () => {
//   const images = [img1, img2, img3, img4, img5];
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   return (
//     <div className="relative w-full max-w-4xl mx-auto pt-5">
//       <div className="flex overflow-hidden">
//         <div
//           className="flex transition-transform duration-500"
//           style={{
//             transform: `translateX(-${currentIndex * 100}%)`,
//           }}
//         >
//           {images.map((image, index) => (
//             <img
//               key={index}
//               src={image}
//               alt={`Brand ${index + 1}`}
//               className="w-40 h-auto mx-2"
//             />
//           ))}
//         </div>
//       </div>
//       {/* Navigation Arrows */}
//       <button
//         onClick={handlePrev}
//         className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
//       >
//         &#8592;
//       </button>
//       <button
//         onClick={handleNext}
//         className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
//       >
//         &#8594;
//       </button>
//     </div>
//   );
// };

// export default Brandscategory;
