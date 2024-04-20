import { all } from "redux-saga/effects";

import blogDetailsRootSaga  from './sagas/blogDetailsSagas'


export default function* rootSaga() {
    yield all([
      blogDetailsRootSaga()
    ]);
  }
