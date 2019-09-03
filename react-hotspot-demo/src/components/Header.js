import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './Header.css';

import logo from '../assets/logo.svg';

import * as Actions from '../store/actions/actions';

const Header = ({ hotspots, turnHotspotAreaOn, turnHotspotAreaOff, setHotspotOn }) => (
        <header id="main-header">
            <div className="header-content">
                <img src={logo} alt="Compass" />

                {hotspots.map(hotspot => (
                    <div key={hotspot.id} id={hotspot.id} 
                    onMouseEnter={() => turnHotspotAreaOn(hotspot)}
                    onMouseLeave={() => turnHotspotAreaOff(hotspot)}>
                        <a href="#"
                        onClick={() => setHotspotOn(hotspot)}>{hotspot.title}</a>
                    </div> 
                ))}
            </div>
        </header>
);

const mapStateToProps = state => ({ hotspots: state.hotspots });
const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);