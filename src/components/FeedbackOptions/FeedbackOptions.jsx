import React from 'react';
import css from './FeedbackOptions.module.css';

function FeedbackOptions({ handleCountFeedback }) {
  return (
    <div className={css.BtnWrapper}>
      <button type="button" onClick={() => handleCountFeedback('good')}>
        good
      </button>
      <button type="button" onClick={() => handleCountFeedback('neutral')}>
        neutral
      </button>
      <button type="button" onClick={() => handleCountFeedback('bad')}>
        bad
      </button>
    </div>
  );
}

export default FeedbackOptions;
