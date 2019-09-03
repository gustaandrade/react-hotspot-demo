import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './ButtonArea.css';

import * as Actions from '../store/actions/actions';

const ButtonArea = ({ hotspots, toggleHotspotMarking }) => (
    <div className="main-button-content">
        <button onClick={() => toggleHotspotMarking()}>Create Hotspot</button>
    </div>
);

const mapStateToProps = state => ({ hotspots: state.hotspots });
const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ButtonArea);