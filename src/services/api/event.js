import "whatwg-fetch";

const LOAD_POSTS = '/events/';

export function getEvents() {
    //noinspection JSUnresolvedFunction,JSUnresolvedVariable
    return fetch(__BASE__ + LOAD_POSTS).then((r) => r.json());
}
