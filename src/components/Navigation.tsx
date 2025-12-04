import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface NavigationProps {
  onSearch?: (query: string) => void;
}

const Navigation = ({ onSearch }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-foreground hover:text-primary transition-smooth">
            OGCollege
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-smooth">
              Home
            </Link>
            <Link to="/trending" className="text-sm font-medium hover:text-primary transition-smooth">
              Trending
            </Link>
            <Link to="/latest" className="text-sm font-medium hover:text-primary transition-smooth">
              Latest
            </Link>
            <Link to="/categories" className="text-sm font-medium hover:text-primary transition-smooth">
              Categories
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {/* <div className="flex items-center gap-2">
              <Input
                type="search"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && onSearch) {
                    onSearch(searchQuery);
                  }
                }}
                className={`transition-all duration-300 ${
                  isSearchOpen ? 'w-[250px]' : 'w-0 opacity-0 p-0 border-0'
                }`}
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  setIsSearchOpen(!isSearchOpen);
                  if (isSearchOpen && searchQuery && onSearch) {
                    onSearch(searchQuery);
                  }
                }}
                className="hover:text-primary"
              >
                <Search className="h-5 w-5" />
              </Button> 
            </div> */}

            <Link to="/admin">
              <Button variant="default" size="sm" className="hidden md:inline-flex">
                Admin
              </Button>
            </Link>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>


        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in">
            <Link
              to="/"
              className="block text-sm font-medium hover:text-primary transition-smooth"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/trending"
              className="block text-sm font-medium hover:text-primary transition-smooth"
              onClick={() => setIsMenuOpen(false)}
            >
              Trending
            </Link>
            <Link
              to="/latest"
              className="block text-sm font-medium hover:text-primary transition-smooth"
              onClick={() => setIsMenuOpen(false)}
            >
              Latest
            </Link>
            <Link
              to="/categories"
              className="block text-sm font-medium hover:text-primary transition-smooth"
              onClick={() => setIsMenuOpen(false)}
            >
              Categories
            </Link>
            <Link to="/admin" onClick={() => setIsMenuOpen(false)}>
              <Button variant="default" size="sm" className="w-full">
                Admin
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
