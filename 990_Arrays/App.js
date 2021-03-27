const data = {
    users: [
        {
            id: 1,
            age: 29,
            name: "Anthony",
        },
        {
            id: 2,
            age: 49,
            name: "Martha",
        },
        {
            id: 3,
            age: 19,
            name: "Stephanie",
        },
        {
            id: 4,
            age: 21,
            name: "Carl",
        }
    ]
}

const Item = (props) => (
    <div>
        <h1>{`User ${props.content.name}`}</h1>
        <h2>{`Has ${props.content.age} years`}</h2>
    </div>
)

class ListItems extends React.Component {
    render() {
        const users = this.props.data.users;
        const Items = users.map(item => <Item key={item.id} content={item} />)

        return (
            <React.Fragment>
                <ul>
                    {Items}
                </ul>
            </React.Fragment>
        )
    }
}

ReactDOM.render(<ListItems data={data} />, document.getElementById('root'))