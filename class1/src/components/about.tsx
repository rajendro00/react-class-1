function About( props ) {
    const { aboutTitle, aboutDes } = props;
    const wrapperStyle = {
        'border' : '1px solid black',
        'padding' : '10px',
        'margin' : '10px',
    }
    return(
        <div  style={wrapperStyle}>
            <h1>{props.aboutTitle}</h1>
            <p>{props.aboutDes}</p>
        </div>
    )
}

export default About;