import { all } from "redux-saga/effects";

import blogDetailsRootSaga  from './sagas/blogs/blogDetailsSagas'
import allBlogRootSaga from "./sagas/blogs/allBlogSagas";
import categoriesRootSaga from "./sagas/blogs/categoriesSagas";


export default function* rootSaga() {
    yield all([
      blogDetailsRootSaga(),
      allBlogRootSaga(),
      categoriesRootSaga(),
    ]);
  }
