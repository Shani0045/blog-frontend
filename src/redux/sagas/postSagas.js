import { call, put, takeLatest, takeEvery } from "redux-saga/effects";
import {getAllPosts} from '../../services/postService'
import {getAllPostError, getAllPostSuccess} from '../actions/postAction'
import { POST_REQUEST } from "../actionTypes/postType";


export function* getPostsSaga(action) {
    const response = yield call(() => getAllPosts());
   
    if (!response.error) {
      yield put(getAllPostSuccess(response));

    } else {
      yield put(getAllPostError(response.error));
    }
  }


  export default function* postRootSaga() {
    yield takeEvery(POST_REQUEST, getPostsSaga);
  }
