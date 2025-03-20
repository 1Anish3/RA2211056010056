import React from 'react';
import { MessageSquare, TrendingUp } from 'lucide-react';
import type { Post } from '../types';

interface TrendingPostsProps {
  posts: Post[];
}

const TrendingPosts: React.FC<TrendingPostsProps> = ({ posts }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <TrendingUp className="h-6 w-6 text-red-500 mr-2" />
        Trending Posts
      </h2>
      <div className="grid gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-gray-50 rounded-lg overflow-hidden transition-all hover:bg-gray-100"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4">{post.content}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="h-8 w-8 rounded-full mr-2"
                  />
                  <span className="text-sm text-gray-700">{post.author.name}</span>
                </div>
                <div className="flex items-center text-indigo-600">
                  <MessageSquare className="h-5 w-5 mr-1" />
                  <span className="font-semibold">{post.commentCount}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingPosts