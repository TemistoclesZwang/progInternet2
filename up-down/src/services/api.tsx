
import { Topic } from '../components/NewTopic'
import { v1 as uuidv1 } from 'uuid';


export async function fetchTopics() {
    const response = await fetch('http://localhost:3000/topics');
    const data = await response.json();
    return data;
}

export async function addTopic(newTopic:Topic) {
    const topic = {
        ...newTopic,
        id: uuidv1()
    };

    const init = {
        method: 'POST',
        body: JSON.stringify(topic),
        headers: {
            "Content-Type": "application/json"
        }
    }

    const response = await fetch('http://localhost:3000/topics', init);
    if (response.ok) {
        return true;
    } else {
        throw new Error('Erro ao adicionar tópico');
    }
}
