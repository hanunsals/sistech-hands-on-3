import Image from 'next/image';
import { useState } from 'react';

export default function Card({ category, title, duration, price, imageUrl }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`relative ${isHovered ? 'blur-sm' : ''}`}>
        <Image src={imageUrl} alt="Course Image" width={400} height={200} />
      </div>
      <div className="p-4">
        <p className="text-gray-500 text-xs mb-1">{category}</p>
        <h3 className="text-gray-800 font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-1"><i className="fa-regular fa-clock"></i> {duration}</p>
        <p className="text-gray-600 text-sm mb-4"><i className="fa-solid fa-dollar-sign"></i> {price}</p>
        <div className="flex space-x-2">
          <button className="bg-blue-700 text-white px-4 py-1 rounded">View Course</button>
          <button className="bg-white border border-blue-700 text-blue-700 px-4 py-1 rounded">Buy Course</button>
        </div>
      </div>
    </article>
  );
}
