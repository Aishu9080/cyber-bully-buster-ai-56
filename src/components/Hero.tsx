
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="py-8 bg-gray-50">
      <div className="container px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-2xl font-bold mb-4">
            Detect and Prevent Online Harassment
          </h1>
          <p className="mb-6 text-gray-500">
            Our AI helps identify cyberbullying content to create safer digital spaces.
          </p>
          <Button asChild size="sm" className="bg-primary">
            <a href="#analyze">Try it Now</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
