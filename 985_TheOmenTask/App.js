class Omen extends React.Component {
    state = {
        omenId: "-1",
        newOmen: "",
    }

    static defaultProps = {
        omens: [
            {
                id: 0,
                text: "Omen one",
            },
            {
                id: 1,
                text: "Omen two",
            },
            {
                id: 2,
                text: "Omen three",
            },
            {
                id: 3,
                text: "Omen four",
            },
        ]
    } 

    handleClick = () => {
        const omensCount = this.props.omens.length;
        const omenId = Math.floor(Math.random() * omensCount);
        
        this.setState({
            omenId: omenId,
        })
    }

    getOmen(omenId) {
        const omen = this.props.omens.find(omen => omen.id === omenId)
        return omen.text
    }

    addOmen = (e) => {
        if ("" === this.state.newOmen) {
            return;
        }

        const nextId = this.props.omens.length;

        let item = {
            id: nextId,
            text: this.state.newOmen,
        };

        this.props.omens.push(item);

        this.setState({
            newOmen: "",
        })
        
        alert(this.props.omens.map(omen => omen.text))
    }
    
    changeNewOmen = (e) => {
        this.setState({
            newOmen: e.target.value,
        })
    }

    render() {
        const {omenId} = this.state;

        return (
            <React.Fragment>
                <button
                    onClick={this.handleClick}
                    >The Omen
                </button>
                <br/>
                <input 
                    type="text"
                    value = {this.state.newOmen}
                    onChange = {this.changeNewOmen}
                />
                <button
                    onClick={this.addOmen}
                >Add omen</button>
                {-1 < omenId ? <h1>{this.getOmen(omenId)}</h1> : ""}
            </React.Fragment>
        )
    }
}

const header = <h1 className="title">Hello World!!!</h1>

ReactDOM.render(<Omen/>, document.getElementById('root'))