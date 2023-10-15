import { useContext, useState } from 'react';
import { getImageUrl } from './GetImageUrl.tsx';
import { MyContextSize } from './MyContextSize.tsx';
import { places } from './Places';

interface Place {
    id: number;
    name: string;
    description: string;
}

export function PageImgSize() {
    const [isLarge, setIsLarge] = useState(false);
    const imageSize = isLarge ? 150 : 100;
    return (
        <MyContextSize.Provider
            value={imageSize}
        >
            <label>
                <input
                    type="checkbox"
                    checked={isLarge}
                    onChange={e => {
                        setIsLarge(e.target.checked);
                    }}
                />
                Use large images
            </label>
            <hr />
            <List />
        </MyContextSize.Provider>
    )
}

function List() {
    const listItems = places.map(place =>
        <li key={place.id}>
            <Place place={place} />
        </li>
    );
    return <ul>{listItems}</ul>;
}

function Place({ place }: { place: Place }) {
    return (
        <>
            <PlaceImage place={place} />
            <p>
                <b>{place.name}</b>
                {': ' + place.description}
            </p>
        </>
    );
}

function PlaceImage({ place }: { place: Place }) {
    const imageSize = useContext(MyContextSize);
    return (
        <img
            src={getImageUrl(place)}
            alt={place.name}
            width={imageSize}
            height={imageSize}
        />
    );
}
