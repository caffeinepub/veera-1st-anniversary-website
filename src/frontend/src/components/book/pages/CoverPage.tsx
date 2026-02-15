import { Heart, Sparkles } from 'lucide-react';

interface CoverPageProps {
  onOpen: () => void;
}

export function CoverPage({ onOpen }: CoverPageProps) {
  return (
    <div className="relative h-full min-h-[600px] md:min-h-[700px] flex flex-col items-center justify-center p-8 md:p-12 bg-gradient-to-br from-secondary via-card to-secondary/50">
      {/* Decorative Elements */}
      <div className="absolute top-8 left-8 text-accent/20">
        <Sparkles className="w-8 h-8 md:w-12 md:h-12" />
      </div>
      <div className="absolute top-8 right-8 text-accent/20">
        <Sparkles className="w-8 h-8 md:w-12 md:h-12" />
      </div>
      <div className="absolute bottom-8 left-12 text-accent/20">
        <Heart className="w-6 h-6 md:w-8 md:h-8" />
      </div>
      <div className="absolute bottom-8 right-12 text-accent/20">
        <Heart className="w-6 h-6 md:w-8 md:h-8" />
      </div>

      {/* Cover Image */}
      <div className="mb-8 rounded-lg overflow-hidden page-shadow max-w-md w-full">
        <img 
          src="/assets/generated/anniversary-cover.dim_1600x900.png" 
          alt="Anniversary celebration"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Title */}
      <div className="text-center space-y-4 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-2">
          Our First Year
        </h1>
        <div className="flex items-center justify-center gap-3 mb-4">
          <Heart className="w-6 h-6 md:w-8 md:h-8 text-accent fill-accent" />
          <p className="text-3xl md:text-5xl font-semibold text-accent handwritten">
            VEERA
          </p>
          <Heart className="w-6 h-6 md:w-8 md:h-8 text-accent fill-accent" />
        </div>
        <p className="text-lg md:text-xl text-muted-foreground italic">
          Celebrating 365 days of love, laughter, and memories
        </p>
      </div>

      {/* Open Button */}
      <button
        onClick={onOpen}
        className="mt-12 px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium text-lg transition-all transform hover:scale-105 page-shadow"
      >
        Open Our Story
      </button>
    </div>
  );
}
