import { Topic } from "../components/NewTopic"

interface TopicState {
    topics: Topic[]
}

export enum ActionType { ADDED_TOPIC, LOADED }

type ActionAddedTopic = { type: ActionType.ADDED_TOPIC, payload: { topic: Topic } }
type ActionLoaded = { type: ActionType.LOADED, payload: { topic: Topic[] } }

type Action = ActionAddedTopic | ActionLoaded


function reducer(state: TopicState, action: Action): TopicState {

    switch (action.type) {
        case ActionType.ADDED_TOPIC: {
            const newTopic = action.payload.topic
            return { topics: [newTopic, ...state.topics] }
        }
        case ActionType.LOADED: {
            return { topics: [...action.payload.topic] }
        }
        default: {
            console.warn('Action Inválida')
            return state
        }

    }

}

export { reducer as TopicReducer };
