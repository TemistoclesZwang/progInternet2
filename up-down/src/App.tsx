import { useState} from 'react';
import './App.css';
import { NewTopic, Topic } from './pages/components/NewTopic';
import { TopicList } from './pages/components/TaskList';

function App() {
    const [topics, setTopics] = useState<Topic[]>([]);

    const handleAddTask = (newTask: Topic) => {
        setTopics([...topics, newTask]);
    };

    return (
        <main className='container'>
            <h1>Lista de Tópicos</h1>
            <NewTopic onAddTopic={handleAddTask} />
            <TopicList />
        </main>
    );
}

export default App;
