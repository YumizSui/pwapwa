import React from 'react';
import Timer from '../../features/timer/Timer';

const TimerPage = (): JSX.Element => (
  <div className="App">
    <header className="App-header">
      <Timer />
      <p>
        Climber Flyer Timer
      </p>
    </header>
  </div>
);

export default TimerPage;
