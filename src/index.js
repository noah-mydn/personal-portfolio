import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import $ from 'jquery';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Index() {
  useEffect(() => {
    var NUM_OF_STARS = 300;
    for (var i = 0; i < NUM_OF_STARS; i++) {
        var star = $("<div>").addClass("star");
        star.css({
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
            animationDelay: Math.random() + "s",
            
        });
        $(".star-container").append(star);
    }
  }, []);

  return (
    <div className="star-container">
      <App />
    </div>
  );
}

root.render(

  <React.StrictMode>
    <Index />
  </React.StrictMode>
);
