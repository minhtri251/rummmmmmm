let defaultState = {
    notes: [
        {id: 0, title: "Đá Bóng", detail: "tiền đạo", recorded: " Tue Nov 17 2020 "},
        {id: 1, title: "Chơi game", detail: "liên minh", recorded: " Tue Nov 17 2020"},
        {id: 2, title: "Học", detail: "reactjs", recorded: " Tue Nov 17 2020"}
    ],
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case "GET_NOTE":
            return {...state}
        case "ADD_NOTE": 
            return {...state, notes: [...state.notes, action.note]}
        case "REMOVE_NOTE":
            return {...state, notes: [...state.notes.filter(x => x.id !== action.id)]}
        default:
            return state
    }
}
