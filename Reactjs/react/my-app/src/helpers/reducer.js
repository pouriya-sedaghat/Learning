export function counterReducer(state, action) {
    switch (action.type) {
        case 'MINUS': {
            return { counter: state.counter-- }
        }
        case 'PLUSE': {
            return { counter: state.counter++ }
        }
        case 'CONCAT': {
            return { counter: state.counter + ' ' + action.payload }
        }
        default: {
            throw Error('Invalid Action.')
        }
    }
}