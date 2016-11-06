import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Radium from 'radium';
import {Link, IndexLink} from 'react-router';
import * as actionCreators from '../actions/post';

@Radium
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
                <IndexLink to='/' style={ styles.link }>Посты</IndexLink>
                <Link to='/event' style={ styles.link }>События</Link>

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

const styles = {
    link: {
        margin: '8px'
    }
};
