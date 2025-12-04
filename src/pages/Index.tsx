// call search, trending,most viewed and pass as array parametr
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import BlogGrid from "@/components/BlogGrid";
import SearchResults from "@/components/SearchResults";
import { mockBlogs } from "@/data/mockBlogs";
import axios from "axios"

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<typeof mockBlogs>([]);
  const [trending, setTrending] = useState<any[]>([]);
  const [latest, setLatest] = useState<any[]>([]);
  const [search, setSearch] = useState<any[]>([]);
 

  const [loadingTrending, setLoadingTrending] = useState(true);
  const [loadingLatest, setLoadingLatest] = useState(true);
  const [loadingSearch, setLoadingSearch] = useState(true);

  useEffect(() => {
    fetchTrending();
    fetchLatest();
 
  }, []);

  const fetchTrending = async () => {
    try {
      setLoadingTrending(true);
      const res = await axios.get("http://localhost:3500/api/v1/blogs/trending");
      setTrending(res.data);
    } catch (err) {
      console.error("Trending Error:", err);
    } finally {
      setLoadingTrending(false);
    }
  };

 
  const fetchLatest = async () => {
    try {
      setLoadingLatest(true);
      const res = await axios.get("http://localhost:3500/api/v1/blogs/latest");
      setLatest(res.data);
    } catch (err) {
      console.error("Latest Error:", err);
    } finally {
      setLoadingLatest(false);
    }
  };
 

  const handleSearch = async(query: string) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setSearchResults([]);
      return;
    }

  
    try {
      setLoadingLatest(true);
      const res = await axios.get("http://localhost:3500/api/v1/blogs/search", {params: { query: query }});;
      setSearch(res.data);
    } catch (err) {
      console.error("Latest Error:", err);
    } finally {
      setLoadingLatest(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation onSearch={handleSearch} />
      <Hero onSearch={handleSearch} />
      
      {searchQuery && <SearchResults results={searchResults} query={searchQuery} />}
      
      <BlogGrid 
        title="Trending Now" 
        subtitle="The most-read stories this week"
        blogs = {trending}
      />
      <div className="bg-muted/30">
        <BlogGrid 
          title="Latest Stories" 
          subtitle="Fresh perspectives from our community"
          blogs ={latest}
        />
      </div>
    </div>
  );
};

export default Index;
