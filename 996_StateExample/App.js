class App extends React.Component {

    state = {
        text: ""
    }

    handleClick = () => {
        const number = Math.floor(Math.random() * 10);
        this.setState({
            text: this.state.text + number
        })
    }

    render() {
        return (
            <React.Fragment>
                <button onClick = {this.handleClick}>{this.props.btnTitle}</button>
                <PanelResult text={this.state.text}/>
            </React.Fragment>
        )
    }
}

const PanelResult = (props) => {
    return (
        <React.Fragment>
            <h1>{props.text}</h1>
        </React.Fragment>
    )
}


const header = <h1 className="title">Hello World!!!</h1>

ReactDOM.render(<App btnTitle="Add number"/>, document.getElementById('root'))