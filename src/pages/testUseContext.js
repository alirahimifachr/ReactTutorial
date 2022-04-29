import { useState, createContext, useContext } from "react";

const UserContext = createContext();

function Component2() {
    const user = useContext(UserContext);

    return (
        <>
            <h1>Component 2</h1>
            <h2>{`Hello ${user} again!`}</h2>
        </>
    );
}

function TestUseContext() {
    const [user, setUser] = useState("Leo");

    return (
        <div>
            <UserContext.Provider value={user}>
                <h1>{`Hello ${user}!`}</h1>
                <Component2 user={user} />
            </UserContext.Provider>
            <p>user: {user}</p>
            <button onClick={() => setUser((c) => c + 1)}>+</button>
        </div>

    );
}

export default TestUseContext;