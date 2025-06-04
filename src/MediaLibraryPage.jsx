import React from 'react';
import MediaItem from './MediaItem';
import './MediaLibraryPage.css'; // We'll create this CSS file next

const placeholderMediaItems = [
  {
    id: '1',
    title: 'My Awesome Vacation Video Highlights Reel.mp4',
    type: 'video',
    thumbnailUrl: 'https://via.placeholder.com/150/FF0000/FFFFFF?Text=Video1', // Placeholder image
    date: '2023-10-26T10:00:00Z',
  },
  {
    id: '2',
    title: 'Podcast Episode 123 - Tech Talk.mp3',
    type: 'audio',
    thumbnailUrl: '', // Will use icon
    date: '2023-10-25T14:30:00Z',
  },
  {
    id: '3',
    title: 'Project Proposal Document Final Version.pdf',
    type: 'pdf',
    thumbnailUrl: null, // Will use icon
    date: '2023-10-24T09:15:00Z',
  },
  {
    id: '4',
    title: 'Another Great Presentation.pptx',
    type: 'document', // A generic document type
    thumbnailUrl: 'https://via.placeholder.com/150/0000FF/FFFFFF?Text=Doc1', // Placeholder image
    date: '2023-10-23T16:45:00Z',
  },
    {
    id: '5',
    title: 'Short Clip Screen Record.webm',
    type: 'video',
    thumbnailUrl: null, // Will use icon
    date: '2023-10-22T11:20:00Z',
  },
];

const MediaLibraryPage = () => {
  return (
    <div className="media-library-page">
      <h2 className="library-title">Your Media Library</h2>
      <div className="media-grid">
        {placeholderMediaItems.map(item => (
          <MediaItem key={item.id} item={item} />
        ))}
      </div>
       {placeholderMediaItems.length === 0 && (
        <p className="empty-library-message">Your media library is currently empty. Upload some files to get started!</p>
      )}
    </div>
  );
};

export default MediaLibraryPage;
