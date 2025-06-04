import React, { useState } from 'react';
import './RecordingPage.css'; // We'll create this file next
import WebcamRecorder from './WebcamRecorder';
import ScreenRecorder from './ScreenRecorder';
import AudioRecorder from './AudioRecorder';
import CombinedRecorder from './CombinedRecorder';

const RecordingPage = () => {
  const [recordingType, setRecordingType] = useState('webcam'); // Default type

  const renderRecorderComponent = () => {
    switch (recordingType) {
      case 'webcam':
        return <WebcamRecorder />;
      case 'screen':
        return <ScreenRecorder />;
      case 'audio':
        return <AudioRecorder />;
      case 'combined':
        return <CombinedRecorder />;
      default:
        return <p>Please select a recording type.</p>;
    }
  };

  return (
    <div className="recording-page">
      <div className="recording-type-selector">
        <button onClick={() => setRecordingType('webcam')} className={recordingType === 'webcam' ? 'active' : ''}>Webcam</button>
        <button onClick={() => setRecordingType('screen')} className={recordingType === 'screen' ? 'active' : ''}>Screen</button>
        <button onClick={() => setRecordingType('audio')} className={recordingType === 'audio' ? 'active' : ''}>Audio</button>
        <button onClick={() => setRecordingType('combined')} className={recordingType === 'combined' ? 'active' : ''}>Screen + Webcam</button>
      </div>

      <div className="recording-interface">
        <div className="preview-area">
          {renderRecorderComponent()}
        </div>
        <div className="controls-area">
          <button>Start</button>
          <button>Stop</button>
          <button>Pause</button>
        </div>
      </div>
    </div>
  );
};

export default RecordingPage;
