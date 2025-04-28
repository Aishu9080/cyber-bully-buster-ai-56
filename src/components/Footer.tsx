
import { HeartIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-white">
      <div className="container flex flex-col items-center justify-between gap-4 py-6 md:flex-row md:py-8">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <p className="text-center text-sm text-gray-500 md:text-left">
            &copy; {new Date().getFullYear()} CyberBully Buster AI. All rights reserved.
          </p>
        </div>
        <div className="flex gap-2">
          <p className="flex items-center text-xs text-gray-500">
            Made with <HeartIcon className="mx-1 h-3 w-3 text-red-500" /> for a safer online environment
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
