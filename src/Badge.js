function Badge(props) {
    let color = props.color;

    if(typeof(color) == "undefined")
        return (
            <span className="Badge no-color">
                NoColor
            </span>
        )
    
    return (
        <span className={`Badge ${color}`}>{color}</span>
    )
}

export default Badge;