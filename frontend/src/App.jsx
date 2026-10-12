import { useEffect, useState } from "react";
function App() {
    const [students, setStudents] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/api/students")
            .then(response => response.json())
            .then(data => {
                setStudents(data);
            })
            .catch(error => {
                console.error("Error:", error);
            });
    }, []);
    return (
        <div>
            <h1>Student List</h1>

            {students.map(student => (
                <div key={student.id}>
                    <h3>{student.name}</h3>
                    <p>Course: {student.course}</p>
                </div>
            ))}
        </div>
    );
}
export default App;
