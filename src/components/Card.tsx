import { useState } from 'react';
import ImageWebp from './ImageWebP'

type CardProps = {
    onClick: () => void;
    key: string | null,
    data: {
        name: string
        height: string
        mass: string
        birth_year: string
        homeworld: string
        created: string
        url: string
    }
}

const Card = ({ onClick, data }: CardProps) => {
    const [imageURL] = useState(`https://picsum.photos/id/${Math.floor(Math.random() * 500)}/300/180`)
    
    return (
        <div className="card_wrapper col-12 col-sm-6 col-md-4 col-lg-3 p-3">
            <div className="card">
                {imageURL && <ImageWebp src={imageURL} alt={data?.name} onClick={onClick} title={data?.name} />}
                <div className="card-body">
                    <h5 className="card-title">{data?.name}</h5>
                </div>
            </div>
        </div>
    )
}

export default Card