import { Heart, Sparkles } from 'lucide-react';

export function MessagePage() {
  return (
    <div className="relative h-full min-h-[600px] md:min-h-[700px] p-8 md:p-16 flex flex-col justify-center">
      {/* Decorative corner elements */}
      <div className="absolute top-6 right-6 text-accent/30">
        <Sparkles className="w-6 h-6" />
      </div>
      <div className="absolute bottom-6 left-6 text-accent/30">
        <Heart className="w-6 h-6" />
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
            To My Dearest VEERA
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="space-y-4 text-base md:text-lg leading-relaxed text-foreground/90">
          <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:mr-1 first-letter:float-left">
            One year ago, our journey began, and what an incredible adventure it has been. 
            Every moment with you has been a treasure, every laugh a melody, and every day 
            a new chapter in our beautiful story.
          </p>

          <p>
            You've brought so much joy, warmth, and love into my life. Your smile brightens 
            my darkest days, your laughter is my favorite sound, and your presence is my 
            greatest comfort. With you, I've discovered what it truly means to love and be loved.
          </p>

          <p>
            Through all the ups and downs, the silly moments and the serious ones, the quiet 
            evenings and the exciting adventures—you've been my constant, my partner, my best friend.
          </p>

          <p className="text-center italic text-accent font-medium text-xl mt-8">
            Here's to our first year together, and to countless more to come.
          </p>
        </div>

        <div className="flex justify-center items-center gap-2 mt-8">
          <Heart className="w-5 h-5 text-accent fill-accent animate-pulse" />
          <Heart className="w-6 h-6 text-accent fill-accent animate-pulse delay-75" />
          <Heart className="w-5 h-5 text-accent fill-accent animate-pulse delay-150" />
        </div>
      </div>
    </div>
  );
}
