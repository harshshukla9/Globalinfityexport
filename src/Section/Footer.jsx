import { Facebook, Heart, Instagram, Linkedin, Youtube ,X ,Twitter } from "lucide-react";
import { cn } from "@/lib/utils"; // Assuming your `cn` utility is set up here
import logo from "../assets/logo.jpg"

import { px } from "framer-motion";
import { Video } from 'lucide-react';

export default function Component() {
  return (
    <footer id="footer" className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <img
              src={logo}
              alt="GlobalInfinity"
              width="80px"
              height="10px"
             // className="w-48"
            />
            <p className="text-slate-300">
            Bringing Quality to Global Shores – Exporting Customizable Towels Made to Showcase Your Brand.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contact</h3>
            <div className="space-y-2">
              <p>
                Mobile No:{" "}
                <a href="tel:+918277543671" className="text-blue-400 hover:text-blue-300">
                  +91-9699005151
                </a>
              </p>
              <p>
                    Mail Id:{" "}
                    <a href="mailto:support@globalinfinityexport.com" className="text-blue-400 hover:text-blue-300">
                        support@globalinfinityexport.com
                    </a>
                    </p>
              <p>
                Address:{" "}
                <span className="text-blue-400">
                Ap. Jaysingpur 416101
                  <br />
                  Maharashtra, India
                </span>
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Services</h3>
            <ul className="space-y-2">
              {[ "Products"].map((item) => (
                <li key={item}>
                  <a href={`/${item.toLowerCase()}`} className="text-blue-400 hover:text-blue-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Get in Touch</h3>
            <div className="flex space-x-4">
              {[
                { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
                { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
                { href: "https://www.instagram.com/globalinfinityexport?igsh=MTQxZGhpNms0eXBrYw==", icon: Instagram, label: "Instagram" },
                { href: "https://youtube.com", icon: Youtube, label: "YouTube" },
                {href:"https://x.com/GlobaInfinity?t=hRSwv1WS5nseIXvLW9gUeg&s=09",icon:Twitter,label:"X"},
                {href:"https://join.skype.com/invite/rQci1Kc7Fyt5",icon:Video,label:"Skype"}
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  className={cn("bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors")}
                >
                  <Icon className="w-5 h-5" />
                  <span className="sr-only">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400">Copyright © 2024 GlobalInfinity LLP</p>
            <div className="flex items-center space-x-1 text-slate-400">
              <span>Created with</span>
              <Heart className="w-4 h-4 text-red-500 mx-1" />
              <span>by</span>
              <a href="https://twitter.com/GlobalInfinity" className="text-blue-400 hover:text-blue-300 ml-1">
                @GlobalInfinity
              </a>
            </div>
            <p className="text-slate-400">Powered by GlobalInfinity LLP</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
