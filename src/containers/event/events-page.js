import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import EventList from '../../components/event/events';
import * as actionCreators from '../../actions/event';

@connect(mapStateToProps, mapDispatchToProps)
export default class EventsPage extends Component {

    static propTypes = {
        actions: PropTypes.object.isRequired,
        eventState: PropTypes.object.isRequired
    };

    render() {
        let {actions, eventState} = this.props;
        let {events, isPending, error} = eventState;

        return (
            <div>
                <input
                    type='button'
                    value='Load events'
                    onClick={ () => EventsPage.handleLoadEventsButtonClicked(actions) }
                />

                <EventList events={ events } isPending={ isPending } error={ error }/>
            </div>
        );
    }

    static handleLoadEventsButtonClicked(actions) {
        actions.loadEvents()
    }
}

function mapStateToProps(state) {
    return {eventState: state.event};
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(actionCreators, dispatch)};
}
