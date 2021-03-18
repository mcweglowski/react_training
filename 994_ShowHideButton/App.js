class Message extends React.Component {
    constructor(props) {
        super(props)        
        this.state = {
            messageIsActive: false
        }
        this.handleMessageButton = this.handleMessageButton.bind(this)
    }

    handleMessageButton() {
        debugger
        this.setState({
            messageIsActive: !this.state.messageIsActive
        })
    }

    render () {
        const text = 'Lorem aliquip incididunt in reprehenderit nostrud mollit consectetur aliquip qui sint. Magna est laboris enim veniam mollit. Nisi laborum ipsum ipsum amet quis ipsum adipisicing quis ut et sit voluptate. Est nostrud velit elit aliqua voluptate officia laborum laboris quis elit proident. Cillum adipisicing ea est nostrud velit exercitation. Quis deserunt do in esse eiusmod ex laboris deserunt Lorem cillum consectetur tempor laborum consequat. Qui elit occaecat duis ut excepteur pariatur cillum Lorem consectetur do commodo.'

        return (
            <React.Fragment>
                <button onClick={this.handleMessageButton}>{this.state.messageIsActive ? 'Hide' : 'Show'}</button>
                {this.state.messageIsActive && <p>{text}</p>}
                {/* {this.state.messageIsActive ? <p>{text}</p> : null} */}
                {/* <p>{this.state.messageIsActive && text}</p> */}
            </React.Fragment>
        )
    }
}





ReactDOM.render(<Message/>, document.getElementById('root'))