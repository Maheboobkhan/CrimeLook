// import React, { useState } from 'react';
// import '../ModelToShowImage/Model.css';

// const Modal = ({ image, closeModal }) => {
//     const [zoomLevel, setZoomLevel] = useState(1);

//     const handleZoomIn = () => {
//         setZoomLevel(prevZoom => Math.min(prevZoom + 0.1, 2)); // Limit zoom to 2x
//     };

//     const handleZoomOut = () => {
//         setZoomLevel(prevZoom => Math.max(prevZoom - 0.1, 1)); // Limit zoom to 1x
//     };

//     return (
//         <div className="modal-overlay" onClick={closeModal}>
//             <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//                 <span className="close-btn" onClick={closeModal}>×</span>
//                 <img 
//                     src={image} 
//                     alt="enlarged" 
//                     className="modal-image" 
//                     style={{ transform: `scale(${zoomLevel})` }}
//                 />
//                 <div className="zoom-controls">
//                     <button onClick={handleZoomIn}>Zoom In</button>
//                     <button onClick={handleZoomOut}>Zoom Out</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Modal;




import React, { useEffect, useState } from 'react';
import '../ModelToShowImage/Model.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Modal = ({ image, closeModal }) => {
    useEffect(()=>{
        AOS.init({duration:1000, once:true})
    },[])
    const [zoomLevel, setZoomLevel] = useState(1);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [startY, setStartY] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [scrollTop, setScrollTop] = useState(0);

    const handleZoomIn = () => {
        setZoomLevel(prevZoom => Math.min(prevZoom + 0.1, 3)); // Limit zoom to 2x
    };

    const handleZoomOut = () => {
        setZoomLevel(prevZoom => Math.max(prevZoom - 0.1, 1)); // Limit zoom to 1x
    };

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - e.currentTarget.offsetLeft);
        setStartY(e.pageY - e.currentTarget.offsetTop);
        setScrollLeft(e.currentTarget.scrollLeft);
        setScrollTop(e.currentTarget.scrollTop);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - e.currentTarget.offsetLeft;
        const y = e.pageY - e.currentTarget.offsetTop;
        const walkX = x - startX;
        const walkY = y - startY;
        e.currentTarget.scrollLeft = scrollLeft - walkX;
        e.currentTarget.scrollTop = scrollTop - walkY;
    };

    return (
        <div className="modal-overlay" onClick={closeModal}>
            <div className='model-container' data-aos="zoom-in">
            <div 
                className="modal-content" 
                onClick={(e) => e.stopPropagation()}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
                <span className="close-btn" onClick={closeModal}>×</span>
                <img 
                    src={image} 
                    alt="enlarged" 
                    className="modal-image" 
                    style={{ transform: `scale(${zoomLevel})` }}
                />
                <div className="zoom-controls">
                    <button onClick={handleZoomIn}>Zoom In</button>
                    <button onClick={handleZoomOut}>Zoom Out</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Modal;
