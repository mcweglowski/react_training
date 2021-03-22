const PositiveMessage = () => <p>You can watch the movie</p>
const NegativeMessage = () => <p>You can not watch the movie</p>

class CheckboxAgeConfirmation extends React.Component {
    state = {
        isConfirmed: false,
    }

    handleCheckoboxChange = () => {
        this.setState({
            isConfirmed: !this.state.isConfirmed,
        })
    }

    render() {
        return (
            <React.Fragment>
                <h1>Buy a horror ticket!</h1>
                <input type="checkbox" id="age" onChange={this.handleCheckoboxChange} checked={this.state.isConfirmed}/>
                <label htmlFor="age">I am at least 16 years old</label>
                {this.state.isConfirmed ? <PositiveMessage/> : <NegativeMessage/>}
            </React.Fragment>
        )
    }
}






const header = <h1 className="title">Hello World!!!</h1>

ReactDOM.render(<CheckboxAgeConfirmation/>, document.getElementById('root'))