// import { delay } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { call } from 'redux-saga/effects'
import { select, put } from "redux-saga/es/effects";

function getSpawn(state) {
    return state.game.nbSpawn
}

function getisStarted(state) {
    return state.game.isStarted
}

function getTargets(state) {
    return state.game.targets
}

function getLives(state) {
    return state.game.lives
}

function* targetSaga() {
    while (true) {
        // console.log("toto")
        yield call(delay, 1000)

        const isStarted = yield select(getisStarted);

        if (isStarted) {
            const lives = yield select(getLives)

            console.log(lives)
            
            if (lives <= 0){
                yield put({type: "GAME_STOP_REQUESTED"})
            }

            yield put({type: "UPDATE_TARGETS_VALUE"})

            let nbSpawn = yield select(getSpawn);

            for (let i = 0; i < nbSpawn; ++i) {
                yield put({ type: "ADD_TARGET" });
            }



            // const targets = yield select(getTargets);

            // yield put()
        }
    }
}

export default targetSaga;