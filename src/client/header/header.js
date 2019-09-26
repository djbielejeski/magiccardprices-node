import React from 'react';
import './header.scss';
import logo from '../content/MTG_Logo_rev.png';

function Header() {
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="/">
                        <img className="header-image" src={logo} />
                        <span className="text">Magic Card Prices</span>
                    </a>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li>
                            <a href="/Search" id="searchLink">
                                <i className="fa fa-search"></i>
                                <span className="text">Search</span>
                            </a>
                        </li>
                        <li>
                            <a href="/PriceVisualizer" id="priceVisualizerLink">
                                <i className="fa fa-dollar"></i>
                                <span className="text">Price Visualizer</span>
                            </a>
                        </li>
                        <li>
                            <a href="/PlaytestUtility" id="playtestUtility">
                                <i className="fa fa-puzzle-piece"></i>
                                <span className="text">Playtest Utility</span>
                            </a>
                        </li>
                        <li>
                            <a href="/PriceChanges" id="priceChanges">
                                <i className="fa fa-area-chart"></i>
                                <span className="text">Price Changes</span>
                            </a>
                        </li>
                        <li role="separator" className="divider"></li>
                        <li>
                            <a href="/About" id="aboutLink">
                                <i className="fa fa-info visible-xs-inline-block"></i>
                                <span className="text">About</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
