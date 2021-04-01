const Header = (props) => {
    const activeItems = props.items.filter(item => item.active === true)
    const number = activeItems.length
    return (
        <header>
            <h2>
                Order size: {number}
            </h2>
            <h2>
                Cost: {number ? `${number * 10} GBP` : `nothing to pay`}
            </h2>
        </header>
    )
}