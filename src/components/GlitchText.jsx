/**
 * Simple text component with subtle emphasis.
 * No glitch, no clip-path animations — just clean styling.
 */
const GlitchText = ({ text, className = '' }) => {
    return (
        <span className={`relative inline-block text-gray-900 dark:text-white ${className}`}>
            {text}
        </span>
    );
};

export default GlitchText;
