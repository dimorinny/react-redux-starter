//noinspection JSUnresolvedVariable
import React, { Component, PropTypes } from 'react';
import Event from './event';

export default class EventList extends Component {

    static propTypes = {
        events: PropTypes.array.isRequired,
        isPending: PropTypes.bool.isRequired,
        error: PropTypes.object
    };

    render() {
        let { events, isPending, error } = this.props;

        return (
            <div>
                { events.map((item, index) => this.renderEvent(item, index)) }
            </div>
        )
    }

    renderEvent(event, index) {
        return (
            <Event key={ index } event={ event }/>
        )
    }
}
