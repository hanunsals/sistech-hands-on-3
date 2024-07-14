import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <aside className={`fixed top-0 left-0 bottom-0 ${isExpanded ? 'w-60' : 'w-28'} h-screen bg-blue-900 text-white transition-width duration-300`}>
      <nav className="flex flex-col p-4">
        <div className="flex justify-center mb-8">
          <Image src="/assets/logo.png" alt="logo" width={50} height={50} className="rounded-full" />
        </div>
        <ul className="flex-1 space-y-4">
          <li className="hover:bg-blue-800 p-2 rounded">
            <Link href="/" className="flex items-center space-x-4">
              <i className="fas fa-tachometer-alt"></i>
              {isExpanded && <span>Dashboard</span>}
            </Link>
          </li>
          <li className="hover:bg-blue-800 p-2 rounded">
            <Link href="/profile" className="flex items-center space-x-4">
              <i className="fas fa-user"></i>
              {isExpanded && <span>Profile</span>}
            </Link>
          </li>
          <li className="bg-blue-700 p-2 rounded">
            <Link href="/course" className="flex items-center space-x-4">
              <i className="fa-solid fa-file"></i>
              {isExpanded && <span>Course</span>}
            </Link>
          </li>
          <li className="hover:bg-blue-800 p-2 rounded">
            <Link href="/subscription" className="flex items-center space-x-4">
              <i className="fa-solid fa-dollar-sign"></i>
              {isExpanded && <span>Subscription</span>}
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
