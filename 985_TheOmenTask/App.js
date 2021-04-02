class Omen extends React.Component {
    state = {
        omenId: "-1",
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

    render() {
        const {omenId} = this.state;

        return (
            <React.Fragment>
                <button
                    onClick={this.handleClick}
                    >The Omen
                </button>
                <h1>{-1 < omenId ? this.getOmen(omenId) : ""}</h1>
            </React.Fragment>
        )
    }
}

const header = <h1 className="title">Hello World!!!</h1>

ReactDOM.render(<Omen/>, document.getElementById('root'))