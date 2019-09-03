import { createStore } from 'redux';

const INITIAL_STATE = {
    activeHotspots: [],
    hotspots: [
        {
            id: "hotspot1",
            x: 0,
            y: 0,
            title: "Link fake 1",
            description: "Cool Hotspot 1"
        },
        {
            id: "hotspot2",
            x: 0,
            y: 0,
            title: "Link fake 2",
            description: "Cool Hotspot 2"
        },
        {
            id: "hotspot3",
            x: 0,
            y: 0,
            title: "Link fake 3",
            description: "Cool Hotspot 3"
        },
        {
            id: "hotspot4",
            x: 0,
            y: 0,
            title: "Link fake 4",
            description: "Cool Hotspot 4"
        }
    ],
    markingStatus: false
};

function reducer(state = INITIAL_STATE, action) {
    if (action.type === "TOGGLE_HOTSPOT_MARKING") {
        return {
            ...state,
            activeHotspots: state.activeHotspots,
            markingStatus: true
        };
    }

    if (action.type === "SET_HOTSPOT_ON") {
        if (!state.activeHotspots.includes(action.hotspot) && state.markingStatus) {
            return {
                ...state,
                activeHotspots: [...state.activeHotspots, action.hotspot],
                markingStatus: false
            };
        }
        else {
            alert('Item já possui um hotspot!');
            return {
                ...state,
                activeHotspots: state.activeHotspots,
                markingStatus: state.markingStatus
            };
        }
        
    }
    else if (action.type === "SET_HOTSPOT_OFF") {
        return {
            ...state,
            activeHotspots: state.activeHotspots.filter(ac => ac !== action.hotspot),
            markingStatus: false
        };
    }
    else if (action.type === "TURN_HOTSPOT_AREA_ON") {
        if (state.markingStatus) {
            document.getElementById(action.hotspot.id).classList.add("hoveredElement");
            document.getElementById(action.hotspot.id).classList.remove("unhoveredElement");
        }
        
        return {
            ...state,
            activeHotspots: state.activeHotspots,
            markingStatus: state.markingStatus
        };
    }
    else if (action.type === "TURN_HOTSPOT_AREA_OFF") {
        document.getElementById(action.hotspot.id).classList.add("unhoveredElement");
        document.getElementById(action.hotspot.id).classList.remove("hoveredElement");

        return {
            ...state,
            activeHotspots: state.activeHotspots,
            markingStatus: state.markingStatus
        };
    }
    return state;
}

const store = createStore(reducer);

export default store;