import { Link } from "react-router-dom";
import Logo from "../assets/sitelogo.svg"

import {
  FaInstagram,
  FaDribbble,
  FaTwitter,
  FaYoutube,
  FaTelegramPlane,
} from "react-icons/fa";

const company = [
  "About us",
  "Blog",
  "Contact us",
  "Pricing",
  "Testimonials",
];

const support = [
  "Help center",
  "Terms of service",
  "Legal",
  "Privacy policy",
  "Status",
];

const Footer = () => {
  return (
  <footer className="bg-[#263238] py-16">
    <div className="mx-auto flex max-w-[1152px] flex-col justify-between gap-12 lg:flex-row">
        {/* Lest */}
        <div>
            <Link to="/" className="flex items-center gap-2">
                <img src={Logo} alt="" />
                <h2 className="text-3xl font-bold text-white">Nexcent</h2>
            </Link>

            <p className="mt-10 text-sm leading-7 text-[#F5F7FA]">
                Copyright © 2020 Nexcent ltd.
                <br />
                All rights reserved
            </p>

            <div className="mt-8 flex gap-4">
                <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#4CAF4F]">
                    <FaInstagram/>
                </a>

                <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#4CAF4F]">
                    <FaDribbble/>
                </a>

                <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#4CAF4F]">
                    <FaTwitter/>
                </a>

                <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#4CAF4F]">
                    <FaYoutube/>
                </a>
            </div>
        </div>

        {/* Company */}
        <div>
            <h3 className="mb-6 text-xl font-semibold text-white">Company</h3>
            <ul className="space-y-4">
                {company.map(item => (
                    <li key={item}>
                        <Link to="/" className="text-[#F5F7FA] hover:text-[#4CAF4F]">{item}</Link>
                    </li>
                ))}
            </ul>
        </div>

        {/* Support */}
        <div>
            <h3 className="mb-6 text-xl font-semibold text-white">Support</h3>
            <ul className="space-y-4">
                {support.map(item => (
                    <li key={item}>
                        <Link to="/" className="text-[#F5F7FA] hover:text-[#4CAF4F]">{item}</Link>
                    </li>
                ))}
            </ul>
        </div>

        {/* Stay up to date */}
        <div className="relative">
            <h3 className="mb-6 text-xl font-semibold text-white">Stay up to date</h3>

            <input type="email" placeholder="Your email address" className="w-full rounded-lg bg-white/20 px-4 py-3 pr-12 text-white placeholder:text-gray-300 outline-none" />

            <button className="absolute right-4 top-1/3 -translate-y-1/2 text-white">
              <FaTelegramPlane />
            </button>
        </div>
    </div>
  </footer>
  );
};

export default Footer;