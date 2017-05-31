import About from "../containers/About"
import Contact from "../containers/Contact"
import Home from "../containers/Home"
import Project from "../containers/Project"
import Skills from "../containers/Skills"
import App from "../layouts/App"

import {Router,Route,IndexRoute,hashHistory} from "react-router"

import React from "react"

export default (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="about" component={About}/>
            <Route path="contact" component={Contact}/>
            <Route path="project" component={Project}/>
            <Route path="skills" component={Skills}/>
        </Route>
    </Router>
)