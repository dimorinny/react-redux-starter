//noinspection JSUnresolvedVariable
import React, { Component, PropTypes } from 'react';

export default class Post extends Component {

    static propTypes = {
        post: PropTypes.shape({
            title: PropTypes.string.isRequired,
            subtitle: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    };

    render() {
        let { title, subtitle, text } = this.props.post;

        return (
            <div>
                <p>{ title }</p>
                <p>{ subtitle }</p>
                <p>{ text }</p>
            </div>
        );
    }
}
