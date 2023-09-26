import React from 'react';
import { Topic } from '../NewTopic';
import { ButtonUpDown } from '../ButtonUpDown';

interface TopicListProps {
    topics: Topic[];
}

export function TopicList({ topics }: TopicListProps) {

    const handleUpVote = (id: string) => {
        alert(`Upvote para o tópico ${id}`);
    };

    const handleDownVote = (id: string) => {
        alert(`Downvote para o tópico ${id}`);
    };

    return (
        <>
            <div className="cardTopicList">
                {topics.map((topic) => (
                    <div key={topic.id} className="card">
                        {topic.id}
                        <ButtonUpDown
                            onUpClick={() => handleUpVote(topic.id)}
                            onDownClick={() => handleDownVote(topic.id)}
                        />
                        <p>contabilizar os votos aqui</p>
                    </div>
                ))}
            </div>
        </>
    );
}
