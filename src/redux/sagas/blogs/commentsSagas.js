import { call, put, takeLatest, takeEvery } from "redux-saga/effects";
import { comments } from '../../../services/blogs/blogService'
import { commentsSuccess, commentsError} from '../../actions/blogs/commentsAction'
import { COMMENTS_REQUEST } from "../../actionTypes/blogs/commentsType";


export function* commentsSaga(action) {
    let payload = action.payload
    const response = yield call(() => comments(payload));
   
    if (!response.error) {
      yield put(commentsSuccess(response));

    } else {
      yield put(commentsError(response.error));
    }
  }

  export default function* commentsRootSaga() {
    yield takeEvery(COMMENTS_REQUEST, commentsSaga);
  }

  