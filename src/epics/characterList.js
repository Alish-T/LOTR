import { ajax } from 'rxjs/ajax';
import * as rxjs from 'rxjs/add';




const fetchUser = username => ({ type: FETCH_USER, payload: username });
const fetchUserFulfilled = payload => ({ type: FETCH_USER_FULFILLED, payload });


const fetchUserEpic = action$ => action$.pipe(
  rxjs.ofType(FETCH_USER),
  rxjs.mergeMap(action =>
    ajax.getJSON(`https://the-one-api.herokuapp.com/v1/character/${action.payload}`).pipe(
      rxjs.map(response => fetchUserFulfilled(response))
    )
  )
);

// later...
dispatch(fetchUser());