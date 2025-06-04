import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <h1>Video Studio Pro</h1>
        <nav>
          <ul>
            <li><a href="#">Recording</a></li>
            <li><a href="#">Media Library</a></li>
            <li><a href="#">AI Assistant</a></li>
          </ul>
        </nav>
      </header>
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;
