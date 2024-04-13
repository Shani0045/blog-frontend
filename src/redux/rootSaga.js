import { all } from "redux-saga/effects";

import postRootSaga  from './sagas/postSagas'


export default function* rootSaga() {
    yield all([
      postRootSaga()
    ]);
  }
