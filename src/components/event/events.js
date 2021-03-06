import React, {Component, PropTypes} from 'react';
import Event from './event';

export default class EventList extends Component {

    static propTypes = {
        events: PropTypes.array.isRequired,
        isPending: PropTypes.bool.isRequired,
        error: PropTypes.object
    };

    render() {
        let {events, isPending, error} = this.props;

        return (
            <div>
                { events.map((item, index) => EventList.renderEvent(item, index)) }
            </div>
        )
    }

    static renderEvent(event, index) {
        return (
            <Event key={ index } event={ event }/>
        )
    }
}
