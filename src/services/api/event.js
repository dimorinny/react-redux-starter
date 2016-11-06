import 'whatwg-fetch';

const LOAD_POSTS = '/events/';

export function getEvents() {
    return fetch(__BASE__ + LOAD_POSTS).then((r) => r.json());
}
