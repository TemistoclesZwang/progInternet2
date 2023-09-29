import { useState } from "react";
import './index.css'
import { v1 as uuidv1 } from 'uuid';


interface NewTopicProps {
    onAddTopic: (newTopic: Topic) => void;
}

interface Autor {
    nome: string;
    cidade: string;
    pais: string;
}

export interface Topic {
    id: string;
    autor: Autor;
    description?: string;
    active: boolean;
    created_at: Date;
    tags: string;
}

export function NewTopic({ onAddTopic }: NewTopicProps) {
    const [autor, setAutor] = useState<Autor>({ nome: '', cidade: '', pais: '' });
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        if (name === 'nome') {
            setAutor(prevAutor => ({ ...prevAutor, nome: value }));
        } else if (name === 'cidade') {
            setAutor(prevAutor => ({ ...prevAutor, cidade: value }));
        } else if (name === 'pais') {
            setAutor(prevAutor => ({ ...prevAutor, pais: value }));
        } else if (name === 'description') {
            setDescription(value);
        } else if (name === 'tags') {
            setTags(value);
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (autor.nome.trim() !== '' && autor.cidade.trim() !== '' && autor.pais.trim() !== '' && description.trim() !== '' && tags.trim() !== '') {
            const newTopic: Topic = {
                id: uuidv1(),
                autor: autor,
                description: description,
                active: true,
                created_at: new Date(),
                tags: tags
            };
            onAddTopic(newTopic);
            setAutor({ nome: '', cidade: '', pais: '' });
            setDescription('');
            setTags('');
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="nome"
                    value={autor.nome}
                    onChange={handleInputChange}
                    placeholder="Nome do Autor"
                />
                <input
                    type="text"
                    name="cidade"
                    value={autor.cidade}
                    onChange={handleInputChange}
                    placeholder="Cidade"
                />
                <input
                    type="text"
                    name="pais"
                    value={autor.pais}
                    onChange={handleInputChange}
                    placeholder="País"
                />
                <input
                    type="text"
                    name="tags"
                    value={tags}
                    onChange={handleInputChange}
                    placeholder="Tags"
                />
                <input className="descricao"
                    type="text"
                    name="description"
                    value={description}
                    onChange={handleInputChange}
                    placeholder="Descrição"
                />
                <input className="adicionar" type="submit" value={"Adicionar"} />
            </form>
        </>
    )
}
