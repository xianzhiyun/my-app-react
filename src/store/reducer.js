const defaultState = {
    inputValue: 'hello world',
    list: [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',
    ],
    data: []
}
export default (state = defaultState, action) => {
    if (action.type === 'changeInput') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if (action.type === 'addItem') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    if (action.type === 'deleteItem') {
        let newState = JSON.parse(JSON.stringify(state))
        console.log(action.index)
        newState.list.splice(action.index, 1)
        return newState
    }
    if (action.type === 'getList') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.data = action.data
        console.log(action.data)
        return newState
    }
    return state
}
