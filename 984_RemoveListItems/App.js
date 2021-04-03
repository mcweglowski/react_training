class List extends React.Component {
    static defaultProps = {
        peoples: [
            {
                id: 0,
                name: "John Smith"
            },
            {
                id: 1,
                name: "Marry Poppins"
            },
            {
                id: 2,
                name: "Jake Smith"
            },
            {
                id: 3,
                name: "Edward Moore"
            },
            {
                id: 4,
                name: "Anna Blake"
            },
        ],
    }

    onDelete = (id) => {
        console.log(`Item do delete ${id}`);

        const peoples = this.props.peoples;
        const index = peoples.findIndex(person => person.id === id);
        
        this.props.peoples.splice(index, 1);
        this.setState({});
    }

    render() {
        const items = this.props.peoples.map(item => (
            <ListItem 
                key={item.id}
                id={item.id}
                name={item.name}
                onDelete={this.onDelete}/>
        ))
        return(
            <React.Fragment>
                <ul>
                    {items}
                </ul>
            </React.Fragment>
        )
    }
}

const ListItem = (props) => {
    return (
        <React.Fragment>
            <li>{props.name}<button onClick={() => props.onDelete(props.id)}>Delete</button></li>
        </React.Fragment>
    )
}

ReactDOM.render(<List/>, document.getElementById('root'))