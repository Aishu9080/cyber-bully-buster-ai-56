
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Database, Bot, LineChart } from "lucide-react";

const About = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-shield-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About CyberBully Buster AI</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our mission is to create safer online spaces by developing cutting-edge AI 
                  technology that can detect and prevent cyberbullying.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Technology</h2>
                <p className="text-gray-500 mb-6">
                  CyberBully Buster AI uses advanced machine learning algorithms to analyze text and 
                  identify patterns associated with cyberbullying. Our model has been trained on a 
                  diverse dataset of online communications to ensure high accuracy across different 
                  contexts and languages.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <Bot className="h-5 w-5 text-shield-600 mt-1" />
                    <div>
                      <h4 className="font-medium">ML Algorithms</h4>
                      <p className="text-sm text-gray-500">Trained on diverse datasets</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Database className="h-5 w-5 text-shield-600 mt-1" />
                    <div>
                      <h4 className="font-medium">Data Processing</h4>
                      <p className="text-sm text-gray-500">Advanced NLP techniques</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">How It Works</h2>
                <ol className="space-y-4 text-gray-500">
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-shield-100 text-shield-600 text-sm font-medium">1</div>
                    <div>
                      <p>Text is submitted through our interface for analysis</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-shield-100 text-shield-600 text-sm font-medium">2</div>
                    <div>
                      <p>Our AI model analyzes the content using TF-IDF vectorization and logical regression</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-shield-100 text-shield-600 text-sm font-medium">3</div>
                    <div>
                      <p>The system calculates a confidence score for potential bullying content</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-shield-100 text-shield-600 text-sm font-medium">4</div>
                    <div>
                      <p>Results are displayed with appropriate warnings and recommendations</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-shield-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Impact & Statistics</h2>
                <p className="text-gray-500 mb-6">
                  Cyberbullying affects millions of people worldwide, with serious consequences for mental 
                  health and well-being. Our tool aims to reduce these incidents and create safer online 
                  environments.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-shield-700 mb-1">37%</div>
                    <p className="text-sm text-gray-500">of young people have experienced cyberbullying</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-shield-700 mb-1">60%</div>
                    <p className="text-sm text-gray-500">don't report cyberbullying incidents</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold">Our Commitment</h2>
                <p className="text-gray-500">
                  We are committed to continuously improving our technology and working with communities, 
                  schools, and platforms to implement effective solutions against online harassment. 
                  By combining AI technology with education and awareness, we believe we can make 
                  a significant impact in reducing cyberbullying.
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <Shield className="h-5 w-5 text-shield-600" />
                  <p className="text-sm font-medium">Building safer online spaces for everyone</p>
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
