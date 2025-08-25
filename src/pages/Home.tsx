import React, { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Sidebar } from '@/components/Sidebar';
import { CreatePost } from '@/components/CreatePost';
import { PostList } from '@/components/PostList';
import { CompactCarAscii } from '@/components/CarAsciiArt';

export const Home: React.FC = () => {
  useEffect(() => {
    // Enable dark mode by default for the enhanced design
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-page bg-pattern">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-6 max-w-4xl mx-auto">
          <CreatePost />
          <PostList />
          
          {/* ASCII Art in blank space */}
          <div className="mt-8 flex justify-center">
            <CompactCarAscii showRandom={true} animate={true} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;