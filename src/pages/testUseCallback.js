import { useState, useCallback } from "react";

const Todos = ({ todos, addTodo }) => {
    console.log("child render");
    return (
        <>
            <div>This allows us to isolate resource intensive functions so that they will not automatically run on every render. The useCallback Hook only runs when one of its dependencies update.</div>
            <br></br>

            <h3>Todo:</h3>
            {todos.map((todo, index) => {
                return <p key={index}>{todo}</p>;
            })}
            <button onClick={addTodo}>Add Todo</button>
        </>
    );
};

const TestUseCallback = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const increment = () => {
        setCount((c) => c + 1);
    };
    const addTodo = useCallback(() => {
        setTodos((t) => [...t, "New Todo"]);
    }, [todos]);

    return (
        <>
            <Todos todos={todos} addTodo={addTodo} />
            <hr />
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
            </div>
            <br></br>
            <br></br>

            <div>
                difference between useCallback and UseMemo: In other words, useCallback gives you referential equality between renders for functions. And useMemo gives you referential equality between renders for values.
                useCallback and useMemo both expect a function and an array of dependencies. The difference is that useCallback returns its function when the dependencies change while useMemo calls its function and returns the result.
            </div>
        </>
    );
};

export default TestUseCallback;