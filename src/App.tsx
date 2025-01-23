import React from 'react';
import CountdownTimer from './components/CountdownTimer';
import BackButton from './components/BackButton';
import ErrorBoundary from './components/ErrorBoundary';
import './styles/App.css';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <ErrorBoundary>
      <div className="app glass-effect">
          <h1>Project Development in Progress</h1>
          <p>This project is currently in active development. Visit the GitHub repository to see the latest updates.</p>
          <p>Automatic redirect countdown:</p>
        <CountdownTimer />
        <div className="button-container">
          <BackButton />
          <button onClick={() => window.location.href = "https://github.com/wari-sul"} className="skip-button">
            Skip Timer
          </button>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default App;