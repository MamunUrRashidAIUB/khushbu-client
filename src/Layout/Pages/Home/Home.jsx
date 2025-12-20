import Hero from "./Home/Hero/Hero";
import Products from "./Home/Products/Products";

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 min-h-screen">
      <Hero />

      {/* Modern Accent Section */}
      <div className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 mb-4">
              Discover Our Collection
            </h2>
            <p className="text-amber-200/70 text-lg max-w-2xl mx-auto">
              Experience the finest fragrances curated for every moment of your life
            </p>
            <div className="flex gap-2 justify-center mt-6">
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse delay-100"></div>
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-200"></div>
            </div>
          </div>
        </div>
      </div>

      <Products />

      {/* Modern Bottom Section */}
      <div className="mt-20 py-16 bg-gradient-to-r from-amber-900/20 via-orange-900/20 to-amber-900/20 backdrop-blur-sm border-t border-amber-600/20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold text-amber-50 mb-2">Premium Quality Guaranteed</h3>
          <p className="text-amber-200/70 mb-6">Authentic fragrances for genuine experiences</p>
          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="p-4 bg-amber-600/10 rounded-lg border border-amber-600/20">
              <p className="text-amber-300 font-semibold">100% Authentic</p>
            </div>
            <div className="p-4 bg-orange-600/10 rounded-lg border border-orange-600/20">
              <p className="text-orange-300 font-semibold">Fast Shipping</p>
            </div>
            <div className="p-4 bg-yellow-600/10 rounded-lg border border-yellow-600/20">
              <p className="text-yellow-300 font-semibold">24/7 Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
