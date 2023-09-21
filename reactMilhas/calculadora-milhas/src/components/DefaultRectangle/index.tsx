import React from 'react';
import './index.css';

interface DefaultRectangleProps {
    exibirBordas?: boolean;
    children: React.ReactNode;
    heightVariant?: 'default' | 'little'; // Adicionada a propriedade heightVariant
}

export const DefaultRectangle: React.FC<DefaultRectangleProps> = ({ exibirBordas, children, heightVariant }) => {
    const classes = exibirBordas ? 'retangulo com-bordas' : 'retangulo sem-bordas';

    // Adicionada lógica para ajustar a altura com base no heightVariant
    const minHeight = heightVariant === 'little' ? '40px' : '100px';

    const style = {
        minHeight,
    };

    return (
        <div className={classes} style={style}>
            <div className="content-wrapper">
                {children}
            </div>
        </div>
    );
};
