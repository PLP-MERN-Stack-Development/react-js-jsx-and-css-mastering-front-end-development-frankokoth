import React, { useState, useMemo} from "react";
import { useFetch } from "../hooks/useFetch";
import Card from "../components/Card";
import { fetchPosts } from "../services/api";
import Button from "../components/Button";

export default function ApiDataPage() {
  const [page, setPage] = useState(1);
  const [limit] = useState(10)
  const [query, setQuery] = useState("")
  const { data: posts, loading, error } = useFetch(() => fetchPosts(page, limit), [page, limit]);

  const filteredPosts = useMemo(() => {
    if (!posts) return [];
    return posts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()));
  }, [posts, query]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">API Data Fetching with Pagination</h1>
      
      <input 
        type="text" 
        placeholder="Search posts..." 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded w-full"
      />

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      <div className="space-y-4">
        {filteredPosts.map(post => (
          <Card key={post.id} className="p-4">  
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-700 dark:text-gray-300">{post.body}</p>
          </Card>
        ))}
      </div>

      <div className="mt-6 flex justify-between">
        <Button 
          onClick={() => setPage(prev => Math.max(prev - 1, 1))} 
          disabled={page === 1}
        >
          Previous
        </Button>
        <span>Page {page}</span>
        <Button onClick={() => setPage(prev => prev + 1)}>
          Next
        </Button>
      </div>
    </div>
  );
}   
