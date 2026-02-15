import { Calendar, Heart, Smile, Star, Coffee, Music } from 'lucide-react';

export function MemoriesPage() {
  const memories = [
    {
      icon: Calendar,
      title: "Our First Date",
      description: "The day everything began—nervous smiles and endless conversation."
    },
    {
      icon: Heart,
      title: "First 'I Love You'",
      description: "Those three words that changed everything and made my heart skip a beat."
    },
    {
      icon: Smile,
      title: "Inside Jokes",
      description: "All those silly moments that only we understand and can't stop laughing about."
    },
    {
      icon: Star,
      title: "Late Night Talks",
      description: "Hours spent sharing dreams, fears, and everything in between under the stars."
    },
    {
      icon: Coffee,
      title: "Morning Routines",
      description: "Coffee together, sleepy smiles, and the comfort of starting each day with you."
    },
    {
      icon: Music,
      title: "Our Song",
      description: "That special melody that always brings me back to you, no matter where I am."
    }
  ];

  return (
    <div className="relative h-full min-h-[600px] md:min-h-[700px] p-8 md:p-16 flex flex-col">
      {/* Doodle decoration */}
      <div className="absolute top-4 right-4 opacity-20 w-24 h-24 md:w-32 md:h-32">
        <img 
          src="/assets/generated/doodles-set.dim_1024x1024.png" 
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-3xl mx-auto w-full">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
            Our Precious Memories
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="mt-4 text-muted-foreground italic">
            A collection of moments that made this year unforgettable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {memories.map((memory, index) => {
            const Icon = memory.icon;
            return (
              <div
                key={index}
                className="bg-secondary/30 rounded-lg p-5 page-shadow hover:shadow-lg transition-all hover:scale-105 border border-border/50"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">
                      {memory.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {memory.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <p className="text-accent italic font-medium">
            And so many more beautiful moments yet to come...
          </p>
        </div>
      </div>
    </div>
  );
}
