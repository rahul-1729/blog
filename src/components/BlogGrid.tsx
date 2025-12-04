//  pass data arguements for instead of mockblogs
import BlogCard from "./BlogCard";
import { mockBlogs } from "@/data/mockBlogs";

export interface BlogAuthor {
  _id: string;
  name: string;
}
interface Blog {
  _id: string;
  title: string;
  slug: string;
  content: string;
  author: BlogAuthor;
  pageView: number;
  like: number;
  dislike: number;
  visible: boolean;
  status: string;
  tags: string[];
  breadcrumb?: { title: string; url: string }[];
  featured: boolean,
  readtime: string
  createdAt?: string;
  updatedAt?: string;
  __v?: number,
  

}
interface BlogGridProps {
  title: string;
  subtitle: string;
  blogs: Blog[]
}

const BlogGrid = ({ title, subtitle, blogs=[] }: BlogGridProps) => {

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center space-y-2">
          <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>
          {subtitle && (
            <p className="text-lg text-muted-foreground">{subtitle}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.length>0?(blogs.map((blog) => (
            <BlogCard key={blog._id} {...blog} />
          ))):"No Articles Found"}
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
