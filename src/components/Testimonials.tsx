import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Web Development Graduate",
    image: "/testimonials/sarah.jpg",
    content: "Gebeya Jitume transformed my career. The practical projects and mentorship helped me land my dream job as a full-stack developer."
  },
  {
    name: "Michael Chen",
    role: "Data Science Graduate",
    image: "/testimonials/michael.jpg",
    content: "The curriculum was comprehensive and the instructors were incredibly supportive. I now work as a data scientist at a leading tech company."
  },
  {
    name: "Lisa Mwangi",
    role: "UI/UX Design Graduate",
    image: "/testimonials/lisa.jpg",
    content: "The hands-on experience and portfolio projects were invaluable. I'm now a UX designer at a major tech startup."
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Success Stories
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Hear from our graduates about their journey
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gray-200 mr-4 overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 italic">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 