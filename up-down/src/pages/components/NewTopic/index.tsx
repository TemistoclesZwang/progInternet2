import { useState } from "react"


interface NewTopicProps {
    onAddTopic: (newTopic: Topic) => void;
}

export interface Topic {
    id: string
    // autor: string
    // description?: string
    // active: boolean
    // created_at: Date
    // tags:string
}

export function NewTopic({ onAddTopic }: NewTopicProps) {
    const [taskName, setTopicName] = useState('')

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTopicName(e.target.value)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (taskName.trim() !== '') {
            const newTopic: Topic = {
                id: Math.random().toString(),
                // autor: string
                // description?: string
                // active: boolean
                // created_at: Date
                // tags:string
            };

            onAddTopic(newTopic);
            setTopicName('');
        }
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={taskName}
                    onChange={handleInputChange}
                    placeholder="Adicionar"
                />
                <input type="submit" value={"Adicionar"} />
            </form>
        </>
    )
}