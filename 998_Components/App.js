// stateless, functional component
const Header = () => {
    return (
        <h1>Hello World!</h1>
    )
}

// class componetn, state
class Article extends React.Component {
    state = {
        number: 0
    }

    render() {
        return (
            <section>
                <h2>Article {this.state.number}</h2>
                <p>Aliquip dolor nulla enim excepteur eiusmod pariatur elit aute sunt pariatur proident. Do nostrud sit nisi dolore consequat aliqua et. Sit et sit pariatur laboris nulla irure consequat ad id nostrud. Irure aute est eiusmod nulla veniam. Cillum ea Lorem nostrud magna ad cupidatat incididunt duis aliqua. Exercitation dolore nostrud dolore consectetur eiusmod id consequat amet non non aliqua.</p>
            </section>
        )
    }
}

const Blog = () => {
    return (
        <React.Fragment>
            <Header/>
            <Article/>
        </React.Fragment>
    )
}

ReactDOM.render(<Blog/>, document.getElementById('root'))