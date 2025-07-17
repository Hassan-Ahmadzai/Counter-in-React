import React, { useState } from "react";
import { log } from "./log";
import Header from "./components/Header";
import Counter from "./components/Counter/Counter";
import ConfigureCounter from "./components/Counter/ConfigureCounter";


function App() {
    log("<App /> rendered");

    const [chosenCount, setChosenCount] = useState(0);

    function handleSetCount(newCount) {
        setChosenCount(newCount);
    };

    return (
        <>
            <Header />
            <main>
                <ConfigureCounter onSet={handleSetCount} />
                <Counter initialCount={chosenCount} />
            </main>
        </>
    );
};

export default App;