import React from "react";

const Footer = () => {
  return (
    <>
      <img src="./assets/footertop.png" className="w-full bg-[#ebf2f7]" alt="" />
    <footer className="bg-[#00b53f] text-white py-10 px-6">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        {/* About Us */}
        <div>
          <h3 className="font-semibold mb-3">About us</h3>
          <ul className="space-y-2 text-bold leading-8">
            <li><a href="#">About Jiji</a></li>
            <li className="hover:text-gray-600"><a href="#">Terms & Conditions</a></li>
            <li className="hover:text-gray-600"><a href="#">Privacy Policy</a></li>
            <li className="hover:text-gray-600"><a href="#">Billing Policy</a></li>
            <li className="hover:text-gray-600"><a href="#">Candidate Privacy Policy</a></li>
            <li className="hover:text-gray-600"><a href="#">Cookie Policy</a></li>
            <li className="hover:text-gray-600"><a href="#">Copyright Infringement Policy</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-bold leading-8">
            <li className="hover:text-gray-600"><a href="mailto:support@jiji.ng">support@jiji.ng</a></li>
            <li className="hover:text-gray-600"><a href="#">Safety tips</a></li>
            <li className="hover:text-gray-600"><a href="#">Contact Us</a></li>
            <li className="hover:text-gray-600"><a href="#">FAQ</a></li>
          </ul>
        </div>

        {/* Our Apps */}
        <div>
          <h3 className="font-semibold mb-3">Our apps</h3>
          <div className="flex flex-col gap-3">
            <a href="#">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="h-10"
              />
            </a>
            <a href="#">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="h-10"
              />
            </a>
          </div>
        </div>

        {/* Our resources */}
        <div>
          <h3 className="font-semibold mb-3">Our resources</h3>
          <ul className="space-y-2 text-bold leading-8">
            <li className="hover:text-gray-600"><a href="#">Our blog</a></li>
            <li className="hover:text-gray-600"><a href="#">Jiji on FB</a></li>
            <li className="hover:text-gray-600"><a href="#">Our Instagram</a></li>
            <li className="hover:text-gray-600"><a href="#">Our YouTube</a></li>
            <li className="hover:text-gray-600"><a href="#">Our Twitter</a></li>
          </ul>
        </div>

        {/* Hot links */}
        <div>
          <h3 className="font-semibold mb-3">Hot links</h3>
          <ul className="space-y-2 text-bold leading-8">
            <li className="hover:text-gray-600"><a href="#">Jiji Africa</a></li>
          </ul>
        </div>
      </div>


     {/* Country section */}
     <div className="flex justify-center gap-4 mt-10">
        <img className="w-[30px] h-[30px] rounded-full border-2 object-cover cursor-pointer" src="./assets/img1.jpg" alt="" />
        <img className="w-[30px] h-[30px] rounded-full border-2 object-cover cursor-pointer" src="./assets/img2.jpg" alt="" />
        <img className="w-[30px] h-[30px] rounded-full border-2 object-cover cursor-pointer" src="./assets/img3.jpg" alt="" />
        <img className="w-[30px] h-[30px] rounded-full border-2 object-cover cursor-pointer" src="./assets/img4.jpg" alt="" />
        <img className="w-[30px] h-[30px] rounded-full border-2 object-cover cursor-pointer" src="./assets/img5.jpg" alt="" />
        <img className="w-[30px] h-[30px] rounded-full border-2 object-cover cursor-pointer" src="./assets/img6.jpg" alt="" />
        <img className="w-[30px] h-[30px] rounded-full border-2 object-cover cursor-pointer" src="./assets/img7.jpg" alt="" />
        <img className="w-[30px] h-[30px] rounded-full border-2 object-cover cursor-pointer" src="./assets/img8.jpg" alt="" />
        <img className="w-[30px] h-[30px] rounded-full border-2 object-cover cursor-pointer" src="./assets/img9.jpg" alt="" />
        <img className="w-[30px] h-[30px] rounded-full border-2 object-cover cursor-pointer" src="./assets/img10.jpg" alt="" />
        <img className="w-[30px] h-[30px] rounded-full border-2 object-cover cursor-pointer" src="./assets/img11.jpg" alt="" />
        <img className="w-[30px] h-[30px] rounded-full border-2 object-cover cursor-pointer" src="./assets/img12.jpg" alt="" />
     </div>
      {/* Bottom section */}
      <div className="mt-5 pt-3 text-center text-sm">
        <p>© {new Date().getFullYear()} Jiji.ng</p>
      </div>
    </footer>
    </>
  );
};

export default Footer;
