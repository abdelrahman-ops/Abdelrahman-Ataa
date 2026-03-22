import { useState, useEffect } from "react";

/**
 * Custom hook to detect if window width is above a given breakpoint.
 * @param {number} breakpoint - Width threshold in pixels (default: 768)
 * @returns {boolean} true if window width >= breakpoint
 */
const useMediaQuery = (breakpoint = 768) => {
    const [matches, setMatches] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setMatches(window.innerWidth >= breakpoint);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [breakpoint]);

    return matches;
};

export default useMediaQuery;
