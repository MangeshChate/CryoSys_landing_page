import React from 'react';

const Footer = () => {
  return (
    <footer className="h-[50vh] flex flex-col justify-end bg-blue-bottom-grad text-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h2 className="text-xl font-semibold">ｃｒｙｏｓｙｓ</h2>
            <p className="mt-2 font-thin">StartUp That Provides the Best Solutions</p>
          </div>
          <div className="flex items-center  justify-center md:justify-end ">
            <ul className="flex  mb-4 md:mb-0 text-center justify-center ">
              <li className="p-2"><a href="#" className="hover:text-gray-300">Home</a></li>
              <li className="p-2"><a href="#" className="hover:text-gray-300">About</a></li>
              <li className="p-2"><a href="#" className="hover:text-gray-300">Services</a></li>
              <li className='p-2'><a href="#" className="hover:text-gray-300 ">Contact</a></li>
            </ul>
            <ul className="flex">
              <li className="mr-4"><a href="#" className="hover:text-gray-300"><i className="fab fa-facebook"></i></a></li>
              <li className="mr-4"><a href="#" className="hover:text-gray-300"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#" className="hover:text-gray-300"><i className="fab fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 md:pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()}  All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
