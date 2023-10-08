import { Topic } from '../NewTopic';
// import { ButtonUpDown } from '../ButtonUpDown';
// import { TotalVotes } from '../TotalVotes';
// import './index.css';
// import { useState, useEffect } from 'react';
import React, { useReducer, useEffect } from 'react';
import { ButtonUpDown } from '../ButtonUpDown';
import { TotalVotes } from '../TotalVotes';
import './index.css';

export function TopicListWithReducer() {
    interface TopicState {
        topics: Topic[]
        votes: { [id: string]: { up: number; down: number } }
    }

    enum ActionType { ADDED_TOPIC, LOADED, UP_VOTE, DOWN_VOTE }

    type ActionAddedTopic = { type: ActionType.ADDED_TOPIC, payload: { topic: Topic } }
    type ActionLoaded = { type: ActionType.LOADED, payload: { topics: Topic[] } }
    type ActionUpVote = { type: ActionType.UP_VOTE, payload: { id: string } }
    type ActionDownVote = { type: ActionType.DOWN_VOTE, payload: { id: string } }

    type Action = ActionAddedTopic | ActionLoaded | ActionUpVote | ActionDownVote

    function reducer(state: TopicState, action: Action): TopicState {
        switch (action.type) {
            case ActionType.ADDED_TOPIC: {
                const newTopic = action.payload.topic;
                return {
                    ...state,
                    topics: [newTopic, ...state.topics],
                };
            }
            case ActionType.LOADED: {
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

    const initialState: TopicState = {
        topics: [],
        votes: {},
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        fetch('http://localhost:3000/topics')
            .then((response) => response.json())
            .then((data) => {
                dispatch({ type: ActionType.LOADED, payload: { topics: data.reverse() || [] } });
            })
            .catch((error) => {
                console.error('Erro ao obter os tópicos:', error);
            });
    }, []);

    const handleUpVote = (id: string) => {
        dispatch({ type: ActionType.UP_VOTE, payload: { id } });
    };

    const handleDownVote = (id: string) => {
        dispatch({ type: ActionType.DOWN_VOTE, payload: { id } });
    };

    return (
        <>
            <div className="cardTopicList">
                {state.topics && state.topics.map((topic: Topic) => (
                    <div key={topic.id} className="card">
                        <div className="containerTxt">
                            <p className="descriptionTxt">
                                Descrição:<span className="boldTxt">{topic.description}</span>
                            </p>
                            <p className="autorTxt">Autor:{topic.autor.nome}</p>
                            <p className="dataTxt">Data:{new Date(topic.created_at).toLocaleString()}</p>
                        </div>
                        <ButtonUpDown
                            onUpClick={() => handleUpVote(topic.id)}
                            onDownClick={() => handleDownVote(topic.id)}
                        />
                        {state.votes[topic.id] && (
                            <TotalVotes totalUp={state.votes[topic.id].up} totalDown={state.votes[topic.id].down} />
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}