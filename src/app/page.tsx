import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
      <Navigation />

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-12">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Transform Your Life with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">
              {" "}DeeKamara
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Professional fitness coaching tailored to your goals. Whether you want to lose weight, 
            build strength, or transform your lifestyle - I'm here to guide you every step of the way.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/quiz"
              className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-rose-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Your Fitness Journey
            </Link>
            <Link 
              href="/about"
              className="border-2 border-pink-500 text-pink-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-500 hover:text-white transition-all duration-300"
            >
              Learn More About Me
            </Link>
          </div>

          {/* Coach Image Placeholder */}
          <div className="w-64 h-64 mx-auto mb-8 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full flex items-center justify-center">
            <span className="text-4xl text-pink-600">👩‍💪</span>
          </div>
        </div>
      </main>

      {/* Quick Stats or Features */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="text-3xl mb-4">💪</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Personalized Training</h3>
            <p className="text-gray-600">Customized workout plans designed specifically for your goals and lifestyle.</p>
          </div>
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="text-3xl mb-4">📱</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Online & In-Person</h3>
            <p className="text-gray-600">Flexible coaching options to fit your schedule and preferences.</p>
          </div>
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Proven Results</h3>
            <p className="text-gray-600">Transform your body and mind with evidence-based coaching methods.</p>
          </div>
        </div>
      </section>
    </div>
  );
}