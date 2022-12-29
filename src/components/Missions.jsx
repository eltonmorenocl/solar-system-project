import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <div className="missions">
          { missions.map((m) => (
            <ul key={ m.name }>
              <MissionCard
                name={ m.name }
                year={ m.year }
                country={ m.country }
                destination={ m.destination }
              />
            </ul>))}
        </div>
      </div>
    );
  }
}
export default Missions;
