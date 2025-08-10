import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return ( 
    <footer className="w-full bg-gray-800 p-6 mt-16">

    <div className="flex justify-center space-x-6 mb-4">
        <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-300"
        aria-label="Facebook"
        >
        <FaFacebook className="w-6 h-6" />
        </a>
        <a
        href="https://www.twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-300"
        aria-label="Twitter"
        >
        <FaTwitter className="w-6 h-6" />
        </a>
        <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-300"
        aria-label="Instagram"
        >
        <FaInstagram className="w-6 h-6" />
        </a>
        <a
        href="https://www.linkedin.com/in/ellaroche/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-300"
        aria-label="LinkedIn"
        >
        <FaLinkedin className="w-6 h-6" />
      </a>
    </div>
    <p className="text-center text-gray-400 mt-4">
    © {new Date().getFullYear()} Ella Roche Coaching. All rights reserved.
    </p>
</footer>
  )
}