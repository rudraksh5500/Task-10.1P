import React from 'react';
import './CenteredBar.css';

function CenteredBar() {
  return (
    <div className="CenteredBar">
      <p>Dev@Deakin</p>
      <div className="CenterContent">
        <input type="text" placeholder="Search" className="SearchInput" />
      </div>
     <p> Post </p>
     <p> Login </p>
    </div>
  );
}

export default CenteredBar;
