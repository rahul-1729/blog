import BlogCard from "./BlogCard";

interface SearchResultsProps {
  results: Array<{
    id: string;
    title: string;
    content: string;
    category: string;
    author: string;
    date: string;
    readTime: string;
    likes: number;
    views: number;
    image?: string;
    featured?: boolean;
  }>;
  query: string;
}

const SearchResults = ({ results, query }: SearchResultsProps) => {
  if (results.length === 0) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">No results found for "{query}"</h2>
            <p className="text-muted-foreground">Try searching with different keywords</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center space-y-2">
          <h2 className="text-4xl md:text-5xl font-bold">Search Results</h2>
          <p className="text-lg text-muted-foreground">
            Found {results.length} article{results.length !== 1 ? 's' : ''} for "{query}"
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {results.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SearchResults;
