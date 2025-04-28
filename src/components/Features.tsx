
import { ShieldCheck, MessageCircle, Brain, Users } from "lucide-react";

const features = [
  {
    name: "AI-Powered Detection",
    description:
      "Our machine learning model analyzes text to identify potential cyberbullying with high accuracy.",
    icon: Brain,
  },
  {
    name: "Real-time Protection",
    description:
      "Get immediate feedback on text content to prevent harmful messages before they're sent.",
    icon: ShieldCheck,
  },
  {
    name: "Multi-language Support",
    description:
      "Detect cyberbullying across multiple languages to protect diverse communities.",
    icon: MessageCircle,
  },
  {
    name: "Educational Resources",
    description:
      "Access guides and tips on preventing cyberbullying and promoting digital citizenship.",
    icon: Users,
  },
];

const Features = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Key Features</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our platform offers powerful tools to combat cyberbullying and create safer online environments.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-10">
          {features.map((feature) => (
            <div key={feature.name} className="group relative overflow-hidden rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-shield-100 text-shield-600">
                  <feature.icon className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold">{feature.name}</h3>
                  <p className="text-sm text-gray-500">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
