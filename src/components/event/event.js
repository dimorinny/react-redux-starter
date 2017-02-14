import React, {Component, PropTypes} from 'react';
import './event.css';

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
                <p className="title">{ title }</p>
                <p className="subtitle">{ subtitle }</p>
                <p className="text">{ text }</p>
            </div>
        );
    }
}
