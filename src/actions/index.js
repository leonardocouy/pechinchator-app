import { threadsRef } from "../config/firebase";
import { FETCH_THREADS } from "./types";

export const fetchThreads = () => async dispatch => {
  threadsRef.onSnapshot(snapshot => {
    const threads = snapshot.docs.map((threadDoc) => threadDoc.data());

    dispatch({
      type: FETCH_THREADS,
      payload: threads,
    });
  });
};
