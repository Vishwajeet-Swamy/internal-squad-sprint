import { Squad, SquadActionTypes, ADD_SQUAD, DELETE_SQUAD } from './types'

export function addSquad(newSquad: Squad) : SquadActionTypes {
    return {
        type : ADD_SQUAD,
        payload: newSquad
    }
}

export function deleteSquad(id: string) : SquadActionTypes {
    return {
        type : DELETE_SQUAD,
        meta: {
            id: id
        }
    }
}