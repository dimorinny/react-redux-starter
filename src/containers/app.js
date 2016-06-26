//noinspection JSUnresolvedVariable
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PostList from '../components/post/posts';
import * as actionCreators from '../actions/posts';

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends Component {

    static propTypes = {
        actions: PropTypes.object.isRequired,
        postsState: PropTypes.object.isRequired
    };

    render() {
        let { actions, postsState } = this.props;
        //noinspection UnnecessaryLocalVariableJS
        let { posts, isPending, error } = postsState;

        return (
            <div>
                <input
                    type='button'
                    value='Load posts'
                    onClick={ () => this.handleLoadPostsButtonClicked(actions) }
                />

                <PostList posts={ posts } isPending={ isPending } error={ error }/>
            </div>
        );
    }

    handleLoadPostsButtonClicked(actions) {
        //noinspection JSUnresolvedFunction
        actions.loadPosts()
    }
}

function mapStateToProps(state) {
    return { postsState: state.posts };
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(actionCreators, dispatch) };
}
