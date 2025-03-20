import React from 'react';
import { Crown, Medal } from 'lucide-react';

interface TopUsersProps {
  users: Array<{
    id: string;
    name: string;
    avatar: string;
    postCount: number;
  }>;
}

const TopUsers: React.FC<TopUsersProps> = ({ users }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <Crown className="h-6 w-6 text-yellow-500 mr-2" />
        Top Contributors
      </h2>
      <div className="space-y-4">
        {users.map((user, index) => (
          <div
            key={user.id}
            className="flex items-center p-4 bg-gray-50 rounded-lg transition-all hover:bg-gray-100"
          >
            <div className="relative">
              {index < 3 && (
                <Medal
                  className={`h-6 w-6 absolute -top-2 -left-2 ${
                    index === 0
                      ? 'text-yellow-500'
                      : index === 1
                      ? 'text-gray-400'
                      : 'text-amber-700'
                  }`}
                />
              )}
              <img
                src={user.avatar}
                alt={user.name}
                className="h-12 w-12 rounded-full object-cover"
              />
            </div>
            <div className="ml-4 flex-1">
              <h3 className="text-lg font-semibold text-gray-900">{user.name}</h3>
              <p className="text-sm text-gray-600">{user.postCount} posts</p>
            </div>
            <div className="text-2xl font-bold text-indigo-600">#{index + 1}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopUsers