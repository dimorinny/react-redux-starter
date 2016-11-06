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
                { posts.map((item, index) => PostList.renderPost(item, index)) }
            </div>
        )
    }

    static renderPost(post, index) {
        return (
            <Post key={ index } post={ post }/>
        )
    }
}
