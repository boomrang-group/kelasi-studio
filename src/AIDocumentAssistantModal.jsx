import React, { useState } from 'react';
import './AIDocumentAssistantModal.css'; // We'll create this CSS file next

const AIDocumentAssistantModal = ({ documentTitle, documentType, onClose }) => {
  const [briefSummary, setBriefSummary] = useState('');
  const [generatedIdeas, setGeneratedIdeas] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateIdeas = () => {
    if (!briefSummary.trim()) {
      alert('Please enter a brief summary of the document.');
      return;
    }
    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      setGeneratedIdeas({
        suggestedVideoTitles: [
          `Video Title 1 for ${documentTitle}`,
          `Engaging ${documentType} Overview: ${documentTitle}`,
          `Key Insights from ${documentTitle}`,
        ],
        keyTalkingPoints: [
          `Talking point A based on summary: "${briefSummary.substring(0, 30)}..."`,
          `Talking point B highlighting specifics.`,
          `Talking point C about implications.`,
        ],
        promotionalBlurbs: [
          `Check out this video about ${documentTitle}! Learn all about...`,
          `Discover the key takeaways from ${documentTitle} in this concise video.`,
        ],
      });
      setIsGenerating(false);
    }, 1000);
  };

  const handleCopyToClipboard = (text) => {
    // If text is an array, join it with newlines
    const textToCopy = Array.isArray(text) ? text.join('\n') : text;
    navigator.clipboard.writeText(textToCopy)
      .then(() => alert('Copied to clipboard!'))
      .catch(err => alert('Failed to copy: ' + err));
  };

  if (!documentTitle) return null; // Basic guard

  return (
    <div className="ai-doc-assistant-modal-overlay">
      <div className="ai-doc-assistant-modal">
        <div className="doc-modal-header">
          <h3>AI Document Assistant</h3>
          <button onClick={onClose} className="doc-close-button">&times;</button>
        </div>
        <div className="doc-modal-content">
          <p className="document-context">
            Assisting with: <span className="document-title-display">{documentTitle}</span> ({documentType})
          </p>

          <div className="doc-input-group">
            <label htmlFor="briefSummary">Brief Summary of Document:</label>
            <textarea
              id="briefSummary"
              value={briefSummary}
              onChange={(e) => setBriefSummary(e.target.value)}
              placeholder="e.g., This document outlines Q3 financial performance, highlighting key achievements and challenges..."
              rows="4"
              className="summary-textarea"
            />
          </div>

          <button onClick={handleGenerateIdeas} disabled={isGenerating} className="doc-generate-button">
            {isGenerating ? 'Generating Ideas...' : 'Generate Content Ideas'}
          </button>

          {generatedIdeas && !isGenerating && (
            <div className="doc-generated-content">
              {generatedIdeas.suggestedVideoTitles && (
                <div className="doc-generated-item">
                  <label>Suggested Video Titles:</label>
                  <div className="doc-content-display-area">
                    <ul>{generatedIdeas.suggestedVideoTitles.map((title, i) => <li key={i}>{title}</li>)}</ul>
                    <button onClick={() => handleCopyToClipboard(generatedIdeas.suggestedVideoTitles)} className="doc-copy-button">Copy All</button>
                  </div>
                </div>
              )}
              {generatedIdeas.keyTalkingPoints && (
                <div className="doc-generated-item">
                  <label>Key Talking Points:</label>
                  <div className="doc-content-display-area">
                    <ul>{generatedIdeas.keyTalkingPoints.map((point, i) => <li key={i}>{point}</li>)}</ul>
                    <button onClick={() => handleCopyToClipboard(generatedIdeas.keyTalkingPoints)} className="doc-copy-button">Copy All</button>
                  </div>
                </div>
              )}
              {generatedIdeas.promotionalBlurbs && (
                 <div className="doc-generated-item">
                  <label>Promotional Blurbs:</label>
                  <div className="doc-content-display-area">
                    <ul>{generatedIdeas.promotionalBlurbs.map((blurb, i) => <li key={i}>{blurb}</li>)}</ul>
                    <button onClick={() => handleCopyToClipboard(generatedIdeas.promotionalBlurbs)} className="doc-copy-button">Copy All</button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="doc-modal-footer">
          <button onClick={onClose} className="doc-cancel-button">Close</button>
        </div>
      </div>
    </div>
  );
};

export default AIDocumentAssistantModal;
