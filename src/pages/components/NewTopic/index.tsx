import { useState } from "react"
import './index.css'

interface NewTopicProps {
    onAddTopic: (newTopic: Topic) => void;
} //. essa props é uma função

export interface Topic {
    id: string
    autor: string
    description?: string
    active: boolean
    created_at: Date
    tags: string
}

export function NewTopic({ onAddTopic }: NewTopicProps) {
    const [autor, setAutor] = useState(''); 
    const [description, setDescription] = useState(''); 
    const [tags, setTags] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        if (name === 'autor') {
            setAutor(value);
        } else if (name === 'description') {
            setDescription(value);
        } else if (name === 'tags') {
            setTags(value);
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (autor.trim() !== '' && description.trim() !== '' && tags.trim() !== '') {
            const newTopic: Topic = {
                id: Math.random().toString(),
                autor: autor,
                description: description,
                active: true,
                created_at: new Date(),
                tags: tags
            };

            onAddTopic(newTopic);
            setAutor('');
            setDescription('');
            setTags('');
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="autor"
                    value={autor}
                    onChange={handleInputChange}
                    placeholder="Autor"
                />
                <input
                    type="text"
                    name="description"
                    value={description}
                    onChange={handleInputChange}
                    placeholder="Descrição"
                />
                <input
                    type="text"
                    name="tags"
                    value={tags}
                    onChange={handleInputChange}
                    placeholder="Tags"
                />
                <input className="adicionar" type="submit" value={"Adicionar"} />
            </form>
        </>
    )
}
