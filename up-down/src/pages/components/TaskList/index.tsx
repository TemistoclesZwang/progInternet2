import { Topic } from '../NewTopic';
import { ButtonUpDown } from '../ButtonUpDown';
import { TotalVotes } from '../TotalVotes';
import './index.css'
import { useState, useEffect } from 'react';


export function TopicList() {
    const [topics, setTopics] = useState<Topic[]>([]);
    const [votes, setVotes] = useState<{ [id: string]: { up: number; down: number } }>({});

    const handleUpVote = (id: string) => {
        setVotes((prevVotes) => ({
            ...prevVotes,
            [id]: {
                up: (prevVotes[id]?.up || 0) + 1,
                down: prevVotes[id]?.down || 0,
            },
        }));
    };

    const handleDownVote = (id: string) => {
        setVotes((prevVotes) => ({
            ...prevVotes,
            [id]: {
                up: prevVotes[id]?.up || 0,
                down: (prevVotes[id]?.down || 0) + 1,
            },
        }));
    };

    useEffect(() => {
        fetch('http://localhost:3000/topics')
            .then((response) => response.json())
            .then((data) => {
                setTopics(data|| []);
            })
            .catch((error) => {
                console.error('Erro ao obter os tópicos:', error);
            });
    }, []); 
    return (
        <>
            <div className="cardTopicList">
                {topics && topics.map((topic) => ( 
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
                        {votes[topic.id] && (
                            <TotalVotes totalUp={votes[topic.id].up} totalDown={votes[topic.id].down} />
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}