import React from 'react';
import { connect } from 'react-redux';
import Target from '../components/Target';
import Info from '../components/Info';
import click_target from '../actions/click_target'
import ButtonStart from '../components/ButtonStart';
import ButtonStop from '../components/ButtonStop';

// FIXME: maybe, do something about this ?
const mapStateToProps = state => ({
  lives: state.game.lives,
  score: state.game.score,
  isStarted: state.game.isStarted,
  targets: state.game.targets
});

const GameLayout = ({ isStarted, lives, score, dispatch, targets }) => (
  <div
    style={{
      position: 'fixed',
      backgroundColor: '#21222C',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: '100vw',
      height: '100vh',
      margin: 'auto'
    }}
  >

    {isStarted ? (
      <React.Fragment>
        <ButtonStop onClick={() => dispatch({ type: "GAME_STOP_REQUESTED" })} />
        <Info lives={lives} score={score} />
        {/* <Target x={50} y={30} value={2} /> */}

        {/* for (const (index, target) of targets) {
          <Target
            x={target.x}
            y={target.y}
            value={target.value}
            key={index}
            onClick={() => dispatch(click_target(target.id))}
          />
        } */}
        
        {/* for (const index = 0; index < 5; index++) {
          // const element = targets[index];
          console.log("toto")
        } */}

        {/* for (const target in targets) {
          <Target x={target.x} y={target.y} value={target.value} key={index} onClick={() => dispatch(click_target(targetId))}/>
        } */}
        
        {
          Object.keys(targets).map((targetId, index) => {
            const target = targets[targetId];

            return <Target x={target.x} y={target.y} value={target.value} key={index} onClick={() => dispatch(click_target(targetId))}/>;
          })
        }
      </React.Fragment>
    ) : (
      <ButtonStart onClick={() => dispatch({ type: 'GAME_START_REQUESTED' })} />
    )}
  </div>
);

export default connect(mapStateToProps)(GameLayout);
