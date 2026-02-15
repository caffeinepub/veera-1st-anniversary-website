import { Heart, Sparkles, ArrowLeft } from 'lucide-react';

interface ClosingPageProps {
  onBackToCover: () => void;
}

export function ClosingPage({ onBackToCover }: ClosingPageProps) {
  return (
    <div className="relative h-full min-h-[600px] md:min-h-[700px] p-8 md:p-16 flex flex-col justify-center items-center bg-gradient-to-br from-secondary/30 via-card to-accent/5">
      {/* Decorative elements */}
      <div className="absolute top-8 left-8 text-accent/20 animate-pulse">
        <Heart className="w-10 h-10 md:w-16 md:h-16 fill-current" />
      </div>
      <div className="absolute top-8 right-8 text-accent/20 animate-pulse delay-75">
        <Sparkles className="w-10 h-10 md:w-16 md:h-16" />
      </div>
      <div className="absolute bottom-12 left-12 text-accent/20 animate-pulse delay-150">
        <Sparkles className="w-8 h-8 md:w-12 md:h-12" />
      </div>
      <div className="absolute bottom-12 right-12 text-accent/20 animate-pulse">
        <Heart className="w-8 h-8 md:w-12 md:h-12 fill-current" />
      </div>

      {/* Main content */}
      <div className="max-w-2xl text-center space-y-8 animate-fade-in">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Forever & Always
          </h2>
          <div className="flex items-center justify-center gap-3">
            <Heart className="w-8 h-8 text-accent fill-accent" />
            <p className="text-2xl md:text-3xl text-accent handwritten">
              VEERA
            </p>
            <Heart className="w-8 h-8 text-accent fill-accent" />
          </div>
        </div>

        <div className="space-y-4 text-lg md:text-xl text-foreground/90 leading-relaxed">
          <p>
            Thank you for being you—for your kindness, your patience, your love, 
            and for choosing to walk this path with me.
          </p>
          <p className="text-accent font-medium italic">
            This is just the beginning of our forever.
          </p>
        </div>

        <div className="pt-8 space-y-4">
          <p className="text-2xl md:text-3xl font-semibold text-primary">
            Happy 1st Anniversary!
          </p>
          <div className="flex justify-center gap-2">
            <Heart className="w-6 h-6 text-accent fill-accent animate-pulse" />
            <Heart className="w-7 h-7 text-accent fill-accent animate-pulse delay-75" />
            <Heart className="w-6 h-6 text-accent fill-accent animate-pulse delay-150" />
          </div>
        </div>

        {/* Back to cover button */}
        <button
          onClick={onBackToCover}
          className="mt-12 inline-flex items-center gap-2 px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg font-medium transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Cover
        </button>
      </div>
    </div>
  );
}
