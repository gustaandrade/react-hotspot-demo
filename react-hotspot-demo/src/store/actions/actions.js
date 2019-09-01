export function setHotspotOn(hotspot) {
    return {
        type: 'SET_HOTSPOT_ON',
        hotspot
    };
}

export function setHotspotOff(hotspot) {
    return {
        type: 'SET_HOTSPOT_OFF',
        hotspot
    };
}
