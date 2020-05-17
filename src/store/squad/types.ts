export interface Member {
    memberId: string
    memberName: string
}

export interface Squad {
    id: string
    name: string
    members: Member[]
}

export interface Squads {
    squads: Squad[] 
}

export const ADD_SQUAD = 'ADD_SQUAD'
export const DELETE_SQUAD = 'DELETE_SQUAD'
export const ADD_SQUAD_MEMBER = 'ADD_NEW_SQUAD_MEMBER'
export const DELETE_SQUAD_MEMBER = 'DELETE_SQUAD_MEMBER'

export interface AddSquadAction {
    type: typeof ADD_SQUAD
    payload: Squad
}

export interface DeleteSquadAction {
    type: typeof DELETE_SQUAD
    meta: {
        id: string
    }
}

export type SquadActionTypes = AddSquadAction | DeleteSquadAction;