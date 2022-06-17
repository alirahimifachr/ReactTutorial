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
            <div>The useEffect Hook allows you to perform side effects in your components.</div>
            <div>there is three way to handle with it, </div>
            <code>, []); // Runs only on the first render</code>
            <br></br>
            <code>, [count]);  // Runs if count has been changed</code>
            <br></br>
            <code> without an array , runs on every render</code>
            <br></br>
            <p>Count: {count}</p>
            <button onClick={() => setCount((c) => c + 1)}>+</button>
            <p>Calculation, rendered just once: {calculation}</p>
            <p>Calculation depend on count, if count changed, it will be renderd: {calculationDepend}</p>
        </>
    );
};

export default TestUseEffect;