// components/TidioChat.js
'use client'
import { useEffect } from 'react';

const TidioChat = ({ position }) => {
  useEffect(() => {
    // Load Tidio script
    const script = document.createElement('script');
    script.src = '//code.tidio.co/ovl1qwc1q8gfpyao73swe7yxbqf2olgm.js';
    script.async = true;
    document.body.appendChild(script);

    // Configure Tidio position after it loads
    script.onload = () => {
      if (window.tidioChatApi) {
        // Wait for Tidio to be ready
        window.tidioChatApi.on("ready", function() {
          // Custom position if provided
          if (position) {
            const iframe = document.getElementById("tidio-chat-iframe");
            if (iframe) {
              if (position.bottom !== undefined) iframe.style.bottom = `${position.bottom}px`;
              if (position.right !== undefined) iframe.style.right = `${position.right}px`;
              if (position.left !== undefined) iframe.style.left = `${position.left}px`;
              if (position.top !== undefined) iframe.style.top = `${position.top}px`;
            }
          }
        });
      }
    };

    return () => {
      // Cleanup when component unmounts
      document.body.removeChild(script);
      if (window.tidioChatApi) {
        window.tidioChatApi.hide();
        window.tidioChatApi.close();
      }
    };
  }, [position]);

  return null;
};

export default TidioChat;