import { take, put, select } from "redux-saga/es/effects";

const setItemsAgterXSeconds = seconds =>
    new Promise(resolve => {
        setTimeout(() => resolve(`after ${seconds} secs !`), seconds)
    });

function* gameSaga() {
    // while(true) {
    //     yield take('GAME_START_REQUESTED');

    //     const { userData, timeout } = yield race({
    //         userData: callbackify(fetchUserData, userId),
    //         timeout: DelayNode(3000)
    //     })

    //     if (timeout){
    //         //ERROR
    //     }
    // }

    while(true)
    {
        

        yield take("GAME_START_REQUESTED");
        yield put({ type: "GAME_START" });
        yield take("GAME_STOP_REQUESTED");
        yield put({ type: "GAME_STOP" });        
    }
}

export default gameSaga;