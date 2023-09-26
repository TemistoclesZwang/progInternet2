import React from 'react';
import { Topic } from '../NewTopic';

interface TopicListProps {
    topics: Topic[]; // Agora a TopicList recebe uma lista de topics
}

export function TopicList({ topics }: TopicListProps) {
    return (
        <>
            <div className="cardList">
                {topics.map((topic) => (
                    <div key={topic.id} className="card">
                        {topic.id}
                    </div>
                ))}
            </div>
        </>
    );
}
