import React,{Component} from "react"
import ReactCSSTransitionGroup from "react-addons-css-transition-group"
class App extends Component{
    render(){
        return (
            <div>
                <h1>React Resume</h1>
                <div className="main">
                    <ReactCSSTransitionGroup transitionName="app" transitionEnterTimeout={500}
                                             transitionLeaveTimeout={1000}
                                             className="app">
                        <div className="content" key={this.props.location.pathname}>
                            {this.props.children}
                        </div>
                    </ReactCSSTransitionGroup>
                </div>
            </div>
        )
    }
}

export default App;

