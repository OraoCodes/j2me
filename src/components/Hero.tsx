import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-br from-gebeya-pink/10 to-gebeya-orange/10" />
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Transform Your Digital Skills with{" "}
            <span className="text-gebeya-pink">Gebeya Jitume</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join thousands of youth who are building their future through our comprehensive digital skills training program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-gebeya-pink to-gebeya-orange hover:opacity-90 text-white px-8 py-6 text-lg"
              onClick={() => navigate("/auth?tab=signup")}
            >
              Start Your Journey
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg"
              onClick={() => navigate("/auth?tab=signin")}
            >
              Sign In
            </Button>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-gebeya-pink text-2xl font-bold mb-2">1000+</div>
            <div className="text-gray-600">Students Enrolled</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-gebeya-pink text-2xl font-bold mb-2">50+</div>
            <div className="text-gray-600">Expert Instructors</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-gebeya-pink text-2xl font-bold mb-2">95%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}; 