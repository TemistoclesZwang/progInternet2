import { useReducer, useEffect } from 'react';
import { ButtonUpDown } from '../ButtonUpDown';
import { TotalVotes } from '../TotalVotes';
import { reducerFunction, TopicState, ActionType } from '../../reducers/UpDownReducer';
// import { DispatchContext, StateContext } from '../../context/TopicListContext';
import { TopicListProvider, useTopicListDispatch,useTopicListState } from '../../context/TopicListProvider';
import './index.css';

export function TopicListWithReducer() {
    const initialState: TopicState = {
        topics: [],
        votes: {},
    }

    const [estados, dispatch] = useReducer(reducerFunction, initialState);

    useEffect(() => {
        fetch('http://localhost:3000/topics')
            .then((response) => response.json())
            .then((data) => {
                dispatch({
                    type: ActionType.LOADED, payload: {
                        topics: data.reverse() || []
                    }
                });
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
        <TopicListProvider>

                <div className="cardTopicList">
                    {estados.topics && estados.topics.map((topic) => (
                        <div key={topic.id} className="card">
                            <div className="containerTxt">
                                <p className="descriptionTxt">
                                    Descrição:<span className="boldTxt">{
                                        topic.description}
                                    </span>
                                </p>
                                <p className="autorTxt">Autor:{
                                    topic.autor.nome}
                                </p>
                                <p className="dataTxt">Data:{new Date(
                                    topic.created_at).toLocaleString()}
                                </p>
                            </div>
                            <ButtonUpDown
                                onUpClick={() => handleUpVote(topic.id)}
                                onDownClick={() => handleDownVote(topic.id)}
                            />
                            {estados.votes[topic.id] && (
                                <TotalVotes totalUp={estados.votes[topic.id].up} totalDown={estados.votes[topic.id].down} />
                            )}
                        </div>
                    ))}
                </div>
        </TopicListProvider>
    );
}
