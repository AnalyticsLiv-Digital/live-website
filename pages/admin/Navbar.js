import React from 'react';
import { useSession, signOut } from "next-auth/react";
import { useRouter } from 'next/router';

const Navbar = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const currentPath = router.pathname;

  const navLinks = [
    { href: '/admin/dashboard', label: 'Dashboard' },
    { href: '/admin/blogs', label: 'Blogs' },
    { href: '/admin/casestudies', label: 'Case Studies' },
    { href: '/admin/jobs', label: 'Jobs/Applications' },
    { href: '/admin/leads', label: 'Leads' },
    { href: '/admin/ytPlaylist', label: 'Yt Playlist' }
  ];

  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-center items-center">
        <ul className="flex max-md:w-[60%] max-md:flex-wrap max-md:space-y-2 md:space-x-10">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={`px-4 py-2 rounded transition duration-300 ${
                  currentPath === href ? 'bg-gray-600' : 'hover:bg-gray-700'
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        {session && (
          <button
            onClick={() => signOut()}
            className="ml-8 bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition duration-300"
          >
            Sign out
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;