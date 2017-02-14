import React, {Component, PropTypes} from 'react';
import './post.css';

export default class Post extends Component {

    static propTypes = {
        post: PropTypes.shape({
            title: PropTypes.string.isRequired,
            subtitle: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    };

    render() {
        let {title, subtitle, text} = this.props.post;

        return (
            <div>
                <p className="title">{ title }</p>
                <p className="subtitle">{ subtitle }</p>
                <p className="text">{ text }</p>
            </div>
        );
    }
}
