
import Hero from "@/components/Hero";
import TextAnalyzer from "@/components/TextAnalyzer";
import Features from "@/components/Features";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <section className="py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Analyze Text</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Enter text below to check for potential cyberbullying content
                </p>
              </div>
            </div>
            <TextAnalyzer />
          </div>
        </section>
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
