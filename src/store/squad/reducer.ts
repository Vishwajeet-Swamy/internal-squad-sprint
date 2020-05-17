import { Squads, SquadActionTypes, ADD_SQUAD, DELETE_SQUAD } from './types'

const initialState: Squads = {
    squads: []
}

export function squadReducer(state = initialState, action: SquadActionTypes): Squads {
    switch (action.type) {
        case ADD_SQUAD:
            return {
                squads: [...state.squads, action.payload]
            }
        
        case DELETE_SQUAD:
            return {
                squads: state.squads.filter(
                    squad => squad.id !== action.meta.id
                  )
            }
        default:
            return state

    }
}