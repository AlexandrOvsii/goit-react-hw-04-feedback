import React, { Component } from 'react';
import css from './Statistics/Statistics.module.css';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = ({ good, neutral, bad }) => {
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = ({ total, good }) =>
    Math.ceil((good / total) * 100);

  handleCountFeedback = type => {
    //хороший вариант, но следующий - самый правильный
    this.setState({
      [type]: this.state[type] + 1,
    });
  };

  // handleCountFeedback = type => {
  //   this.setState(prevState => ({
  //     [type]: prevState[type] + 1,
  //   }));
  // };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback({ good, neutral, bad });
    const positivePercentageCount = this.countPositiveFeedbackPercentage({
      total,
      good,
    });

    return (
      <div className={css.FeedbackForm}>
        <Section title="Please leave feedback">
          <FeedbackOptions handleCountFeedback={this.handleCountFeedback} />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentageCount}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
