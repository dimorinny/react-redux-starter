import {createAction} from "redux-actions";
import {LOAD_EVENTS} from "../constants";
import {getEvents} from "../services/api/event";

export const loadEvents = createAction(LOAD_EVENTS, getEvents);
