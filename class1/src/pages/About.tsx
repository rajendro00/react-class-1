const categories = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node"
];


function About(){
    return(
        <ul>
            {categories.map(category => (
                <li key={category}>
                    {category}
                    </li>
            ))}
        </ul>
    )
}

export default About;