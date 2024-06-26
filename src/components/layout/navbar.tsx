import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Navbar() {
  const path = usePathname();

  return (
    <div className="bg-base-100">
      <div className="navbar mx-auto max-w-5xl py-2">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow">
              <li>
                <Link href="/" className={path == '/' ? 'active' : ''}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/posts" className={path.startsWith('/posts') ? 'active' : ''}>
                  Posts
                </Link>
              </li>
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost text-xl">
            Blog
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-5 px-1">
            <li>
              <Link href="/" className={path == '/' ? 'active' : ''}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/posts" className={path.startsWith('/posts') ? 'active' : ''}>
                Posts
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link href="/contact" className="btn btn-primary">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
