import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NewTopic } from './pages/components/NewTopic'
import { Topic } from './pages/components/NewTopic'
import { TopicList } from './pages/components/TaskList'


function App() {
    const [topics, setTopics] = useState<Topic[]>([]);

    const handleAddTask = (newTask: Topic) => {
        setTopics([...topics, newTask]);
    };

    return (
        <div>
            <h1>Lista de Tópicos</h1>
            <NewTopic onAddTopic={handleAddTask} />
            <TopicList topics={topics} />
        </div>
    );
}


export default App
