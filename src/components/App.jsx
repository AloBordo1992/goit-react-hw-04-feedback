import { Section } from './section/section';
import { Feedbackoption } from './feedback/feedback';
import { Statistics } from './statistic/statistics';
import { Notification } from './Notification/Notification';
import { useState } from 'react';

import React from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  //-----------------------------------------------------------------------

  const total = good + neutral + bad;

  const positivePercentage = Math.round((good / total) * 100);

  function onClickBtn(option) {
    switch (option) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;
      case 'bad':
        setBad(bad => bad + 1);
        break;

      default:
        break;
    }
  }
  //---------------------
  // updateState = feedback => {
  //   this.setState(prevState => ({ [feedback]: prevState[feedback] + 1 }));
  // };
  //------------------------------------------------------------------------
  return (
    <div>
      <Section title="Please leave feedback">
        <Feedbackoption
          options={Object.keys({ good, neutral, bad })}
          onClickBtn={onClickBtn}
          // options={Object.keys(this.state)}
          // updateState={this.updateState}
        />
      </Section>
      <Section title="Statistics">
        {total !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </div>
  );
};

export default App;
