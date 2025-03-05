import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Cta = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gebeya-pink to-gebeya-orange opacity-90" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Transform Your Future?
          </h2>
          <p className="mt-4 text-xl text-white/90 max-w-2xl mx-auto">
            Join thousands of successful graduates who have launched their careers in tech through Gebeya Jitume.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-gebeya-pink hover:bg-white/90 px-8 py-6 text-lg"
              onClick={() => navigate("/auth?tab=signup")}
            >
              Start Your Journey Today
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
              onClick={() => navigate("/pricing")}
            >
              View Program Details
            </Button>
          </div>
          <div className="mt-8 text-white/80 text-sm">
            No credit card required • Free consultation available
          </div>
        </div>
      </div>
    </section>
  );
}; 