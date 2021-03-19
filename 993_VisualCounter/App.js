class Counter extends React.Component {
    state = {
        count: 0,
        result: this.props.result,
    }

    handleMathClick = (type, number = 1) => {
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
                <MathButton 
                    name="-10" 
                    number="-10"
                    type="" 
                    click={this.handleMathClick}
                />
                <MathButton 
                    name="-1" 
                    number="-1" 
                    type="" 
                    click={this.handleMathClick}
                />
                <MathButton 
                    name="reset" 
                    number="0" 
                    type="reset" 
                    click={this.handleMathClick}
                />
                <MathButton 
                    name="+1" 
                    number="1" 
                    type="" 
                    click={this.handleMathClick}
                />
                <MathButton 
                    name="+10" 
                    number="10" 
                    type="" 
                    click={this.handleMathClick}
                />
                <ResultPanel count={this.state.count} result={this.state.result}/>
            </React.Fragment>
        )
    }
}

const MathButton = (props) => {
    const number = parseInt(props.number)
    return (
        <button onClick={() => props.click(props.type, number)}>{props.name}</button> 
    )
}

const ResultPanel = (props) => {
    return (
        <React.Fragment>
            <h1>Clicks: {props.count}{props.count>10 ? <span>. Overload!</span> : null}</h1>
            <h1>Result: {props.result}</h1>
        </React.Fragment>
    )
}



const startValue = 0
ReactDOM.render(<Counter result={startValue}/>, document.getElementById('root'))