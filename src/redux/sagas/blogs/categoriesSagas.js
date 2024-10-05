import { call, put, takeLatest, takeEvery } from "redux-saga/effects";
import { allCategories } from '../../../services/blogs/blogService'
import { categoriesSuccess, categoriesError} from '../../actions/blogs/allCategoriesAction'
import { CATEGORIES_REQUEST } from "../../actionTypes/blogs/CategoriesType";


export function* categoriesSaga(action) {
    const response = yield call(() => allCategories());
   
    if (!response.error) {
      yield put(categoriesSuccess(response));

    } else {
      yield put(categoriesError(response.error));
    }
  }

  export default function* categoriesRootSaga() {
    yield takeEvery(CATEGORIES_REQUEST, categoriesSaga);
  }
