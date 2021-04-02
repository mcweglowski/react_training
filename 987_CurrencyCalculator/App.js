const Cash = (props) => {
    const value = props.cash <= 0 ? "" : (props.cash / props.ratio).toFixed(2)
    return (
        <div>{props.title}: {value}</div>
    )
}

class ExchangeCounter extends React.Component {
    state = {
        amount: "",
    }

    currencies = [
        {
            id: 1,
            name: "USD",
            ratio: 3.6
        },
        {
            id: 2,
            name: "EUR",
            ratio: 4.1
        },
        {
            id: 3,
            name: "GBP",
            ratio: 4.55
        }
    ]

    handleChange = (e) => {
        this.setState({
            amount: e.target.value
        })
    }

    render() {
        const {amount} = this.state;

        const calculators = this.currencies.map(currency => (
            <Cash key={currency.id} ratio={currency.ratio} title={currency.name} cash={amount}/>
        ))

        return (
            <React.Fragment>
                <label>
                    <input 
                        type="number"
                        defaultValue={this.state.amount}
                        onChange={this.handleChange}/>
                </label>
                {calculators}
            </React.Fragment>
        )
    }
}

ReactDOM.render(<ExchangeCounter/>, document.getElementById('root'))