class Counter extends React.Component {
    state = {
        count: 0,
        result: this.props.result,
    }

    handleMathClick(type, number = 1) {
        if (type === "reset") {
            this.setState(prevState => ({
                count: prevState.count + 1,
                result: 0,
            }))
        } else {
            this.setState(prevState => ({
                count: prevState.count + 1,
                result: prevState.result + number
            }))
        }        
    }

    render () {
        return (
            <React.Fragment>
                <button onClick={this.handleMathClick.bind(this, "substraction", -10)}>-10</button>
                <button onClick={this.handleMathClick.bind(this, "substraction", -1)}>-</button>
                <button onClick={() => this.handleMathClick("reset", 0)}>Reset</button>
                <button onClick={() => this.handleMathClick("substraction", 1)}>+</button>
                <button onClick={() => this.handleMathClick("substraction", 10)}>+10</button>
                <h1>Clicks: {this.state.count}</h1>
                <h1>Result: {this.state.result}</h1>
            </React.Fragment>
        )
    }
}







const startValue = 0
ReactDOM.render(<Counter result={startValue}/>, document.getElementById('root'))