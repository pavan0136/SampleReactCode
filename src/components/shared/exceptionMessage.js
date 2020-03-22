import React from 'react';
import exceptionIcon from '../../assets/error.svg';

export default function ExceptionMessage() {
    return (
        <div className="exceptionContainer"> 
            <span className="icon-span"><img src={exceptionIcon} className="icon" alt="error Icon"/> </span>
            <p> Unable to process request, please refresh the page.</p>
         </div>
    );
  }
  
