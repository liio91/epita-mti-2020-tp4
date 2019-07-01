import Target from "../Objects/Target";

const defaultState = {
  lives: 3,
  score: 0,
  isStarted: false,
  // targets: { 1: new Target(70, 30, 2) },
  targets: {},
  scoreMultiplier: 1,
  nbKill: 0,
  nbSpawn: 1,
  killSerie: 0
};

let id = 2;

const game = (state = defaultState, action) => {
  switch (action.type) {
    case 'GAME_START':
      return {
        ...state,
        isStarted: true
      };
    case "GAME_STOP":
      return {
        ...defaultState,
        isStarted: false
      };
    case "CLICKED_TARGET":
      let tmp = { ...state.targets };
      console.log(action)
      delete tmp[action.id];

      let nbSpawn = state.nbSpawn
      
      if (state.nbKill === 5 || state.nbKill === 15) {
        nbSpawn++
      }

      let scoreMultiplier = state.scoreMultiplier;

      if (state.killSerie !== 0 && state.killSerie % 3 === 0) {
        scoreMultiplier = scoreMultiplier * 2
      }

      return {
        ...state,
        targets: tmp,
        nbSpawn: nbSpawn,
        score: state.score + 1 * scoreMultiplier,
        scoreMultiplier: scoreMultiplier,
        nbKill: state.nbKill + 1,
        killSerie: state.killSerie + 1
      }
    case "UPDATE_TARGETS_VALUE":
      let tmp2 = { ...state.targets };

      let lives = state.lives
      let scoreMultiplier2 = state.scoreMultiplier

      for (let target in tmp2)
      {
        if (tmp2[target].value > 1) {
          tmp2[target].value--;
        }
        else if (tmp2[target].value === 1) {
          delete tmp2[target];
          lives--
          scoreMultiplier2 = 1
        }
      }

      return {
        ...state,
        lives: lives,
        targets: tmp2,
        scoreMultiplier: scoreMultiplier2
      };
    case "ADD_TARGET":
      return {
        ...state,
        // lives: lives,
        targets: { ...state.targets, [id++]: new Target(Math.floor(Math.random() * 90), Math.floor(Math.random() * 90), 3) }
      };
    // case "COUNTDOWN_TARGET":
    //   let tmp2 = { ...state.targets };

    //   delete tmp[action.id];

    //   tmp2.forEach(target => {
    //     target.value--
    //   });

    //   return {
    //     ...state,
    //     targets: tmp2,
    //   }
    default:
      return state;
  }
};

export default game;
