/* eslint-disable react/prop-types */
// import { motion } from 'framer-motion';

const Image = ({ imageSrc }) => {
    return (
        <>
            <div className="relative flex h-48 w-48 group">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-0 group-hover:opacity-75"></span>
    <img src={imageSrc} alt="My Image" className="relative inline-flex h-48 w-48 rounded-full object-cover bg-sky-500" />
</div>


            {/* <div className="relative flex items-center justify-center">
                
                <div 
                    className="absolute w-64 h-64 rounded-full 
                        bg-gradient-to-r 
                        from-slate-500 
                        via-slate-800
                        to-slate-900 animate-spin-slow-ease p-1">
                    
                    <div className="absolute w-full h-full rounded-full border-4 border-opacity-50 border-gray-300 blur-lg" />
                </div>

                
                <img
                    src={imageSrc}
                    alt="Profile"
                    className="relative w-60 h-60 rounded-full object-cover shadow-lg "
                />
            </div> */}
        
        
            {/* <div className="relative inline-block"> 
            <motion.div
                className="absolute inset-0 rounded-full border-8 border-transparent shadow-lg"
                style={{
                    boxShadow: 'inset 0 0 0 8px rgba(255, 255, 255, 0.3)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
            />
            
            <motion.img
                src={imageSrc}
                alt="Profile"
                className="relative w-64 h-64 object-cover rounded-bl-3xl"
                style={{
                    backgroundPosition: '50%',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    animation: 'profile_animate 8s ease-in-out 1s infinite',
                }}
            />
            <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
            </svg> */}

            {/* <div className="relative flex items-center justify-center">
                <div className="absolute rounded-full border-4 border-dashed border-blue-500 animate-spin w-64 h-64" />
                <img
                    src={imageSrc}
                    alt="Profile"
                    className="relative w-60 h-60 rounded-full object-cover"
                />
            </div> */}


            {/* <div className="relative w-64 h-64 flex items-center justify-center">
                <div
                    className="absolute inset-0 w-full h-full rounded-full animate-gradientShift"
                    style={{
                    background: 'linear-gradient(120deg, #ff6b6b, #f0abfc, #4fd1c5)',
                    backgroundSize: '200% 200%',
                    animation: 'gradientShift 6s ease-in-out infinite',
                    maskImage: 'radial-gradient(circle, transparent 70%, black 72%)',
                    WebkitMaskImage: 'radial-gradient(circle, transparent 70%, black 72%)',
                    }}
                />
                <img
                    src={imageSrc}
                    alt="Profile"
                    className="w-60 h-60 rounded-full object-cover border-4 border-transparent"
                />
            </div> 
        </div>
        */}
        
        </>
        

    );
};

export default Image;
