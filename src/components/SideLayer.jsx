// src/components/ZigzagLayer.jsx


const SideLayer = () => {
    return (
        <div>
        <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
        >
            <path
            d="M 0 100 L 10 80 L 20 100 L 30 80 L 40 100 L 50 80 L 60 100 L 70 80 L 80 100 L 90 80 L 100 100 V 0 H 0 Z"
            fill="rgba(255, 0, 0, 0.5)"
            />
        </svg>
        <div className="absolute inset-0 bg-transparent"></div>
        </div>
    );
};

export default SideLayer;
