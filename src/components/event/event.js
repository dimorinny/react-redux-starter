//noinspection JSUnresolvedVariable
import React, {Component, PropTypes} from 'react';
import Radium from 'radium';

@Radium
export default class Event extends Component {

    static propTypes = {
        event: PropTypes.shape({
            title: PropTypes.string.isRequired,
            subtitle: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    };

    render() {
        let {title, subtitle, text} = this.props.event;

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
        backgroundColor: 'grey',

        ':hover': {
            backgroundColor: 'blue'
        }
    },

    subtitle: {
        backgroundColor: 'orange'
    },

    text: {
        backgroundColor: 'red'
    }
};
