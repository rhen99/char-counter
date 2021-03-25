import './Counter.css'
function Counter({count}) {
    return (
        <section className="Counter">
            <div className="container Container">
                <p className="CounterText"><span className="Count">{count}</span> characters</p>
            </div>
        </section>
    )
}

export default Counter
