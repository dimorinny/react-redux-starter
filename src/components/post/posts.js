//noinspection JSUnresolvedVariable
import React, {Component, PropTypes} from 'react';
import Post from './post';

export default class PostList extends Component {

    static propTypes = {
        posts: PropTypes.array.isRequired,
        isPending: PropTypes.bool.isRequired,
        error: PropTypes.object
    };

    render() {
        let {posts, isPending, error} = this.props;

        return (
            <div>
                { posts.map((item, index) => this.renderPost(item, index)) }
            </div>
        )
    }

    renderPost(post, index) {
        return (
            <Post key={ index } post={ post }/>
        )
    }
}
