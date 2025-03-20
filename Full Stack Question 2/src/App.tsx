import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import TopUsers from './components/TopUsers';
import TrendingPosts from './components/TrendingPosts';
import LiveFeed from './components/LiveFeed';

// Temporary mock data
const mockUsers = [
  {
    id: '1',
    name: 'A',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=A',
    postCount: 156
  },
  {
    id: '2',
    name: 'B',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=B',
    postCount: 143
  },
  {
    id: '3',
    name: 'C',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=C',
    postCount: 128
  },
  {
    id: '4',
    name: 'D',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=D',
    postCount: 112
  },
  {
    id: '5',
    name: 'E',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=E',
    postCount: 98
  }
];

const mockPosts = [
  {
    id: '1',
    title: 'The Future of AI in Healthcare',
    content: 'Exploring how artificial intelligence is revolutionizing medical diagnosis and treatment...',
    author: mockUsers[0],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef',
    commentCount: 45,
    createdAt: '2024-03-15T10:30:00Z'
  },
  {
    id: '2',
    title: 'Sustainable Urban Development',
    content: 'New approaches to building eco-friendly cities that promote both environmental and social welfare...',
    author: mockUsers[1],
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000',
    commentCount: 38,
    createdAt: '2024-03-15T09:15:00Z'
  },
  {
    id: '3',
    title: 'The Rise of Remote Work',
    content: 'How companies are adapting to the new normal of distributed teams and virtual collaboration...',
    author: mockUsers[2],
    image: 'https://images.unsplash.com/photo-1521898284481-a5ec348cb555',
    commentCount: 42,
    createdAt: '2024-03-15T08:45:00Z'
  }
];

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navigation />
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <TopUsers users={mockUsers} />
                <TrendingPosts posts={mockPosts} />
              </div>
            } />
            <Route path="/top-users" element={<TopUsers users={mockUsers} />} />
            <Route path="/trending" element={<TrendingPosts posts={mockPosts} />} />
            <Route path="/live-feed" element={<LiveFeed posts={mockPosts} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;