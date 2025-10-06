import { Calendar, Clock, User } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface BlogPostProps {
  title: string;
  content: string;
  category: string;
  readTime: string;
  lastUpdated: string;
  author?: string;
  coverImage?: string;
  className?: string;
}

export const BlogPost = ({
  title,
  content,
  category,
  readTime,
  lastUpdated,
  author = "SumatraWay Team",
  coverImage,
  className,
}: BlogPostProps) => {
  return (
    <article className={cn("max-w-3xl mx-auto", className)}>
      {/* Header */}
      <header className="mb-8">
        {coverImage && (
          <div className="h-64 md:h-96 bg-gradient-ocean rounded-xl mb-6 overflow-hidden">
            <img
              src={coverImage}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary uppercase tracking-wide">
            {category}
          </span>
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {readTime}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight tracking-tight">
          {title}
        </h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <User className="h-4 w-4" />
            <span>{author}</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            <span>Updated {lastUpdated}</span>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="prose prose-lg max-w-none">
        <div
          className="leading-relaxed text-foreground"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>

      {/* Footer CTA */}
      <footer className="mt-12 pt-8 border-t border-border">
        <div className="p-6 rounded-xl bg-gradient-card border border-border">
          <h3 className="text-xl font-bold mb-2">Ready to plan your trip?</h3>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Use our itinerary builder to create your custom West Sumatra adventure.
          </p>
          <Button size="lg" className="w-full sm:w-auto">
            Build Your Itinerary
          </Button>
        </div>
      </footer>
    </article>
  );
};
