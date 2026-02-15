import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CoverPage } from './pages/CoverPage';
import { MessagePage } from './pages/MessagePage';
import { MemoriesPage } from './pages/MemoriesPage';
import { ClosingPage } from './pages/ClosingPage';

export function Book() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');

  const pages = [
    <CoverPage key="cover" onOpen={() => handleNext()} />,
    <MessagePage key="message" />,
    <MemoriesPage key="memories" />,
    <ClosingPage key="closing" onBackToCover={() => handleBackToCover()} />
  ];

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setDirection('forward');
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setDirection('backward');
      setCurrentPage(currentPage - 1);
    }
  };

  const handleBackToCover = () => {
    setDirection('backward');
    setCurrentPage(0);
  };

  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage === pages.length - 1;

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Book Container */}
      <div className="relative bg-card rounded-lg book-shadow overflow-hidden">
        {/* Page Content */}
        <div 
          key={currentPage}
          className={`min-h-[600px] md:min-h-[700px] ${
            direction === 'forward' ? 'animate-page-turn' : 'animate-page-turn-back'
          }`}
        >
          {pages[currentPage]}
        </div>

        {/* Navigation Controls - Only show after cover page */}
        {!isFirstPage && (
          <div className="absolute bottom-6 left-0 right-0 flex items-center justify-between px-6 md:px-12">
            <button
              onClick={handlePrevious}
              disabled={isFirstPage}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-all disabled:opacity-0 disabled:pointer-events-none"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="hidden sm:inline text-sm font-medium">Previous</span>
            </button>

            {/* Page Indicators */}
            <div className="flex gap-2">
              {pages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentPage ? 'forward' : 'backward');
                    setCurrentPage(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentPage 
                      ? 'bg-primary w-6' 
                      : 'bg-primary/30 hover:bg-primary/50'
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={isLastPage}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-all disabled:opacity-0 disabled:pointer-events-none"
              aria-label="Next page"
            >
              <span className="hidden sm:inline text-sm font-medium">Next</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
