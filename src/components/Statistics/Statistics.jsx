import React from 'react';
import css from './Statistics.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div className={css.StatsWrap}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  );
}

export default Statistics;
