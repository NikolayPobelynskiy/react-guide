const React = require("react");

function Counter() {
    const [count, setCount] = React.useState(0);

    return (
        <div>
            <p>Счетчик: {count}</p>
            <button onClick={() => setCount(count + 1)}>Увеличить</button>
        </div>
    );
}

module.exports = Counter;