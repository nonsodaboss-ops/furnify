import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#BCD1CA] flex justify-evenly m-0 p-0 py-15 -mx-5 -mb-5">
      <div>
        <h1 className="font-bold">Company</h1>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Categories</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div>
        <h1 className="font-bold">Support</h1>
        <ul>
          <li>Help Center</li>
          <li>Safety Center</li>
          <li>Community Guidelines</li>
        </ul>
      </div>
      <div>
        <h1 className="font-bold">Legal</h1>
        <ul>
          <li>Cookies Policy</li>
          <li>Privacy Policy</li>
          <li>Terms Of Service</li>
          <li className="text-white text-sm">Law Enforcement</li>
        </ul>
      </div>
      <div>
        <h2 className="text-white font-bold">Install App</h2>
        <ul>
          <li><img src="https://www.freepnglogos.com/uploads/app-store-logo-png/apple-app-store-travel-awards-globestamp-7.png" className="w-40 relative -left-2" alt="" /></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
