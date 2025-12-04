import { useParams } from "react-router-dom";
import { Heart, Eye, Clock, Share2, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { useState } from "react";

const Blog = () => {
  const { id } = useParams();
  const [likes, setLikes] = useState(234);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  // Mock blog data
  const blog = {
    title: "The Future of Campus Culture: What Gen-Z Really Wants",
    category: "Culture",
    author: "Alex Rivera",
    date: "March 15, 2024",
    readTime: "5 min read",
    views: 1203,
    content: `
      <p>The landscape of higher education is undergoing a profound transformation, driven by the values and expectations of Generation Z. This digital-native generation is reshaping campus culture in ways that previous generations never imagined.</p>

      <h2>Mental Health Takes Center Stage</h2>
      <p>Unlike previous generations, Gen-Z students are openly discussing mental health challenges and demanding better support systems. Universities are responding with expanded counseling services, mental health days, and peer support programs.</p>

      <h2>Sustainability Isn't Optional</h2>
      <p>From zero-waste cafeterias to carbon-neutral campus initiatives, today's students expect their institutions to take environmental responsibility seriously. They're not just asking for change—they're demanding it.</p>

      <h2>Authenticity Over Perfection</h2>
      <p>Social media may be everywhere, but Gen-Z is leading a counter-movement that values authenticity over curated perfection. This shift is visible in everything from campus fashion to academic presentations.</p>

      <h2>Diversity and Inclusion as Standard</h2>
      <p>For Gen-Z, diversity isn't a buzzword—it's a baseline expectation. They're pushing for representation in faculty, curriculum content, and campus leadership, making inclusivity an integral part of the college experience.</p>

      <p>As we look to the future, it's clear that Gen-Z isn't just adapting to college life—they're redefining it entirely. The question isn't whether institutions will change, but how quickly they can evolve to meet these new expectations.</p>
    `,
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <article className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="space-y-6 mb-12">
            <Badge variant="secondary" className="text-sm">{blog.category}</Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {blog.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <span className="font-medium text-foreground">{blog.author}</span>
              <span>•</span>
              <span>{blog.date}</span>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {blog.readTime}
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Eye className="h-4 w-4" />
                {blog.views}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 pt-4 border-t border-border">
              <Button
                variant="outline"
                size="sm"
                onClick={handleLike}
                className={`gap-2 ${isLiked ? 'text-primary border-primary' : ''}`}
              >
                <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
                {likes}
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={isBookmarked ? 'text-primary border-primary' : ''}
              >
                <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-current' : ''}`} />
              </Button>

              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-12 rounded-lg overflow-hidden aspect-video bg-gradient-to-br from-primary/20 to-accent/20 shadow-medium"></div>

          {/* Content */}
          <div 
            className="prose prose-lg max-w-none
              prose-headings:font-bold prose-headings:tracking-tight
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* Author Card */}
          <div className="mt-16 p-8 rounded-lg bg-muted/50 shadow-soft">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-2xl font-bold text-primary">
                {blog.author.charAt(0)}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">{blog.author}</h3>
                <p className="text-muted-foreground">
                  Contributing writer passionate about campus culture, student life, and the future of education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Blog;
