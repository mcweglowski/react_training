const Item = (props) => <li>{`Fruit: ${props.content}`}</li>

class ListItems extends React.Component {
    state = {
        items: ["apple", "plum", "peach"]
    }

    render() {
        const Items = this.state.items.map((item, id) => <Item key={item} content={item}/>);
        return (
            <React.Fragment>
                <ul>
                    {Items}
                </ul>
            </React.Fragment>
        )
    }
}

ReactDOM.render(<ListItems/>, document.getElementById('root'))