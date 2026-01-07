
import React from 'react';
import { Facebook, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 border-b border-white/10 pb-16">
          <div className="lg:col-span-2">
            <div className="text-3xl font-bold tracking-tighter mb-6">AICMAA</div>
            <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
              Advancing the Indian economy through professional excellence in management accounting and corporate policy leadership.
            </p>
            <div className="flex gap-5">
              <Facebook className="text-gray-500 hover:text-white cursor-pointer transition" size={20} />
              <Twitter className="text-gray-500 hover:text-white cursor-pointer transition" size={20} />
              <Linkedin className="text-gray-500 hover:text-white cursor-pointer transition" size={20} />
              <Youtube className="text-gray-500 hover:text-white cursor-pointer transition" size={20} />
              <Instagram className="text-gray-500 hover:text-white cursor-pointer transition" size={20} />
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-sm mb-6 text-blue-400">Issues</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition">Economic Growth</a></li>
              <li><a href="#" className="hover:text-white transition">Tax Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Education & Skills</a></li>
              <li><a href="#" className="hover:text-white transition">Health Care</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-6 text-blue-400">News</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition">Press Releases</a></li>
              <li><a href="#" className="hover:text-white transition">Reports</a></li>
              <li><a href="#" className="hover:text-white transition">Statements</a></li>
              <li><a href="#" className="hover:text-white transition">Commentary</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-6 text-blue-400">About</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition">Mission</a></li>
              <li><a href="#" className="hover:text-white transition">Leadership</a></li>
              <li><a href="#" className="hover:text-white transition">Membership</a></li>
              <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-10 text-[12px] text-gray-500 font-medium gap-4">
          <div>© 2024 All India CMA Association. All Rights Reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
