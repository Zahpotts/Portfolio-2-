import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-gradient-to-r from-orange-500 via-yellow-400 to-blue-600 shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 text-white font-bold">
        {/* Left: Site Title */}
        <Link href="/" className="text-2xl tracking-wider hover:text-yellow-300 transition">
          Isaiah Potts
        </Link>

        {/* Right: Navigation Links */}
        <div className="flex space-x-6 text-lg">
          <Link href="/" className="hover:text-yellow-200 transition">Home</Link>
          <Link href="/about" className="hover:text-yellow-200 transition">About</Link>
          <Link href="/projects" className="hover:text-yellow-200 transition">Projects</Link>
          <Link href="/contact" className="hover:text-yellow-200 transition">Contact</Link>
          <a href="/Isaiah_Potts_Resume.pdf" download className="hover:text-yellow-200 transition">Resume</a>
        </div>
      </nav>
    </header>
  );
}
