import { useState } from "react";

import { log } from "../../log";

function HistoryItem({ count }) {
    log('<HistoryItem /> rendered', 3);

    const [selected, setSelected] = useState(false);

    function handleClick() {
        setSelected((prevSelected) => !prevSelected);
    };

    return (
        <li 
            className={selected ? 'selected' : undefined}
            onClick={handleClick}
        >
            {count}
        </li>
    );
};

export default function CounterHistory({ history }) {
    log('<CounterHistory /> rendered', 2);

    return (
        <ol>
            {history.map((count, index) => (
                <HistoryItem 
                    key={index}
                    count={count}
                />
            ))}
        </ol>
    );
};