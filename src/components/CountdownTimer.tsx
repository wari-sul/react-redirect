import React, { useEffect, useState } from 'react';
import LoadingBar from './LoadingBar';

const CountdownTimer: React.FC = () => {
    const [seconds, setSeconds] = useState(30);
    const [isRunning, setIsRunning] = useState(true);
    const progress = ((30 - seconds) * 100) / 30;

    useEffect(() => {
        let timeoutId: number;
        
        if (isRunning && seconds > 0) {
            timeoutId = window.setTimeout(() => {
                if (seconds <= 1) {
                    window.location.href = "https://github.com/wari-sul";
                } else {
                    setSeconds(prev => prev - 1);
                }
            }, 1000);
        }

        return () => window.clearTimeout(timeoutId);
    }, [seconds, isRunning]);

    const handleStop = () => {
        setIsRunning(false);
    };

    return (
        <div className="countdown-timer glass-effect">
            <h2>Welcome to My Project Space</h2>
            <p>Redirecting to GitHub Repository in {seconds} seconds</p>
            <LoadingBar progress={progress} />
            <button onClick={handleStop} className="stop-button">
                {isRunning ? 'Pause Redirect' : 'Redirect Paused'}
            </button>
        </div>
    );
};

export default CountdownTimer;