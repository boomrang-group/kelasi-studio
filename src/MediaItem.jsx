import React from 'react';
import './MediaItem.css'; // We'll create this CSS file next

// Placeholder icons (ideally, you'd use an icon library like lucide-react)
const VideoIcon = () => <span className="media-icon video-icon">V</span>;
const AudioIcon = () => <span className="media-icon audio-icon">A</span>;
const PdfIcon = () => <span className="media-icon pdf-icon">P</span>;
const GenericIcon = () => <span className="media-icon generic-icon">F</span>;

const MediaItem = ({ item }) => {
  const { title, type, thumbnailUrl, date } = item;

  const renderThumbnail = () => {
    if (thumbnailUrl) {
      return <img src={thumbnailUrl} alt={title} className="media-thumbnail-img" />;
    }
    switch (type) {
      case 'video':
        return <VideoIcon />;
      case 'audio':
        return <AudioIcon />;
      case 'pdf':
        return <PdfIcon />;
      default:
        return <GenericIcon />;
    }
  };

  return (
    <div className="media-item">
      <div className="media-thumbnail">
        {renderThumbnail()}
      </div>
      <div className="media-info">
        <h4 className="media-title" title={title}>{title}</h4>
        <p className="media-meta">{type.toUpperCase()} - {new Date(date).toLocaleDateString()}</p>
      </div>
      <div className="media-actions">
        <button className="action-button preview-button" title="Preview">👁️</button>
        <button className="action-button download-button" title="Download">💾</button>
        <button className="action-button edit-button" title="Edit Metadata">✏️</button>
        <button className="action-button delete-button" title="Delete">🗑️</button>
      </div>
    </div>
  );
};

export default MediaItem;
