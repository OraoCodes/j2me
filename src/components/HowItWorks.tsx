import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "Apply",
    description: "Submit your application and tell us about your goals and experience."
  },
  {
    title: "Assessment",
    description: "Complete a skills assessment to help us understand your current level."
  },
  {
    title: "Enrollment",
    description: "Get matched with the perfect program and start your learning journey."
  },
  {
    title: "Learn & Grow",
    description: "Access our comprehensive curriculum and work with expert mentors."
  },
  {
    title: "Graduate",
    description: "Complete your program and receive your certification."
  },
  {
    title: "Launch Career",
    description: "Get job placement support and start your tech career."
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Your journey to a tech career starts here
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="absolute -top-4 left-8 w-8 h-8 bg-gebeya-pink rounded-full flex items-center justify-center text-white font-bold">
                {index + 1}
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <CheckCircle2 className="w-8 h-8 text-gebeya-pink" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 