import React from 'react';
import css from './FeedbackOptions.module.css';

function FeedbackOptions({ handleCountFeedback, options }) {
  return (
    
    <div className={css.BtnWrapper}>
      {options.map(option => (
        <button
          key={option}
          type="button"
          onClick={() => handleCountFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default FeedbackOptions;
