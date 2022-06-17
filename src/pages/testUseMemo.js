import { useState, useMemo } from "react";

const TestUseMemo = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    const calculation = useMemo(() => expensiveCalculation(count), [count]);

    const increment = () => {
        setCount((c) => c + 1);
    };
    const addTodo = () => {
        setTodos((t) => [...t, "New Todo"]);
    };

    return (
        <div>
            <div>
                <h2>My Todos</h2>
                <div> create todo works with useState: useState will returned two values, the first one is the value or name of value </div>
                <div> the second one is a function to update the value, or setter </div>
                <br></br>
                {todos.map((todo, index) => {
                    return <p key={index}>{todo}</p>;
                })}
                <button onClick={addTodo}>Add Todo</button>
            </div>
            <hr />

            <div>Using memo will cause React to skip rendering a component if its props have not changed. React useMemo Hook returns a memoized value. The useMemo Hook only runs when one of its dependencies update</div>
            <br></br>

            <div>
                Count: {count}
                <button onClick={increment}>+</button>
                <h2>Expensive Calculation</h2>
                {calculation}
            </div>
            <br></br>
            <br></br>

            <div>
                difference between useCallback and UseMemo: In other words, useCallback gives you referential equality between renders for functions. And useMemo gives you referential equality between renders for values.
                useCallback and useMemo both expect a function and an array of dependencies. The difference is that useCallback returns its function when the dependencies change while useMemo calls its function and returns the result.
            </div>
        </div>
    );
};

const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
        num += 1;
    }
    return num;
};

export default TestUseMemo;


// if do not use memo, every time by create todo, the calculation will run and it uses many resources

// const [count, setCount] = useState(0);
// const [todos, setTodos] = useState([]);
// const calculation = expensiveCalculation(count);

// const increment = () => {
//   setCount((c) => c + 1);
// };
// const addTodo = () => {
//   setTodos((t) => [...t, "New Todo"]);
// };

// return (
//   <div>
//     <div>
//       <h2>My Todos</h2>
//       {todos.map((todo, index) => {
//         return <p key={index}>{todo}</p>;
//       })}
//       <button onClick={addTodo}>Add Todo</button>
//     </div>
//     <hr />
//     <div>
//       Count: {count}
//       <button onClick={increment}>+</button>
//       <h2>Expensive Calculation</h2>
//       {calculation}
//     </div>
//   </div>
// );
// };

// const expensiveCalculation = (num) => {
// console.log("Calculating...");
// for (let i = 0; i < 1000000000; i++) {
//   num += 1;
// }
// return num;