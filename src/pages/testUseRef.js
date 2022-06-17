import { useState, useEffect, useRef } from "react";

function TestUseRef() {
    const [inputValue, setInputValue] = useState("");
    const previousInputValue = useRef("");

    useEffect(() => {
        previousInputValue.current = inputValue;
    }, [inputValue]);

    return (
        <>
            <div> A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.</div>
            <br></br>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <h2>Current Value: {inputValue}</h2>
            <h2>Previous Value: {previousInputValue.current}</h2>
        </>
    );
}

export default TestUseRef;