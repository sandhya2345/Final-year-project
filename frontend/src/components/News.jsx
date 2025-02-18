import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const News = () => {
  const navigate = useNavigate();
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/news/api/news/")
      .then((response) => {
        setNewsData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching news data", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center py-10 text-lg font-semibold">Loading...</div>;
  }

  return (
    <div className="bg-midTeal text-gray-800 py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto mt-8">
        <h1 className="text-4xl font-bold text-center text-white mb-8">Recent News</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((news) => (
            <div key={news.id} className="bg-white  rounded-md overflow-hidden border border-gray-200">
              {/* News Image */}
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-56 object-cover"
              />
              
              <div className="p-6">
                <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-1 rounded">News</span>
                <p className="text-sm text-gray-500 mt-2">Published on {news.date}</p>
                <h2 className="text-xl font-semibold text-gray-900 mt-3 line-clamp-2">{news.title}</h2>
                <p className="text-gray-600 mt-2 line-clamp-2">{news.description}</p>
                <button className="mt-4 text-customTeal font-semibold hover:underline">Read More →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
