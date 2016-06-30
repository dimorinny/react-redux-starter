import React from "react";
import {Route, IndexRoute} from "react-router";
import PostsPage from "./containers/post/posts-page";
import EventsPage from "./containers/event/events-page";
import App from "./containers/app";

export default (
    <Route path='/' component={ App }>
        <IndexRoute component={ PostsPage }/>
        <Route path='/event' component={ EventsPage }/>
    </Route>
);
