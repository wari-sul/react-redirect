import React from 'react';

interface LoadingBarProps {
  progress: number;
}

const LoadingBar: React.FC<LoadingBarProps> = ({ progress }) => {
  const clampedProgress = Math.min(Math.max(progress, 0), 100);
  
  return (
    <div className="loading-bar">
      <div 
        className="loading-bar-fill"
        style={{ width: `${clampedProgress}%` }}
      />
    </div>
  );
};

export default LoadingBar;