import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-600 to-green-900 dark:from-green-600 dark:via-gray-700 dark:to-gray-900 shadow-lg text-white py-10">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:justify-between gap-10">
          {/* Brand Section */}
          <div className="md:w-1/3">
            <h1 className="text-2xl font-bold mb-3">
              <Link
                href="/"
                className="hover:text-blue-400 transition-colors duration-1000 ease-in-out"
              >
                Animal Bazaar
              </Link>
            </h1>
            <p className="text-white/80 text-sm md:text-md font-medium">
              Explore a wide variety of animals and make your shopping
              experience enjoyable. Quality and satisfaction are our priorities.
            </p>
            {/* Social Links */}
            <div className="flex gap-5 mt-5">
              <a
                href="https://facebook.com"
                target="_blank"
                className="hover:scale-110 bg-blue-600 p-2 rounded-full"
              >
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 0H2C.9 0 0 .9 0 2v20c0 1.1.9 2 2 2h10.6v-8.7H9.6v-3.5h3V8.2c0-3.1 1.8-4.9 4.6-4.9 1.3 0 2.6.2 2.6.2v2.8h-1.5c-1.5 0-2 .9-2 1.9v2.4h3.4l-.5 3.5h-3V24H22c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                className="hover:scale-110 bg-pink-500 p-2 rounded-full"
              >
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.2c2.8 0 3.1.1 4.2.6.8.4 1.5.9 2.1 1.5.6.6 1.1 1.3 1.5 2.1.5 1 .6 1.3.6 4.2s-.1 3.1-.6 4.2c-.4.8-.9 1.5-1.5 2.1-.6.6-1.3 1.1-2.1 1.5-1 .5-1.3.6-4.2.6s-3.1-.1-4.2-.6c-.8-.4-1.5-.9-2.1-1.5-.6-.6-1.1-1.3-1.5-2.1-.5-1-.6-1.3-.6-4.2s.1-3.1.6-4.2c.4-.8.9-1.5 1.5-2.1.6-.6 1.3-1.1 2.1-1.5C8.9 2.3 9.2 2.2 12 2.2zm0-2C9.1.2 8.5.3 7.3.7 5.7 1.3 4.3 2.2 3.1 3.4 2 4.6 1.1 6 0.5 7.6.3 8.8.2 9.4.2 12s.1 3.1.5 4.2c.6 1.6 1.5 3 2.7 4.2s2.6 2.1 4.2 2.7c1.1.4 1.7.5 4.2.5s3.1-.1 4.2-.5c1.6-.6 3-1.5 4.2-2.7s2.1-2.6 2.7-4.2c.4-1.1.5-1.7.5-4.2s-.1-3.1-.5-4.2c-.6-1.6-1.5-3-2.7-4.2s-2.6-2.1-4.2-2.7C15.1.3 14.5.2 12 .2zm0 5.4a4.4 4.4 0 100 8.8 4.4 4.4 0 000-8.8zm0 7.2a2.8 2.8 0 110-5.6 2.8 2.8 0 010 5.6zM18.4 6c0 .7-.6 1.3-1.3 1.3-.7 0-1.3-.6-1.3-1.3 0-.7.6-1.3 1.3-1.3.7 0 1.3.6 1.3 1.3z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                className="hover:scale-110 bg-blue-400 p-2 rounded-full"
              >
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.6a9.8 9.8 0 01-2.8.8A4.8 4.8 0 0023.3 3c-1 .6-2 .9-3.1 1.1a4.8 4.8 0 00-8.3 4.4c-4-.2-7.5-2-9.8-4.8-1.3 2.3-.7 5.3 1.5 6.8a4.8 4.8 0 01-2.2-.6v.1c0 2.3 1.6 4.3 3.7 4.7a4.9 4.9 0 01-2.2.1c.6 2 2.5 3.5 4.7 3.6A9.8 9.8 0 010 20.4a13.8 13.8 0 007.5 2.2c9 0 14-7.5 14-14v-.6c.9-.6 1.7-1.4 2.3-2.3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div className="md:w-1/3">
            <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
            <p className="text-white/80 text-sm mb-2">
              <strong>Phone:</strong> +880-1234-567890
            </p>
            <p className="text-white/80 text-sm mb-2">
              <strong>Email:</strong> support@animalbazaar.com
            </p>
            <p className="text-white/80 text-sm">
              <strong>Address:</strong> 123 Green Avenue, Animal City
            </p>
          </div>

          {/* Links Section */}
          <div className="md:w-1/3">
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="text-white/80 text-sm space-y-2 font-semibold">
              <li>
                <Link
                  href="/about"
                  className="hover:text-blue-400 transition-colors duration-1000 ease-in-out"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-blue-400 transition-colors duration-1000 ease-in-out"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/term-service"
                  className="hover:text-blue-400 transition-colors duration-1000 ease-in-out"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-blue-400 transition-colors duration-1000 ease-in-out"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-4 text-center">
          <p className="text-white text-sm">
            © {new Date().getFullYear()} Animal Bazaar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
