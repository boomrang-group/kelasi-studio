import React, { useState, useCallback } from 'react';
import './FileUploadPage.css'; // We'll create this CSS file next

const FileUploadPage = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    // TODO: Add file validation (type, size) here
    setSelectedFiles(prevFiles => [...prevFiles, ...files.map(file => ({ file, progress: 0 }))]);
  };

  const handleDrop = useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);
    const files = Array.from(event.dataTransfer.files);
    // TODO: Add file validation (type, size) here
    setSelectedFiles(prevFiles => [...prevFiles, ...files.map(file => ({ file, progress: 0 }))]);
  }, []);

  const handleDragOver = useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();
    if (!isDragging) setIsDragging(true);
  }, [isDragging]);

  const handleDragLeave = useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();
    // Check if the leave target is outside the dropzone
    if (event.currentTarget.contains(event.relatedTarget)) return;
    setIsDragging(false);
  }, []);

  // Placeholder for actual upload logic
  const handleUpload = (fileWithProgress) => {
    console.log('Uploading:', fileWithProgress.file.name);
    // Simulate upload progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      if (progress <= 100) {
        setSelectedFiles(prevFiles =>
          prevFiles.map(f =>
            f.file.name === fileWithProgress.file.name ? { ...f, progress } : f
          )
        );
      } else {
        clearInterval(interval);
      }
    }, 200);
  };

  return (
    <div className="file-upload-page">
      <h2 className="upload-title">Upload Your Media</h2>

      <div
        className={`dropzone ${isDragging ? 'dragging' : ''}`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragEnter={handleDragOver} // Use handleDragOver for enter as well to set isDragging
        onDragLeave={handleDragLeave}
      >
        <input
          type="file"
          id="fileInput"
          multiple
          onChange={handleFileChange}
          className="file-input-hidden"
        />
        <label htmlFor="fileInput" className="file-input-label">
          <p>Drag & drop files here</p>
          <p>or</p>
          <button type="button" className="browse-button">Browse Files</button>
        </label>
        <p className="supported-formats">
          Supported formats: MP4, MOV, MP3, WAV, PDF, PPTX
        </p>
      </div>

      {selectedFiles.length > 0 && (
        <div className="file-progress-area">
          <h3 className="progress-title">Selected Files:</h3>
          <ul className="file-list">
            {selectedFiles.map((fileWithProgress, index) => (
              <li key={index} className="file-item">
                <span className="file-name">{fileWithProgress.file.name}</span>
                <div className="progress-bar-container">
                  <div
                    className="progress-bar"
                    style={{ width: `${fileWithProgress.progress}%` }}
                  >
                    {fileWithProgress.progress}%
                  </div>
                </div>
                {fileWithProgress.progress === 0 && (
                   <button onClick={() => handleUpload(fileWithProgress)} className="upload-action-button">
                     Upload
                   </button>
                )}
                 {fileWithProgress.progress > 0 && fileWithProgress.progress < 100 && (
                   <span className="upload-status">Uploading...</span>
                )}
                {fileWithProgress.progress === 100 && (
                   <span className="upload-status completed">Completed</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FileUploadPage;
