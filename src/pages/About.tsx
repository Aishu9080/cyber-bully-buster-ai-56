
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-8 bg-gray-50">
          <div className="container px-4">
            <div className="max-w-2xl mx-auto">
              <h1 className="text-2xl font-bold mb-4 text-center">About CyberBully Buster</h1>
              <p className="text-gray-600 mb-4">
                Our mission is to create safer online spaces by developing AI 
                technology that can detect and prevent cyberbullying.
              </p>
              
              <h2 className="text-lg font-medium mt-6 mb-2">Our Technology</h2>
              <p className="text-gray-600 mb-4">
                CyberBully Buster uses machine learning algorithms to analyze text and 
                identify patterns associated with cyberbullying. Our model has been trained on a 
                diverse dataset to ensure high accuracy.
              </p>

              <h2 className="text-lg font-medium mt-6 mb-2">How It Works</h2>
              <ol className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="font-medium">1.</span>
                  <span>Text is submitted for analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-medium">2.</span>
                  <span>Our AI model analyzes the content</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-medium">3.</span>
                  <span>Results are displayed with recommendations</span>
                </li>
              </ol>
              
              <h2 className="text-lg font-medium mt-6 mb-2">Statistics</h2>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-3 rounded-md border text-center">
                  <p className="text-lg font-bold text-primary mb-1">37%</p>
                  <p className="text-xs text-gray-500">of young people experience cyberbullying</p>
                </div>
                <div className="bg-white p-3 rounded-md border text-center">
                  <p className="text-lg font-bold text-primary mb-1">60%</p>
                  <p className="text-xs text-gray-500">don't report bullying incidents</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
