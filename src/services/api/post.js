import 'whatwg-fetch';

const LOAD_POSTS = '/posts/';

export function getPosts() {
    return fetch(__BASE__ + LOAD_POSTS).then((r) => r.json());
}
