import Image from "next/image";
import VDMLogo from "@/public/VDMLogoIII.png"; // Adjust the path as necessary

const Header = () => {
  return (
    <>
      {/* <header className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold">VDM Urban</h1>
        <p className="text-sm">Building Compliance Solutions</p>
      </header> */}

      <header className="bg-gray-900/70 text-white sticky w-full top-0 z-50 flex ">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex  items-center">
            <Image
              src={VDMLogo}
              alt="VDM Urban Logo"
              className=""
              //   width={32}
              height={42}
            />
            <ul className="hidden md:flex justify-center space-x-8">
              <li>
                <a href="#home" className="hover:text-gray-300 transition">
                  HOME
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gray-300 transition">
                  ABOUT
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gray-300 transition">
                  SERVICES
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-300 transition">
                  CONTACT
                </a>
              </li>
            </ul>
            {/* Mobile menu button */}
            <button className="md:hidden" type="button">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <span className="sr-only">mobile menu</span>
            </button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
