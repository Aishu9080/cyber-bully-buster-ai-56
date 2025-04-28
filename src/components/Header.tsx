
import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-shield-600" />
          <span className="text-xl font-bold">CyberBully Buster AI</span>
        </Link>
        <nav className="flex gap-4 sm:gap-6">
          <Link to="/" className="text-sm font-medium hover:underline">Home</Link>
          <Link to="/about" className="text-sm font-medium hover:underline">About</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
