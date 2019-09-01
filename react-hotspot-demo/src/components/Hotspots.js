import React from 'react';

import './Hotspots.css';

export default function Hotspots() {
    return(
        <div className="hotspots-content">
            <table id="hotspots">
                <tbody>
                    <tr>
                        <th colSpan="2">List of hotspots</th>
                    </tr>
                    <tr>
                        <td>Hotspot #1</td>
                        <td><a href="#">Delete</a></td>
                    </tr>
                    <tr>
                        <td>Hotspot #2</td>
                        <td><a href="#">Delete</a></td>
                    </tr>
                    <tr>
                        <td>Hotspot #3</td>
                        <td><a href="#">Delete</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
