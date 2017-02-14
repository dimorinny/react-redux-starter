import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link, IndexLink} from 'react-router';
import * as actionCreators from '../actions/post';
import './app.css';

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends Component {

    static propTypes = {
        actions: PropTypes.object.isRequired,
        children: React.PropTypes.node.isRequired
    };

    render() {
        let {children} = this.props;

        return (
            <div>
                <IndexLink to='/' className="link">Посты</IndexLink>
                <Link to='/event' className="link">События</Link>

                { children }
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {router: state.router};
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(actionCreators, dispatch)};
}
