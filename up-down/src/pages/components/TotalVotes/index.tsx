import './index.css'
import { useState } from 'react';

interface TotalVotesProps {
    totalUp: number;
    totalDown: number;
}

export function TotalVotes({ totalUp, totalDown }: TotalVotesProps) {
    const totalVotes = totalUp + totalDown;
    const upPercentage = (totalUp / totalVotes) * 100;
    const downPercentage = (totalDown / totalVotes) * 100;
    const [showVotes, setShowVotes] = useState(false);

    const handleShowVotes = () => {
        setShowVotes(true);
    };

    return (
        <div>
            <button className="mostrarVotos" onClick={handleShowVotes}>Mostrar Votos</button>
            {showVotes && (
                <>
                    <p>Upvotes: {totalUp} Downvotes: {totalDown} Total: {totalVotes}</p>
                    <div className="progressBar">
                        <div className="upBar" style={{ width: `${upPercentage}%` }}>
                            {totalUp}
                        </div>
                        <div className="downBar" style={{ width: `${downPercentage}%` }}>
                            {totalDown}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

