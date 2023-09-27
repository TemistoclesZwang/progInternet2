import { useState } from 'react';
import { Topic } from '../NewTopic';
import { ButtonUpDown } from '../ButtonUpDown';
import { TotalVotes } from '../TotalVotes';
import './index.css'

interface TopicListProps {
    topics: Topic[];
}

export function TopicList({ topics }: TopicListProps) {
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



    return (
        <>
            <div className="cardTopicList">
                {topics.map((topic) => (
                    <div key={topic.id} className="card">
                        <div className='containerTxt'>
                        <p className='descriptionTxt'>Descrição:{topic.description}</p>
                        <p className='autorTxt'>Autor:{topic.autor}</p>
                        </div>
                        <ButtonUpDown
                            onUpClick={() => handleUpVote(topic.id)}
                            onDownClick={() => handleDownVote(topic.id)}
                        />
                        {votes[topic.id] && (
                            <TotalVotes
                                totalUp={votes[topic.id].up}
                                totalDown={votes[topic.id].down}
                            />
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}
