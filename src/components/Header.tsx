
import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b bg-white">
      <div className="container flex h-14 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-primary" />
          <span className="font-bold">CyberBully Buster</span>
        </Link>
        <nav className="flex gap-4">
          <Link to="/" className="text-sm hover:underline">Home</Link>
          <Link to="/about" className="text-sm hover:underline">About</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
