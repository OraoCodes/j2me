import { XCircle, CheckCircle } from "lucide-react";

const problems = [
  {
    problem: "Limited Access to Quality Tech Education",
    solution: "Comprehensive online curriculum with expert instructors"
  },
  {
    problem: "High Cost of Tech Training",
    solution: "Affordable programs with flexible payment options"
  },
  {
    problem: "Lack of Practical Experience",
    solution: "Real-world projects and hands-on learning"
  },
  {
    problem: "Uncertain Career Path",
    solution: "Career guidance and job placement support"
  }
];

export const ProblemSolution = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            The Problem & Our Solution
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            We're addressing the key challenges in tech education
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <XCircle className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.problem}
                  </h3>
                  <div className="flex items-center gap-2 text-green-600">
                    <CheckCircle className="w-5 h-5" />
                    <span>{item.solution}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 