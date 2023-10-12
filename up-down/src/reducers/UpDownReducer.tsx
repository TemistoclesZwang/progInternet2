import { Topic } from "../components/NewTopic";


export interface TopicState {
    topics: Topic[]
    votes: { [id: string]: { up: number; down: number } }
}

export enum ActionType { ADDED_TOPIC, LOADED_TOPICS_API, UP_VOTE, DOWN_VOTE }

type ActionAddedTopic = { type: ActionType.ADDED_TOPIC, payload: { topic: Topic } }
type ActionLoaded = { type: ActionType.LOADED_TOPICS_API, payload: { topics: Topic[] } }
type ActionUpVote = { type: ActionType.UP_VOTE, payload: { id: string } }
type ActionDownVote = { type: ActionType.DOWN_VOTE, payload: { id: string } }

type Action = ActionAddedTopic | ActionLoaded | ActionUpVote | ActionDownVote

export function reducerFunction(state: TopicState, action: Action): TopicState {
    switch (action.type) {
        case ActionType.ADDED_TOPIC: {
            const newTopic = action.payload.topic;
            return {
                ...state,
                topics: [newTopic, ...state.topics],
            };
        }
        case ActionType.LOADED_TOPICS_API: {
            const topics = action.payload.topics || [];
            return {
                ...state,
                topics,
            };
        }
        case ActionType.UP_VOTE: {
            const id = action.payload.id;
            return {
                ...state,
                votes: {
                    ...state.votes,
                    [id]: {
                        up: (state.votes[id]?.up || 0) + 1,
                        down: state.votes[id]?.down || 0,
                    },
                },
            };
        }
        case ActionType.DOWN_VOTE: {
            const id = action.payload.id;
            return {
                ...state,
                votes: {
                    ...state.votes,
                    [id]: {
                        up: state.votes[id]?.up || 0,
                        down: (state.votes[id]?.down || 0) + 1,
                    },
                },
            };
        }
        default: {
            console.warn('Action Inválida');
            return state;
        }
    }
}

