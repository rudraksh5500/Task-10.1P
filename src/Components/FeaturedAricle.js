import React from 'react';
import './FeaturedArticle.css';

function FeaturedArticle({ imageUrls, titles, descriptions, authors, ratings }) {
  return (
    <div className="FeaturedArticle">
      <div className="ArticleContainer">
        {imageUrls.map((url, index) => (
          <div key={index} className="Article">
            <img src={url} alt={`Article ${index}`} className="ArticleImage" />
            <div className="ArticleDetails">
              <h2 className="ArticleTitle">{titles[index]}</h2>
              <p className="ArticleDescription">{descriptions[index]}</p>
              <div className="Author">
                <p className="AuthorName">{authors[index]}</p>
                </div>
                <div className="Rating">
                <p className="ArticleRating">{ratings[index]} / 5</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedArticle;
