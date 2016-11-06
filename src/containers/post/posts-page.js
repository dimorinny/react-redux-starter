import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PostList from '../../components/post/posts';
import * as actionCreators from '../../actions/post';

@connect(mapStateToProps, mapDispatchToProps)
export default class PostsPage extends Component {

    static propTypes = {
        actions: PropTypes.object.isRequired,
        postState: PropTypes.object.isRequired
    };

    render() {
        let {actions, postState} = this.props;
        let {posts, isPending, error} = postState;

        return (
            <div>
                <input
                    type='button'
                    value='Load posts'
                    onClick={ () => PostsPage.handleLoadPostsButtonClicked(actions) }
                />

                <PostList posts={ posts } isPending={ isPending } error={ error }/>
            </div>
        );
    }

    static handleLoadPostsButtonClicked(actions) {
        actions.loadPosts()
    }
}

function mapStateToProps(state) {
    return {postState: state.post};
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(actionCreators, dispatch)};
}
