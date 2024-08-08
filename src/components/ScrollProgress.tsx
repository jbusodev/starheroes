import React, { useState, useEffect } from 'react';

const ScrollProgress: React.FC = () => {
  const [scroll, setScroll] = useState<number>(0);
  
  const handleScroll = () => {
    const content = document.querySelector('.content_wrapper') as HTMLElement;
    if (content) {
      const scrolled = Math.floor((content.scrollTop / (content.scrollHeight - content.clientHeight)) * 100);
      setScroll(scrolled);
    }
  };

  useEffect(() => {
    const content = document.querySelector('.content_wrapper') as HTMLElement;
    if (content) {
      content.addEventListener('scroll', handleScroll);
      return () => content.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="scroll-progress">
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${scroll}%` }}></div>
      </div>
    </div>
  );
};

export default ScrollProgress;
