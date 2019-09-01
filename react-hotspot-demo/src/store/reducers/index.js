import { createStore } from 'redux';

const INITIAL_STATE = {
    activeHotspots: [
        {
            x: 100,
            y: 100,
            title: "Hotspot 1",
            description: "Cool Hotspot 1"
        },
        {
            x: 200,
            y: 200,
            title: "Hotspot 2",
            description: "Cool Hotspot 2"
        }
    ],
    hotspots: [
        {
            x: 100,
            y: 100,
            title: "Hotspot 1",
            description: "Cool Hotspot 1"
        },
        {
            x: 200,
            y: 200,
            title: "Hotspot 2",
            description: "Cool Hotspot 2"
        }
    ]
};

function reducer(state = INITIAL_STATE, action) {
    console.log(state);

    if (action.type === "SET_HOTSPOT_ON") {
        return {
            ...state,
            activeHotspots: state.activeHotspots.push(action.hotspot)
        };
    }
    else if (action.type === "SET_HOTSPOT_OFF") {
        return {
            ...state,
            activeHotspots: state.activeHotspots.splice(state.activeHotspots.indexOf(action.hotspot), 1)
        };
    }
    return state;
}

const store = createStore(reducer);

export default store;