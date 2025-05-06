
import { ShieldCheck, MessageCircle, Brain } from "lucide-react";

const features = [
  {
    name: "AI Detection",
    description: "Analyzes text to identify potential cyberbullying",
    icon: Brain,
  },
  {
    name: "Protection",
    description: "Get immediate feedback to prevent harmful messages",
    icon: ShieldCheck,
  },
  {
    name: "Education",
    description: "Access tips on preventing cyberbullying",
    icon: MessageCircle,
  },
];

const Features = () => {
  return (
    <section className="py-8 bg-white">
      <div className="container px-4">
        <h2 className="text-xl font-bold text-center mb-6">Key Features</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="border p-4 rounded-md">
              <div className="flex items-center gap-2 mb-2">
                <feature.icon className="h-5 w-5 text-primary" />
                <h3 className="font-medium">{feature.name}</h3>
              </div>
              <p className="text-sm text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
