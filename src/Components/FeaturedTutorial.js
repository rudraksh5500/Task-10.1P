import React from 'react';
import './FeaturedTutorial.css';

function FeaturedTutorial({ imageUrls, titles, descriptions, authors, ratings }) {
  return (
    <div className="FeaturedTutorial">
      <div className="TutorialContainer">
        {imageUrls.map((url, index) => (
          <div key={index} className="Tutorial">
            <img src={url} alt={`Tutorial ${index}`} className="TutorialImage" />
            <div className="TutorialDetails">
              <h2 className="TutorialTitle">{titles[index]}</h2>
              <p className="TutorialDescription">{descriptions[index]}</p>
              <div className="Author">
                <p className="AuthorName">{authors[index]}</p>
                </div>
                <div className="Rating">
                <p className="TutorialeRating">{ratings[index]} / 5</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedTutorial;
