import { all } from "redux-saga/effects";
import allBlogRootSaga from "./sagas/blogs/allBlogSagas";
import commentsRootSaga from "./sagas/blogs/commentsSagas";

export default function* rootSaga() {
    yield all([
      allBlogRootSaga(),
      commentsRootSaga()
    ]);
  }
