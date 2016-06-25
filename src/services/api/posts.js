import 'whatwg-fetch';

const LOAD_POSTS = '/posts/';

export function getPosts() {
    //noinspection JSUnresolvedFunction,JSUnresolvedVariable
    return fetch(__BASE__ + LOAD_POSTS).then((r) => r.json());
}
