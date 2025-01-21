import {useEffect, useState} from "react";
import win from "@/utils/window";

function useWindowSize() {

    const [windowSize, setWindowSize] = useState<{ width: number, height: number }>({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        // only execute all the code below in client side
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                width: win.innerWidth,
                height: win.innerHeight,
            });
        }

        // Add event listener
        win.addEventListener("resize", handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}

export default useWindowSize