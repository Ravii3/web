import React from 'react';
import { Camera } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Camera className="h-8 w-8 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-900">PhotoShare</h1>
          </div>
          <nav className="flex space-x-4">
            <button className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition">
              Upload Photo
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}