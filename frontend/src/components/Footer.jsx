
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-t-gray-200 py-8 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Job Hunt</h2>
            <p className="text-sm">© 2024 Your Company. All rights reserved.</p>
          </div>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://facebook.com"
              className="hover:text-gray-400"
              aria-label="Facebook"
            >
              <svg
                className="w-6 h-6 fill-currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.676 0H1.324C.593 0 0 .592 0 1.324v21.352C0 23.408.593 24 1.324 24h11.495v-9.294H9.692V11.01h3.127V8.414c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.696h-3.12V24h6.116C23.407 24 24 23.408 24 22.676V1.324C24 .592 23.407 0 22.676 0" />
              </svg>
            </a>

            <a
              href="https://twitter.com"
              className="hover:text-gray-400"
              aria-label="Twitter"
            >
              <svg
                className="w-6 h-6 fill-currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557a9.93 9.93 0 01-2.828.775A4.932 4.932 0 0023.337 3c-.951.564-2.005.974-3.127 1.195A4.916 4.916 0 0016.616 2c-2.732 0-4.946 2.214-4.946 4.946 0 .388.043.765.128 1.124C7.728 7.87 4.1 5.91 1.671 2.905a4.93 4.93 0 00-.669 2.487c0 1.716.873 3.23 2.201 4.118a4.903 4.903 0 01-2.24-.618v.061c0 2.396 1.704 4.396 3.965 4.847a4.902 4.902 0 01-2.232.085c.63 1.965 2.445 3.396 4.6 3.436A9.867 9.867 0 010 19.54a13.94 13.94 0 007.548 2.212c9.056 0 14.009-7.504 14.009-14.009 0-.213-.004-.425-.014-.636A10.025 10.025 0 0024 4.557z" />
              </svg>
            </a>

            <a
              href="https://linkedin.com"
              className="hover:text-gray-400"
              aria-label="LinkedIn"
            >
              <svg
                className="w-6 h-6 fill-currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452H16.89v-5.569c0-1.329-.027-3.041-1.852-3.041-1.852 0-2.136 1.445-2.136 2.94v5.67H9.346V9h3.414v1.561h.048c.476-.9 1.637-1.852 3.368-1.852 3.602 0 4.269 2.37 4.269 5.455v6.288zM5.337 7.433a1.988 1.988 0 110-3.977 1.988 1.988 0 010 3.977zM6.96 20.452H3.714V9H6.96v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;