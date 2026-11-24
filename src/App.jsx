const students = [
  {
    id: 1,
    name: "Ali Khan",
    age: 18,
    course: "Web Development",
    city: "Karachi"
  },
  {
    id: 2,
    name: "Sara Ahmed",
    age: 20,
    course: "Graphic Design",
    city: "Lahore"
  },
  {
    id: 3,
    name: "Ahmed Raza",
    age: 19,
    course: "React JS",
    city: "Islamabad"
  },
  {
    id: 4,
    name: "Ayesha Malik",
    age: 21,
    course: "Web Development",
    city: "Karachi"
  }
];

function App() {
  return (
    <>
      <h1>Student Directory</h1>
      <div className="box">
        {students.map((obj) => {
          return (
            <div key={obj.id} className="box-inner">
              <h3>{obj.name}</h3>
              <p>Courses: {obj.course}</p>
              <p>Age: {obj.age}</p>
              <p>City: {obj.city}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App
