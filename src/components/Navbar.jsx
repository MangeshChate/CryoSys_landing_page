import { Close, Menu } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to handle opening and closing the menu
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  // Effect to add or remove overflow-hidden class from body based on menu state
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [menuOpen]);

  return (
    <navbar className="w-full text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex flex-col justify-center items-center gap-2">
          <h3 className="text-lg lg:text-3xl font-bold">ｃｒｙｏｓｙｓ</h3>
          <span className="text-secondary font-thin hidden lg:block">Providing Best Solutions</span>
        </div>
        <div className="hidden lg:flex gap-5 text-lg">
          <ul className="flex gap-5">
            <li className="p-2">Home</li>
            <li className="p-2">About</li>
            <li className="p-2">Services</li>
            <li className="bg-blue-800 p-2 rounded-full">Contact</li>
          </ul>
        </div>
        <div className="block lg:hidden z-40">
          {menuOpen ? (
            <Close className="cursor-pointer" onClick={handleMenuToggle} />
          ) : (
            <Menu className="cursor-pointer" onClick={handleMenuToggle} />
          )}
        </div>
      </div>
      {menuOpen && (
        <div className="fixed top-0 left-0 h-screen w-full blue-blur-glass p-5 z-30">
          <ul className="text-center flex flex-col justify-center items-center gap-5 mt-20">
            <li className="p-2">Home</li>
            <li className="p-2">About</li>
            <li className="p-2">Services</li>
            <li className="bg-blue-800 p-2 rounded-full">Contact</li>
          </ul>
        </div>
      )}
    </navbar>
  );
};

export default Navbar;
