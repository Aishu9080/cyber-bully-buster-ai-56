
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-36 bg-shield-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                <span className="text-gradient">Protect</span> Against Online Harassment
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our AI-powered cyberbullying detection system helps identify and prevent online
                harassment, creating safer digital spaces for everyone.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-shield-600 hover:bg-shield-700">
                <Link to="/">Try it Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-full w-full">
              <div className="p-6 h-full w-full bg-white rounded-xl border border-gray-200 shadow-lg flex flex-col items-center justify-center">
                <div className="w-24 h-24 bg-shield-100 rounded-full flex items-center justify-center mb-6">
                  <Shield className="h-12 w-12 text-shield-600" />
                </div>
                <h3 className="text-xl font-medium text-center mb-2">Cyberbullying Detection</h3>
                <p className="text-sm text-center text-gray-500">
                  Powered by machine learning algorithms to identify harmful content with high accuracy
                </p>
                <div className="grid grid-cols-2 gap-4 w-full mt-6">
                  <div className="bg-shield-50 p-3 rounded-lg text-center">
                    <div className="text-2xl font-bold text-shield-700">94%</div>
                    <div className="text-xs text-gray-500">Accuracy</div>
                  </div>
                  <div className="bg-shield-50 p-3 rounded-lg text-center">
                    <div className="text-2xl font-bold text-shield-700">24/7</div>
                    <div className="text-xs text-gray-500">Protection</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
