import React from 'react';
import { Heart } from 'lucide-react';
import { Photo } from '../types';

interface PhotoGridProps {
  photos: Photo[];
}

export function PhotoGrid({ photos }: PhotoGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {photos.map((photo) => (
        <div key={photo.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={photo.url}
            alt={photo.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-900">{photo.title}</h3>
            <p className="text-sm text-gray-600">by {photo.author}</p>
            <div className="mt-3 flex items-center justify-between">
              <div className="flex items-center space-x-1">
                <Heart className="h-5 w-5 text-red-500" />
                <span className="text-sm text-gray-600">{photo.likes}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {photo.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}