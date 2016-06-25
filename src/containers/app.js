//noinspection JSUnresolvedVariable
import React, {Component} from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/posts';

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends Component {
    render() {
        let {actions} = this.props;

        return (
            <div>
                <input
                    type='button'
                    value='Load posts'
                    onClick={() => this.handleLoadPostsButtonClicked(actions)}
                />
            </div>
        );
    }

    handleLoadPostsButtonClicked(actions) {
        //noinspection JSUnresolvedFunction
        actions.loadPosts()
    }
}

function mapStateToProps(state) {
    return { posts: state.posts };
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(actionCreators, dispatch) };
}
