export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-700 via-orange-500 to-yellow-400 text-white py-6 mt-12 shadow-inner">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        {/* Social Links */}
        <div className="space-x-6">
          <a
            href="https://github.com/Zahpotts"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-200 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/isaiah-potts-710848148"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-200 transition"
          >
            LinkedIn
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-white/80">
          &copy; {new Date().getFullYear()} Isaiah Potts. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
