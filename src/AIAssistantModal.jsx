import React, { useState } from 'react';
import './AIAssistantModal.css'; // We'll create this CSS file next

const AIAssistantModal = ({ mediaTitle, mediaType, onClose }) => {
  const [keywords, setKeywords] = useState('');
  const [generatedTitle, setGeneratedTitle] = useState('');
  const [generatedDescription, setGeneratedDescription] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    if (!keywords.trim()) {
      alert('Please enter some keywords.');
      return;
    }
    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      setGeneratedTitle(`AI Title for: ${mediaTitle} based on ${keywords}`);
      setGeneratedDescription(`This is an AI-generated description for ${mediaTitle}, using keywords: ${keywords}. It highlights key aspects and engages the audience effectively.`);
      setIsGenerating(false);
    }, 1000);
  };

  const handleCopyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => alert('Copied to clipboard!'))
      .catch(err => alert('Failed to copy: ' + err));
  };

  const handleApply = () => {
    // Placeholder for applying changes
    alert(`Applying generated content for "${mediaTitle}" (Not implemented yet)`);
    if (onClose) onClose(); // Close modal after applying
  }

  if (!mediaTitle) return null; // Don't render if no media title (basic guard)

  return (
    <div className="ai-assistant-modal-overlay">
      <div className="ai-assistant-modal">
        <div className="modal-header">
          <h3>AI Content Assistant</h3>
          <button onClick={onClose} className="close-button">&times;</button>
        </div>
        <div className="modal-content">
          <p className="media-context">Assisting with: <span className="media-title-display">{mediaTitle}</span> ({mediaType})</p>

          <div className="input-group">
            <label htmlFor="keywords">Enter Keywords:</label>
            <input
              type="text"
              id="keywords"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              placeholder="e.g., nature, travel, highlights"
              className="keyword-input"
            />
          </div>

          <button onClick={handleGenerate} disabled={isGenerating} className="generate-button">
            {isGenerating ? 'Generating...' : 'Generate Title & Description'}
          </button>

          {(generatedTitle || generatedDescription) && !isGenerating && (
            <div className="generated-content">
              {generatedTitle && (
                <div className="generated-item">
                  <label>Generated Title:</label>
                  <div className="content-display-area">
                    <p>{generatedTitle}</p>
                    <button onClick={() => handleCopyToClipboard(generatedTitle)} className="copy-button">Copy</button>
                  </div>
                </div>
              )}
              {generatedDescription && (
                <div className="generated-item">
                  <label>Generated Description:</label>
                  <div className="content-display-area">
                    <p className="description-text">{generatedDescription}</p>
                    <button onClick={() => handleCopyToClipboard(generatedDescription)} className="copy-button">Copy</button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="modal-footer">
          <button onClick={handleApply} className="apply-button" disabled={!generatedTitle && !generatedDescription}>Apply</button>
          <button onClick={onClose} className="cancel-button">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AIAssistantModal;
