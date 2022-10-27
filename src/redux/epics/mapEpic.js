import { ajax } from "rxjs/ajax";
import { ofType } from "redux-observable";
import { setLocation } from "../actions/mapActions";
import { mergeMap, map } from "rxjs/operators";

export const mapEpic = (action$) =>
  action$.pipe(
    ofType("GET_LOCATION"),
    mergeMap((action) =>
      ajax
        .getJSON(
          `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${action.payload}&types=all&key=AIzaSyDcmSkWNLh1qG74RQB7XlF3ujODVIZbokE`
        )
        .pipe(map((response) => setLocation(response)))
    )
  );
