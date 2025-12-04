import { Heart, Eye, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
export interface BlogAuthor {
  _id: string;
  name: string;
}
interface BlogCardProps {
  _id: string;
  title: string;
  slug: string;
  content: string;
  author:BlogAuthor;
  pageView: number;
  like: number;
  dislike: number;
  visible: boolean;
  status: string;
  tags: string[];
  breadcrumb?: { title: string; url: string }[];
  featured: boolean;
  readtime: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}
 
const BlogCard = ({
  _id,
  title,
  slug,
  content,
  author,
  pageView,
  like,
  dislike,
  visible,
  status,
  tags,
  breadcrumb,
  featured,
  readtime,
  createdAt,
  updatedAt,
  __v
}: BlogCardProps) => {
  const [likes, setLikes] = useState(like);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  return (
    <article className={`group hover-lift rounded-lg overflow-hidden bg-card shadow-soft ${featured ? 'md:col-span-2' : ''}`}>
      <Link to={`/blog/${_id}`}>
        <div className="relative overflow-hidden aspect-video bg-muted">
          {false ? (
            <img 
              // src={} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20"></div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
        </div>
      </Link>

      <div className="p-6 space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="secondary">{false?"College":"Carrier"}</Badge>
          <span className="text-xs text-muted-foreground">{createdAt}</span>
        </div>

        <Link to={`/blog/${_id}`}>
          <h3 className="text-xl font-bold line-clamp-1 group-hover:text-primary transition-smooth">
            {title}
          </h3>
        </Link>

        <p className="text-muted-foreground line-clamp-2 text-sm">
          {content}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center gap-4 text-sm text-muted-foreground overflow-hidden">
            <span className="font-medium text-foreground truncate">{author.name}</span>
            <div className="flex items-center gap-1 flex-shrink-0">
              <Eye className="h-4 w-4" />
              <span className="truncate">{pageView}</span>
            </div>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={handleLike}
            className={`gap-1 flex-shrink-0 ${isLiked ? 'text-primary' : ''}`}
          >
            <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
            {likes}
          </Button>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
