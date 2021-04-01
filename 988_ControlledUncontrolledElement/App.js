class Form extends React.Component {
    state = {
        city: "London",
        text: "",
        isLoved: true,
        number: "0",
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: "checkbox" === e.target.type ? e.target.checked : e.target.value,
        })
    }

    render () {
        return (
            <React.Fragment>
                <div>
                    <label>City: 
                        <input
                            name="city"
                            onChange={this.handleChange}
                            defaultValue={this.state.city} 
                            type="text"
                        />
                    </label>
                    <br/>
                    <label>About the city:
                        <textarea 
                            name="text"
                            defaultValue={this.state.text}
                            onChange={this.handleChange}>
                            
                        </textarea>
                    </label>
                    <br/>
                    <label>I'm lovin it:
                        <input
                            name="isLoved" 
                            type="checkbox" 
                            defaultChecked={this.state.isLoved}
                            onChange={this.handleChange}/>
                    </label>
                    <br/>
                    <label>
                        Visits count:
                        <select
                            name="number"
                            defaultValue={this.state.number}
                            onChange={this.handleChange}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="more">more</option>
                        </select>
                    </label>
                </div>
            </React.Fragment>
        )
    }
}

ReactDOM.render(<Form/>, document.getElementById('root'))