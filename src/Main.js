import React, {Component} from "react";
import {BrowserRouter, NavLink, Route} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import "./index.css"

class Main extends Component {
    render() {
        return (
            //base on Link the react-router-dome will render the correlation component
            <BrowserRouter>
                <div>
                    <h1>Simple SPA</h1>
                    <ul className="header">
                        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                        {/*exact to match exactly url*/}
                        <li><NavLink exact to="/">Home</NavLink></li>
                        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                        <li><NavLink to="/stuff">Stuff</NavLink></li>
                        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                    <div className="content">
                        {/*exact to match exactly url*/}
                        <Route exact path="/" component={Home}/>
                        <Route path="/stuff" component={Stuff}/>
                        <Route path="/contact" component={Contact}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default Main