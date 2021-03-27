const data = {
    users: [
        {
            id: 1,
            age: 29,
            name: "Anthony",
            sex: "male",
        },
        {
            id: 2,
            age: 49,
            name: "Martha",
            sex: "female",
        },
        {
            id: 3,
            age: 19,
            name: "Stephanie",
            sex: "female",
        },
        {
            id: 4,
            age: 21,
            name: "Carl",
            sex: "male",
        }
    ]
}

const Item = ({user}) => (
    <div className="userInfo">
        <h1>{`User ${user.name}`}</h1>
        <p>User info</p>
        <p>Age: <strong>{user.age}</strong> years</p>
        <p>Sex: {user.sex}</p>
    </div>
)

class ListItems extends React.Component {
    state = {
        select: "all",
    }

    userList = () => {
        let users = this.props.data.users;

        switch(this.state.select) {
            case "all":
                return users.map((user) => <Item key={user.id} user={user}/>)
            case "female":
                users = users.filter(user => user.sex === "female")
                return users.map((user) => <Item key={user.id} user={user}/>)
            case "male":
                users = users.filter(user => user.sex === "male")
                return users.map((user) => <Item key={user.id} user={user}/>)
        }

        users = users.map((user) => <Item key={user.id} user={user}/>);
        return users;
    }

    handleUsersFilter(option) {
        this.setState({
            select: option,
        })
    }

    render() {
        return (
            <React.Fragment>
                <button onClick={this.handleUsersFilter.bind(this, "all")}>All</button>
                <button onClick={this.handleUsersFilter.bind(this, "female")}>Females</button>
                <button onClick={this.handleUsersFilter.bind(this, "male")}>Males</button>
                {this.userList()}
            </React.Fragment>
        )
    }
}

ReactDOM.render(<ListItems data={data} />, document.getElementById('root'))