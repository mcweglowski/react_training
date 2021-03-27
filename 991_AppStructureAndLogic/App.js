class App extends React.Component {
    state = {
        avaliableProducts: 7,
        shoppingCart: 1,
    }

    handleRemoveFromCart = () => {
        this.setState({
            shoppingCart: this.state.shoppingCart - 1,
        })
    }

    handleAddToCart = () => {
        this.setState({
            shoppingCart: this.state.shoppingCart + 1,
        })
    }

    handleBuy = () => {
        this.setState({
            avaliableProducts: this.state.avaliableProducts - this.state.shoppingCart,
            shoppingCart: 0,
        })
    }

    render() {
        const {shoppingCart, avaliableProducts} = this.state;


        const style = shoppingCart === 0 ? {opacity: 0.3} : {};

        return (
            <React.Fragment>
                <button 
                    disabled={shoppingCart === 0 ? true : false}
                    onClick={this.handleRemoveFromCart}>
                    -
                </button>
                <span
                    style = {style}> 
                &nbsp;{shoppingCart}&nbsp;</span>
                <button 
                    disabled={shoppingCart < avaliableProducts ? false : true}
                    onClick={this.handleAddToCart}
                    >                        
                    +</button>
                &nbsp;
                {shoppingCart > 0 && 
                    <button
                        onClick={this.handleBuy}>
                    Buy</button>}
            </React.Fragment>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))