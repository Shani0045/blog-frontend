import { call, put, takeLatest, takeEvery } from "redux-saga/effects";
import { allBlogs } from '../../../services/blogs/blogService'
import { allBlogSuccess, allBlogError} from '../../actions/blogs/allBlogAction'
import { ALL_BLOG_REQUEST } from "../../actionTypes/blogs/allBlogType";


export function* allBlogSaga(action) {
    const response = yield call(() => allBlogs());
   
    if (!response.error) {
      yield put(allBlogSuccess(response));

    } else {
      yield put(allBlogError(response.error));
    }
  }


  export default function* allBlogRootSaga() {
    yield takeEvery(ALL_BLOG_REQUEST, allBlogSaga);
  }
