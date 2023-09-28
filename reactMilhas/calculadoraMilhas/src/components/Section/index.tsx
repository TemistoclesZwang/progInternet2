import { ReactNode } from 'react';
import './index.css';

interface SectionProps {
    borderColor?: 'green' | 'gray' | 'none';
    size?: 'normal' | 'big';
    children?: ReactNode;
}

export function Section({ borderColor = 'none', size = 'normal', children }: SectionProps) {
    const borderClass = borderColor === 'green' ? 'greenBorder' : borderColor === 'gray' ? 'grayBorder' : '';
    const sizeClass = size === 'big' ? 'bigSize' : 'normalSize';

    return (
        <div className={`sectionContainer ${borderClass} ${sizeClass}`}>
            {children} {/* Renderizando os children */}
        </div>
    );
}
