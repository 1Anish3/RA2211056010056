import React from 'react';
import { Clock, MessageSquare } from 'lucide-react';
import type { Post } from '../types';

interface LiveFeedProps {
  posts: Post[];
}

const LiveFeed: React.FC<LiveFeedProps> = ({ posts }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <Clock className="h-6 w-6 text-green-500 mr-2" />
        Live Feed
      </h2>
      <div className="space-y-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-gray-50 rounded-lg p-4 transition-all hover:bg-gray-100"
          >
            <div className="flex items-center mb-4">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="h-10 w-10 rounded-full mr-3"
              />
              <div>
                <h3 className="font-semibold text-gray-900">{post.author.name}</h3>
                <time className="text-sm text-gray-500">{post.createdAt}</time>
              </div>
            </div>
            {post.image && (
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            )}
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              {post.title}
            </h4>
            <p className="text-gray-600 mb-4">{post.content}</p>
            <div className="flex items-center text-gray-500">
              <MessageSquare className="h-5 w-5 mr-1" />
              <span>{post.commentCount} comments</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveFeed