import { all } from "redux-saga/effects";
import allBlogRootSaga from "./sagas/blogs/allBlogSagas";

export default function* rootSaga() {
    yield all([
      allBlogRootSaga(),
    ]);
  }
