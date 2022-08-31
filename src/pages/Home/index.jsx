import { useState } from "react";
import { Card } from "../../components/card/index";
import "./style.scss";

function Home() {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);

  function handleAddStudent(){
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    };

    setStudents(prevState => [...prevState, newStudent]);
  }

  return (
    <div className="container">
      <header>
      <h1>Lista de presença</h1>
      <div>
        <strong>Leonardo Klein</strong>
        <img src="https://github.com/LeonardoLuisKlein.png" />
      </div>
      </header>
      

      <input 
      type="text" 
      placeholder="Digite o nome do estudante"
      onChange={(e) => setStudentName(e.target.value)} />
      <button type="button" onClick={handleAddStudent}>Incluir</button>
      {
      students.map(student => (
      <Card 
      key={student.time}
      name={student.name} 
      time={student.time} 
      />
      ))
      }
    </div>
  );
}

export default Home;
