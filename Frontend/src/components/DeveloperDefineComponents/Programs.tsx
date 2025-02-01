const programs = [
  {
    title: "Yoga & Meditation",
    description: "Find balance and inner peace with guided sessions",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  },
  {
    title: "Fitness Training",
    description: "Achieve your fitness goals with expert guidance",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
  },
  {
    title: "Mental Wellness",
    description: "Support for your mental and emotional health",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  },
];

const Programs = () => {
  return (
    <section className="py-24 bg-sage-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Programs for Every Goal
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our variety of programs designed to support your unique wellness journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-up cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={program.image}
                  alt={program.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                  <p className="text-white/90">{program.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;