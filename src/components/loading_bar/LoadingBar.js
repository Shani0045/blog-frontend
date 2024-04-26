// LoadingBar.js
import React, { useState, useEffect } from 'react';
import LoadingBar from 'react-top-loading-bar';

const LoadingBarComponent = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const startProgress = () => {
            setProgress(50); // Set an initial progress when the loading starts
        };

        const completeProgress = () => {
            setProgress(100); // Set the progress to 100% when loading is complete
            setTimeout(() => {
                setProgress(0); // Reset the progress after a short delay
            }, 500); // Adjust the delay as needed
        };

        // Listen to changes in page loading state
        window.addEventListener('load', completeProgress);
        startProgress();

        return () => {
            // Cleanup: Remove event listener
            window.removeEventListener('load', completeProgress);
        };
    }, []);

    return <LoadingBar color="#f11946" progress={progress} />;
};

export default LoadingBarComponent;
