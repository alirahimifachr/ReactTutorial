import { useState, useEffect } from "react";

const TestUseEffect = () => {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);
    const [calculationDepend, setCalculationDepend] = useState(0);

    useEffect(() => {
        setCalculation(() => count * 2);
    }, []); // Runs only on the first render

    useEffect(() => {
        setCalculationDepend(() => count * 2);
    }, [count]);  // Runs if count has been changed

    return (
        <>
            <p>Count: {count}</p>
            <button onClick={() => setCount((c) => c + 1)}>+</button>
            <p>Calculation, rendered just once: {calculation}</p>
            <p>Calculation depend on count, if count changed, it will be renderd: {calculationDepend}</p>
        </>
    );
};

export default TestUseEffect;