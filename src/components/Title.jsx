const Title = ({ text1, text2 }) => {
    return (
      <div className="mb-8 relative overflow-hidden">
        {/* Main title with gradient effect */}
        <h2 className="text-3xl md:text-4xl font-bold tracking-normal">
          <span className="text-gray-700">{text1}</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            {text2}
          </span>
        </h2>
  
        {/* Futuristic underline effect */}
        <div className="relative mt-4">
          <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
          <div className="absolute -bottom-1 right-0 w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
        </div>
  
        {/* Floating particles */}
        {[...Array(3)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-blue-400/40"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              top: `${Math.random() * 30 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
              animation: `float ${Math.random() * 6 + 4}s infinite ease-in-out`
            }}
          />
        ))}
      </div>
    );
  };
  
  export default Title;