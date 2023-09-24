import './App.css'
import {useState} from "react"
import Axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [nombre, setNombre] = useState("")
  const [edad, setEdad] = useState(0)
  const [pais, setPais] = useState("")
  const [cargo, setCargo] = useState("")
  const [anios, setAnios] = useState(0)
  const [empleadosList, setEmpleados] = useState([])

  const add = () => {
    Axios.post('http://localhost:3001/create', {
      nombre:nombre,
      edad:edad,
      pais:pais,
      cargo:cargo,
      anios:anios
    }).then(() => {
      getEmpleados()
    })
  }

  const getEmpleados = () => {
    Axios.get('http://localhost:3001/empleados').then((response) => {
      setEmpleados(response.data)
    })
  }

  getEmpleados()

  return (
    <div className="App">
      <div className="datos">


      <div className="card text-center">
        <div className="card-header">
          Registro De Empleado
        </div>
        <div className='container'>
          <div className="card-body">
            <div className='col-sm-12'><label className='form-control mb-2'>Nombre: <br/><input placeholder='Nombre' onChange={(event) => {setNombre(event.target.value)}} type="text" /></label></div>
            <div className='col-sm-12'><label className='form-control mb-2'>Edad:   <br/><input placeholder='Edad' onChange={(event) => {setEdad(event.target.value)}} type="number" /></label></div>
            <div className='col-sm-12'><label className='form-control mb-2'>Pais:   <br/><input placeholder='Pais' onChange={(event) => {setPais(event.target.value)}} type="text" /></label></div>
            <div className='col-sm-12'><label className='form-control mb-2'>Cargo:  <br/><input placeholder='Cargo' onChange={(event) => {setCargo(event.target.value)}} type="text" /></label></div>
            <div className='col-sm-12'><label className='form-control mb-2'>Experiencia:  <br/><input placeholder='Experiencia' onChange={(event) => {setAnios(event.target.value)}} type="number" /></label></div>
          </div>
        </div>
        <div className="card-footer text-body-secondary">
          <button className='btn btn-success' onClick={add}>Registrar</button>
        </div>
      </div>

      <div className='container m-5'>
        <div className='col-sm-12'>
          <table className="table">
            <thead className="table-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Edad</th>
              <th scope="col">Pais</th>
              <th scope="col">Cargo</th>
              <th scope="col">Experiencia</th>
            </tr>
            </thead>
            <tbody>
            {
              empleadosList.map((val, key) => {
                return <tr key={val.id}>
                        <th scope="col">{val.id}</th>
                        <th scope="col">{val.nombre}</th>
                        <th scope="col">{val.edad}</th>
                        <th scope="col">{val.pais}</th>
                        <th scope="col">{val.cargo}</th>
                        <th scope="col">{val.anios}</th>
                      </tr>
              })
            }
            </tbody>
          </table>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
