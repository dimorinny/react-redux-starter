var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var express = require('express');

var server = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    proxy: {
        '^\/posts|events': {
            target: 'http://127.0.0.1:3001'
        }
    }
});

var app = express();

app.get('/posts/', function (req, res) {
    var posts = {
        'posts': [
            {'title': 'Post', 'subtitle': 'Subtitle', 'text': 'This is text of my post'},
            {'title': 'Post1', 'subtitle': 'Subtitle1', 'text': 'This is text of my post1'},
            {'title': 'Post', 'subtitle': 'Subtitle', 'text': 'This is text of my post'},
            {'title': 'Post', 'subtitle': 'Subtitle', 'text': 'This is text of my post'},
            {'title': 'Post', 'subtitle': 'Subtitle', 'text': 'This is text of my post'},
            {'title': 'Post', 'subtitle': 'Subtitle', 'text': 'This is text of my post'}
        ]
    };

    res.json(posts);
});

app.get('/events/', function (req, res) {
    var events = {
        'events': [
            {'title': 'Event', 'subtitle': 'Subtitle', 'text': 'This is text of my event'},
            {'title': 'Event1', 'subtitle': 'Subtitle', 'text': 'This is text of my event'},
            {'title': 'Event2', 'subtitle': 'Subtitle', 'text': 'This is text of my event'},
            {'title': 'Event3', 'subtitle': 'Subtitle', 'text': 'This is text of my event'},
            {'title': 'Event4', 'subtitle': 'Subtitle', 'text': 'This is text of my event'},
            {'title': 'Event5', 'subtitle': 'Subtitle', 'text': 'This is text of my event'},
            {'title': 'Event6', 'subtitle': 'Subtitle', 'text': 'This is text of my event'},
            {'title': 'Event7', 'subtitle': 'Subtitle', 'text': 'This is text of my event'}
        ]
    };

    res.json(events);
});

server.listen(3000, 'localhost', function (err, result) {
    if (err) {
        return console.log(err);
    }
    console.log('Listening at http://localhost:3000/');
});

app.listen(3001);
