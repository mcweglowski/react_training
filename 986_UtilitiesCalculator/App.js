const Cash = (props) => {
    const value = props.cash <= 0 ? "" : (props.cash / props.ratio * props.price).toFixed(2)
    return (
        <div>{props.title}: {value}</div>
    )
}

class ExchangeCounter extends React.Component {
    state = {
        amount: "",
        product: "electricity",
    }

    static defaultProps = {
        currencies: [
            {
                id: 0,
                name: "PLN",
                ratio: 1
            },
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
        ],
        prices: {
            electricity: .51,
            gas: 4.76,
            water: 0.2,
        }
    }

    handleChange = (e) => {
        this.setState({
            amount: e.target.value
        })
    }

    handleSelect = (e) => {
        this.setState({
            product: e.target.value,
            amount: "",
        })
    }

    insertSuffix(select) {
        if ("electricity" === select) return <em>kWh</em>
        if ("gas" === select) return <em>dm3</em>
        if ("water" === select) return <em>L</em>
        return null
    }

    selectPrice(select) {
        return this.props.prices[select];
    }

    render() {
        const {amount, product} = this.state;
        const price = this.selectPrice(product);

        const calculators = this.props.currencies.map(currency => (
            <Cash 
                key={currency.id} 
                ratio={currency.ratio} 
                title={currency.name} 
                cash={amount}
                price={price}/>
        ))

        return (
            <React.Fragment>
                <label>Choose product:
                    <select 
                        defaultValue={product}
                        onChange={this.handleSelect}>
                        <option value="electricity">Electricity</option>
                        <option value="gas">Gas</option>
                        <option value="water">Water</option>
                    </select>
                </label>
                <br/>
                <label>
                    <input 
                        type="number"
                        value={this.state.amount}
                        onChange={this.handleChange}/>
                    {this.insertSuffix(product)}
                </label>
                {calculators}
            </React.Fragment>
        )
    }
}

ReactDOM.render(<ExchangeCounter/>, document.getElementById('root'))