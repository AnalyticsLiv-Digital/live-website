import React from 'react';
import { useSession, signOut } from "next-auth/react";
import { useRouter } from 'next/router';

const Navbar = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const currentPath = router.pathname;

  const allNavLinks = [
    { href: '/admin/dashboard', label: 'Dashboard', permission: null },
    { href: '/admin/blogs', label: 'Blogs', permission: 'blogs' },
    { href: '/admin/casestudies', label: 'Case Studies', permission: 'casestudies' },
    { href: '/admin/jobs', label: 'Jobs/Applications', permission: 'jobs' },
    { href: '/admin/upwork-jobs', label: 'Upwork Jobs', permission: 'upwork-jobs' },
    { href: '/admin/candidate-analysis', label: 'Candidate Analysis', permission: 'candidate-analysis' },
    { href: '/admin/leads', label: 'Leads', permission: 'leads' },
    { href: '/admin/ytPlaylist', label: 'Yt Playlist', permission: 'ytplaylist' },
    { href: '/admin/users', label: 'Users', permission: 'superadmin' }
  ];

  // Filter nav links based on user permissions
  const getVisibleNavLinks = () => {
    if (!session || !session.user) return [{ href: '/admin/dashboard', label: 'Dashboard', permission: null }];

    const userPermissions = session.user.permissions || [];
    const isSuperAdmin = session.user.isSuperAdmin || false;

    return allNavLinks.filter(link => {
      // Dashboard is always visible
      if (!link.permission) return true;

      // User Management only for super admin
      if (link.permission === 'superadmin') return isSuperAdmin;

      // Super admin sees everything
      if (isSuperAdmin) return true;

      // Regular users see only their permitted modules
      return userPermissions.includes(link.permission);
    });
  };

  const navLinks = getVisibleNavLinks();

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