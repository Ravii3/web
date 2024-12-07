import React from 'react';
import { Header } from './components/Header';
import { PhotoGrid } from './components/PhotoGrid';
import { photos } from './data/photos';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <PhotoGrid photos={photos} />
      </main>
    </div>
  );
}

export default App;