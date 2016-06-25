var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var server = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true
});

server.app.get('/posts/', function(req, res) {
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

server.listen(3000, 'localhost', function (err, result) {
    if (err) {
        return console.log(err);
    }
    console.log('Listening at http://localhost:3000/');
});
