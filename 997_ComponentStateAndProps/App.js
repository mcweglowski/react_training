class ShoppingList extends React.Component {
    state = {
        items1: 'cucomber',
        items2: 'juice',
        items3: 'rice'
    }
    
    render() {
        return (
            <React.Fragment>
                <h1>Shopping list</h1>
                <ul>
                    <ItemList name={this.state.items1} />
                    <ItemList name={this.state.items2} />
                    <ItemList name={this.state.items3} />
                </ul>
            </React.Fragment>
        )
    }
}

const ItemList = (props) => {
    return (
        <li>{props.name}</li>
    )
}


ReactDOM.render(<ShoppingList/>, document.getElementById('root'))