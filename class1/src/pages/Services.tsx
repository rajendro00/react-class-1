const countries = [
  "Bangladesh",
  "India",
  "Pakistan",
  "Japan"
];

function Services(){
    return(
        <select name="" id="">
            {countries.map(country => (
                <option key={country}>{country}</option>
            ))}
        </select>
    )
}

export default Services;