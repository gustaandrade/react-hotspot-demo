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

export function turnHotspotAreaOn(hotspot) {
    return {
        type: 'TURN_HOTSPOT_AREA_ON',
        hotspot
    };
}

export function turnHotspotAreaOff(hotspot) {
    return {
        type: 'TURN_HOTSPOT_AREA_OFF',
        hotspot
    };
}

export function toggleHotspotMarking() {
    return {
        type: 'TOGGLE_HOTSPOT_MARKING'
    };
}