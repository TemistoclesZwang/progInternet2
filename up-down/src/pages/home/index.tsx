import React, { useEffect, useReducer } from 'react';
import './index.css';
import { NewTopic, Topic } from '../../components/NewTopic';
import { TopicListWithReducer } from '../../components/TopicList';
import { ActionType, TopicReducer } from '../../reducers/TopicListReducer';
import { fetchTopics, addTopic } from '../../services/api';


export function IndexPage() {
    const [{ topics }, dispatch] = useReducer(TopicReducer, { topics: [] })

    useEffect(() => {
        fetchTopics()
            .then(data => {
                dispatch({ type: ActionType.LOADED, payload: { topic: data } })
            })
            .catch(error => {
                console.error('Erro ao carregar tópicos:', error);
            });
    }, [])

    const handleAddTopic = async (newTopic: Topic) => {
        try {
            await addTopic(newTopic);
            dispatch({ type: ActionType.ADDED_TOPIC, payload: { topic: newTopic } });
            window.location.reload();
        } catch (error) {
            console.error('Erro ao adicionar tópico:', error);
        }
    }

    return (
        <main className='container'>
            <h1>Lista de Tópicos</h1>
            <NewTopic onAddTopic={handleAddTopic} />
            <TopicListWithReducer />
        </main>
    );
}

