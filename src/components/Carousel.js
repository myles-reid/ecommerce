import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAPI } from './Context';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../css/carousel.css';
const MAX_PRODS = 5;

export default function Carousel() {
    const data = useAPI().data;
    const mostPopularProds = [...data]
        .sort((a, b) => b.rating.rate - a.rating.rate)
        .slice(0, MAX_PRODS);
    const [positionIndexes, setPositionIndexes] = useState(Array.from({ length: MAX_PRODS }, (_, i) => i));
    const handleNext = () => {
        setPositionIndexes(prev => {
            const [first, ...rest] = prev;
            return [...rest, first];
        });        
    }

    const handlePrev = () => {
        setPositionIndexes((prev) => {
        const last = prev[prev.length - 1];
        const rest = prev.slice(0, -1);
        return [last, ...rest];
        });
    };
        
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
            <button className="carousel-arrow left" onClick={handlePrev}>
                <FaChevronLeft />
            </button>
                    
            {images.length === positionIndexes.length &&
                images.map((image, index) => (
                    <Link
                        key={index}
                        className="carousel-image-link"
                        to={`/product/${mostPopularProds[index].id}`}
                    >
                        <motion.img
                            src={image}
                            alt={`product-${index}`}
                            className="carousel-image"
                            initial="center"
                            animate={positions[positionIndexes[index]]}
                            variants={imageVariants}
                            transition={{ duration: 0.5 }}
                            />
                    </Link>
            ))}

            <button className="carousel-arrow right" onClick={handleNext}>
                <FaChevronRight />
            </button>        
        </div>
    );
}
