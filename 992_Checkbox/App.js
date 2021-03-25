const ValidationMessage = (props) => <p>{props.txt}</p>


const OrderForm = (props) => {
    const {submit, checked, change} = props;

    return (
        <form onSubmit={submit}>
            <input type="checkbox" id="age" onChange={change} checked={checked}/>
            <label htmlFor="age">I am at least 16 years old</label>
            <br/>
            <button type="submit">Buy!</button>
        </form>
    )
}

class TicketShop extends React.Component {
    state = {
        isConfirmed: false,
        isFormSubmitted: false,
    }

    handleCheckoboxChange = () => {
        this.setState({
            isConfirmed: !this.state.isConfirmed,
            isFormSubmitted: false,
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault();

        if (!this.state.isFormSubmitted) {
            this.setState({
                isFormSubmitted: true,
            })    
        }
    }

    displayMessage = () => {
        return this.state.isFormSubmitted ? 
                this.state.isConfirmed ? 
                    <ValidationMessage txt="You can watch the movie"/> : 
                    <ValidationMessage txt="You can not watch the movie"/> : 
                null
    }

    render() {
        const {
            isConfirmed, 
            isFormSubmitted
        } = this.state

        return (
            <React.Fragment>
                <h1>Buy a horror ticket!</h1>
                <OrderForm 
                    change={this.handleCheckoboxChange} 
                    submit={this.handleFormSubmit} 
                    checked={isConfirmed}
                />
                {this.displayMessage()}
            </React.Fragment>
        )
    }
}






const header = <h1 className="title">Hello World!!!</h1>

ReactDOM.render(<TicketShop/>, document.getElementById('root'))