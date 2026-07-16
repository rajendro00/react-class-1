
const students = [
  {
    id: 1,
    name: "Rahim",
    class: 10,
    result: "A+",
  },
  {
    id: 2,
    name: "Karim",
    class: 9,
    result: "A",
  },
  {
    id: 3,
    name: "Hasan",
    class: 8,
    result: "B",
  },
];

function Gallery(){
    return(
        <>
        {students.map(student => (
            <div key={student.id}>
                <h2>{student.name}</h2>
                <p>Class : {student.class}</p>
                <p>Result : {student.result}</p>
            </div>
        ))}
        </>
    )
}

export default Gallery;