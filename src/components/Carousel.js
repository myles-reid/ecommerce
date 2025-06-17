import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAPI } from './Context';
import { Link } from 'react-router-dom';
import '../css/carousel.css';

export default function Carousel() {
    const data = useAPI().data;
    const mostPopularProds = [...data]
        .sort((a, b) => b.rating.rate - a.rating.rate)
        .slice(0, 5);
    const [positionIndexes, setPositionIndexes] = useState([]);

    useEffect(() => {
    if (mostPopularProds.length > 0) {
        setPositionIndexes(mostPopularProds.map((_, index) => index));
    }
    }, [data]);

    const handleNext = () => {
        setPositionIndexes(prev => {
            const [first, ...rest] = prev;
            return [...rest, first];
        });        
    }
    const images = mostPopularProds.map(prod => prod.image);
    const positions = [
        'center',
        'left1',
        'left',
        'right',
        'right1'
    ];
    const imageVariants = {
        center: { x: '0%', scale: 1, zIndex: 5 },
        left1: { x: '-50%', scale: 0.7, zIndex: 2 },
        left: { x: '-90%', scale: 0.5, zIndex: 1 },
        right: { x: '90%', scale: 0.5, zIndex: 1 },
        right1: { x: '50%', scale: 0.7, zIndex: 2 },
    }
        
    return (
    <div className="carousel-container">
        {images.map((image, index) => (
        <Link
            key={index}
            className="carousel-image"
            initial="center"
            to={`/product/${mostPopularProds[index].id}`}
            style={{ width: '230px', height: 'auto', objectFit: 'cover', position: 'absolute' }}
        >
            <motion.img
                src={image}
                alt={`product-${index}`}
                className="carousel-image"
                initial="center"
                animate={positions[positionIndexes[index]]}
                variants={imageVariants}
                transition={{ duration: 0.5 }}
                style={{ width: '230px', height: 'auto', objectFit: 'cover', position: 'absolute' }}
                />
        </Link>
        ))}

        <button className="carousel-button" onClick={handleNext}>
        Next
        </button>
    </div>
    );
}
