import { call, put, takeLatest, takeEvery } from "redux-saga/effects";
import { blogDetails } from '../../../services/blogs/blogService'
import {blogDetailsRequest, blogDetailsSuccess, blogDetailsError} from '../../actions/blogs/blogDetailsAction'
import { BLOG_DETAILS_REQUEST } from "../../actionTypes/blogs/blogDetailsType";


export function* blogDetailsSaga(action) {
    const slug = action.payload
    const response = yield call(() => blogDetails(slug));
   
    if (!response.error) {
      yield put(blogDetailsSuccess(response));

    } else {
      yield put(blogDetailsError(response.error));
    }
  }


  export default function* blogRootSaga() {
    yield takeEvery(BLOG_DETAILS_REQUEST, blogDetailsSaga);
  }
