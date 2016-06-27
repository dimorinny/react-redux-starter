//noinspection JSUnresolvedVariable
import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

@Radium
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
                <p style={ styles.title }>{ title }</p>
                <p style={ styles.subtitle }>{ subtitle }</p>
                <p style={ styles.text }>{ text }</p>
            </div>
        );
    }
}

const styles = {
    title: {
        backgroundColor: 'red',

        ':hover': {
            backgroundColor: 'black'
        }
    },

    subtitle: {
        backgroundColor: 'blue'
    },

    text: {
        backgroundColor: 'orange'
    }
};
