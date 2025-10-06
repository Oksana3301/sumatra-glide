import { Clock, Calendar } from "lucide-react";
import { Button } from "./ui/button";

interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  lastUpdated: string;
  author?: string;
  coverImage?: string;
}

export const BlogCard = ({ 
  title, 
  excerpt, 
  category, 
  readTime, 
  lastUpdated,
  author = "SumatraWay Team",
  coverImage
}: BlogCardProps) => {
  return (
    <article className="gradient-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {coverImage && (
        <div className="h-48 bg-gradient-ocean" />
      )}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary">
            {category}
          </span>
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {readTime}
          </span>
        </div>
        
        <h3 className="text-xl font-bold mb-2 leading-tight">{title}</h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">{excerpt}</p>
        
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            Updated {lastUpdated}
          </span>
          <span>{author}</span>
        </div>
        
        <Button variant="outline" className="w-full mt-4">
          Read Guide
        </Button>
      </div>
    </article>
  );
};
