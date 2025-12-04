import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";

interface HeroProps {
  onSearch?: (query: string) => void;
}

const Hero = ({ onSearch }: HeroProps) => {
  const [articles, setArticles] = useState(0);
  const [readers, setReaders] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const animateValue = (start: number, end: number, duration: number, setValue: (value: number) => void) => {
      const startTime = performance.now();
      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOutQuad = progress * (2 - progress);
        const current = Math.floor(start + (end - start) * easeOutQuad);
        setValue(current);
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    };

    animateValue(0, 100, 2000, setArticles);
    animateValue(0, 50, 2000, setReaders);
  }, []);

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl pt-16 font-bold tracking-tight leading-tight">
            <span className="block text-foreground" style={{ color: 'hsl(270 15% 10%)' }}>Testing</span>
            <span className="block text-primary mt-2">Stagin 2</span>
          </h1>
  
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Stories, perspectives, and conversations that matter. By students, for students.
          </p>

          <div className="max-w-xl mx-auto pt-4">
            <Input
              type="search"
              placeholder="Type your query"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && onSearch) {
                  onSearch(searchQuery);
                }
              }}
              className="rounded-full h-14 text-lg px-6 bg-background/80 backdrop-blur-sm border-2 border-border hover:border-primary/50 focus-visible:border-primary transition-colors"
            />
          </div>

          <div className="flex items-center justify-center gap-8 pt-8 text-sm text-muted-foreground">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-foreground">{articles}+</span>
              <span>Articles</span>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-foreground">{readers}K+</span>
              <span>Readers</span>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-foreground">Daily</span>
              <span>Updates</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
