import { 
  Laptop, 
  Users, 
  GraduationCap, 
  Briefcase, 
  Globe, 
  Award 
} from "lucide-react";

const features = [
  {
    icon: Laptop,
    title: "Hands-on Learning",
    description: "Learn by doing with real-world projects and practical exercises."
  },
  {
    icon: Users,
    title: "Expert Mentorship",
    description: "Get guidance from industry professionals who've been there."
  },
  {
    icon: GraduationCap,
    title: "Comprehensive Curriculum",
    description: "From basics to advanced concepts, we cover everything you need."
  },
  {
    icon: Briefcase,
    title: "Career Support",
    description: "Job placement assistance and career development resources."
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Connect with peers and professionals worldwide."
  },
  {
    icon: Award,
    title: "Certification",
    description: "Earn recognized certificates upon program completion."
  }
];

export const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Why Choose Gebeya Jitume?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            We provide everything you need to succeed in the digital world
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-gebeya-pink/10 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-gebeya-pink" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 