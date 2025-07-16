import { GlobeIcon } from 'lucide-react';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="pt-8 pb-6 bg-white border-t border-neutral-200">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 font-bold text-neutral-800">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-600 hover:underline">Help Center</a></li>
              <li><a href="#" className="text-neutral-600 hover:underline">AirCover</a></li>
              <li><a href="#" className="text-neutral-600 hover:underline">Anti-discrimination</a></li>
              <li><a href="#" className="text-neutral-600 hover:underline">Disability support</a></li>
              <li><a href="#" className="text-neutral-600 hover:underline">Cancellation options</a></li>
              <li><a href="#" className="text-neutral-600 hover:underline">Report neighborhood concern</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 font-bold text-neutral-800">Hosting</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-600 hover:underline">book & rent your home</a></li>
              <li><a href="#" className="text-neutral-600 hover:underline">AirCover for Hosts</a></li>
              <li><a href="#" className="text-neutral-600 hover:underline">Hosting resources</a></li>
              <li><a href="#" className="text-neutral-600 hover:underline">Community forum</a></li>
              <li><a href="#" className="text-neutral-600 hover:underline">Hosting responsibly</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 font-bold text-neutral-800">book & rent</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-600 hover:underline">Newsroom</a></li>
              <li><a href="#" className="text-neutral-600 hover:underline">New features</a></li>
              <li><a href="#" className="text-neutral-600 hover:underline">Careers</a></li>
              <li><a href="#" className="text-neutral-600 hover:underline">Investors</a></li>
              <li><a href="#" className="text-neutral-600 hover:underline">Gift cards</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 font-bold text-neutral-800">Policies</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-600 hover:underline">Privacy</a></li>
              <li><a href="#" className="text-neutral-600 hover:underline">Terms</a></li>
              <li><a href="#" className="text-neutral-600 hover:underline">Sitemap</a></li>
              <li><a href="#" className="text-neutral-600 hover:underline">Destinations</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col items-center justify-between pt-6 mt-8 border-t border-neutral-200 md:flex-row">
          <div className="flex flex-col items-center space-y-2 md:flex-row md:space-y-0 md:space-x-4">
            <div className="text-sm text-neutral-600">
              © 2025 book & rent, Inc.
            </div>
            <div className="flex space-x-4 text-sm">
              <a href="#" className="text-neutral-600 hover:underline">Privacy</a>
              <span className="text-neutral-300">·</span>
              <a href="#" className="text-neutral-600 hover:underline">Terms</a>
              <span className="text-neutral-300">·</span>
              <a href="#" className="text-neutral-600 hover:underline">Sitemap</a>
            </div>
          </div>
          
          <div className="flex items-center mt-4 space-x-6 md:mt-0">
            <div className="flex items-center cursor-pointer text-neutral-800 hover:underline">
              <GlobeIcon size={16} className="mr-1" />
              <span className="text-sm font-medium">English (US)</span>
            </div>
            <div className="cursor-pointer text-neutral-800 hover:underline">
              <span className="text-sm font-medium">$ USD</span>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-800 hover:text-neutral-600">
                <svg viewBox="0 0 32 32" role="img" aria-hidden="false" aria-label="Navigate to Facebook" fill="currentColor" height="18" width="18">
                  <path d="m8 14.41v-4.17c0-.42.35-.81.77-.81h2.52v-2.08c0-4.84 2.48-7.31 7.42-7.35 1.65 0 3.22.21 4.69.64.46.14.63.42.6.88l-.56 4.06c-.04.18-.14.35-.32.53-.21.11-.42.18-.63.14-.88-.25-1.78-.35-2.8-.35-1.4 0-1.61.28-1.61 1.73v1.8h4.52c.42 0 .81.42.81.88l-.35 4.17c0 .42-.35.71-.77.71h-4.21v16c0 .42-.35.81-.77.81h-5.21c-.42 0-.8-.39-.8-.81v-16.01h-2.52c-.42 0-.77-.35-.77-.78z"></path>
                </svg>
              </a>
              <a href="#" className="text-neutral-800 hover:text-neutral-600">
                <svg viewBox="0 0 32 32" role="img" aria-hidden="false" aria-label="Navigate to Twitter" fill="currentColor" height="18" width="18">
                  <path d="m31 6.36c-1.16.49-2.32.82-3.55.95 1.29-.76 2.22-1.87 2.72-3.38a12.71 12.71 0 0 1 -3.91 1.51c-1.23-1.28-2.75-1.94-4.51-1.94-3.41 0-6.17 2.73-6.17 6.12 0 .49.07.95.17 1.38-4.94-.23-9.51-2.6-12.66-6.38-.56.95-.86 1.97-.86 3.09 0 2.07 1.03 3.91 2.75 5.06-1-.03-1.92-.3-2.82-.76v.07c0 2.89 2.12 5.42 4.94 5.98-.63.17-1.16.23-1.62.23-.3 0-.7-.03-1.13-.13a6.07 6.07 0 0 0 5.74 4.24c-2.22 1.74-4.78 2.63-7.66 2.63-.56 0-1.06-.03-1.43-.1 2.85 1.84 6 2.76 9.41 2.76 7.29 0 12.83-4.01 15.51-9.3 1.36-2.66 2.02-5.36 2.02-8.09v-.46c-.03-.17-.03-.3-.03-.33a12.5 12.5 0 0 0 3.09-3.19z"></path>
                </svg>
              </a>
              <a href="#" className="text-neutral-800 hover:text-neutral-600">
                <svg viewBox="0 0 24 24" role="img" aria-hidden="false" aria-label="Navigate to Instagram" fill="currentColor" height="18" width="18">
                  <path d="m23.09.91c-.61-.61-1.33-.91-2.17-.91h-17.84c-.85 0-1.57.3-2.17.91s-.91 1.33-.91 2.17v17.84c0 .85.3 1.57.91 2.17s1.33.91 2.17.91h17.84c.85 0 1.57-.3 2.17-.91s.91-1.33.91-2.17v-17.84c0-.85-.3-1.57-.91-2.17zm-14.48 7.74c.94-.91 2.08-1.37 3.4-1.37 1.33 0 2.47.46 3.41 1.37s1.41 2.01 1.41 3.3-.47 2.39-1.41 3.3-2.08 1.37-3.41 1.37c-1.32 0-2.46-.46-3.4-1.37s-1.41-2.01-1.41-3.3.47-2.39 1.41-3.3zm12.66 11.63c0 .27-.09.5-.28.68a.92.92 0 0 1 -.67.28h-16.7a.93.93 0 0 1 -.68-.28.92.92 0 0 1 -.27-.68v-10.13h2.2a6.74 6.74 0 0 0 -.31 2.05c0 2 .73 3.71 2.19 5.12s3.21 2.12 5.27 2.12a7.5 7.5 0 0 0 5.33-2.12c1.46-1.42 2.19-3.12 2.19-5.12a6.74 6.74 0 0 0 -.31-2.05h2.11v10.13zm0-13.95c0 .3-.11.56-.31.77a1.05 1.05 0 0 1 -.77.31h-2.72c-.3 0-.56-.11-.77-.31a1.05 1.05 0 0 1 -.31-.77v-2.58c0-.29.11-.54.31-.76s.47-.32.77-.32h2.72c.3 0 .56.11.77.32s.31.47.31.76z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;