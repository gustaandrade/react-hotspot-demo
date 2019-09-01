import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './Hotspots.css';

import * as Actions from '../store/actions/actions';

const Hotspots = ({ hotspots, setHotspotOff }) => (
    <div className="hotspots-content">
        <table id="hotspots">
            <tbody>
                <tr>
                    <th colSpan="2">List of hotspots</th>
                </tr>
                {hotspots.map(hotspot => (
                    <tr key={hotspot.id}>
                        <td>{hotspot.title}</td>
                        <td>
                            <button onClick={() => setHotspotOff(hotspot)}>Delete</button>
                        </td>
                    </tr> 
                ))}
            </tbody>
        </table>
    </div>
);

const mapStateToProps = state => ({ hotspots: state.hotspots });
const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Hotspots);