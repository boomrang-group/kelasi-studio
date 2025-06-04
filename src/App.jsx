import React from 'react';
import Layout from './Layout';
import './Layout.css'; // Styles for the main Layout
// Note: index.css (with global theme variables) is imported in src/index.js

const App = () => {
  return (
    <Layout>
      <div style={{ textAlign: 'center', paddingTop: '50px' }}>
        <h1>Welcome to Video Studio Pro</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted-color)' }}>
          Your new video editing and content creation hub.
        </p>
        {/* Future content like a router outlet will go here */}
      </div>
    </Layout>
  );
};

export default App;
