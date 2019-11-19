import { select, takeLatest } from 'redux-saga/effects';
import { LOAD_REPOS } from 'containers/App/constants';

import { makeSelectEmail } from 'containers/LoginPage/selectors';

/**
 * Github repos request/response handler
 */
export function* getRepos() {
  // Select username from store
  const email = yield select(makeSelectEmail());
  //   const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;
  console.log(email);
  //   try {
  //     // Call our request helper (see 'utils/request')
  //     const repos = yield call(request, requestURL);
  //     yield put(reposLoaded(repos, username));
  //   } catch (err) {
  //     yield put(repoLoadingError(err));
  //   }
}

export default function* githubData() {
  yield takeLatest(LOAD_REPOS, getRepos);
}
