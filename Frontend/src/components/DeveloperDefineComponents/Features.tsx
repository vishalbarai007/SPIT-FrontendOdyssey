import { Activity, Heart, Users, Brain } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Health Tracking",
    description: "Set and monitor your personal health goals with our intuitive tracking system.",
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Connect with like-minded individuals and share your wellness journey.",
  },
  {
    icon: Activity,
    title: "Personalized Programs",
    description: "Access customized workout and wellness programs tailored to your needs.",
  },
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description: "Receive intelligent recommendations based on your progress and goals.",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-warmWhite">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Transform Your Wellness Journey
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the tools and support you need to achieve your health goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-up transform hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-sage-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-sage-200 transition-colors duration-300 transform group-hover:scale-110">
                <feature.icon className="w-7 h-7 text-sage-500" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;