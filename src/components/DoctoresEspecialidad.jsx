import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'

export default class DoctoresEspecialidad extends Component {
    selectIdEspecialidad = React.createRef();
    state = {
        especialidades: [],
        doctores: []
    }

    loadEspecialidades = () => {
        let request = "api/Doctores/Especialidades"

        axios.get(Global.urlDoctores + request).then((response) => {
            console.log('leyendo especialidades')
            this.setState({
                especialidades: response.data
            })
        })
    }

    buscarDoctores = (event) => {
        event.preventDefault();
        let especialidadSeleccionada= this.selectIdEspecialidad.current.value;
        let request = 'api/doctores' //+ especialidadSeleccionada;
        axios.get(Global.urlDoctores + request).then((response) => {
            console.log('Leyendo doctores') 
            console.log(response.data)
            this.setState({
                doctores: response.data
            })
        })

    }
    componentDidMount = () => {
        this.loadEspecialidades();
    }


  render() {
    return (
      <div>DoctoresEspecialidad
      <form>
        <label>Selecciona una especialidad</label>
        <select ref={this.selectIdEspecialidad}>
        {
            this.state.especialidades.map((esp, index) => {
                return(<option key={index} value={esp}>{esp}</option>)
            })
        }
        </select>
        <button onClick={this.buscarDoctores}>Buscar Doctores</button>
      </form>
      <table border='1'>
        <thead>
            <tr>
                <th>Id Doctor</th>
                <th>Apellidos</th>
                <th>Especialidad</th>
                <th>Salario</th>
                <th>Hospital</th>
            </tr>
        </thead>
        <tbody>
            {
            this.state.doctores.map((doct, index) => {
                return(
                <tr key={index}>
                    <td>{doct.idDoctor}</td>
                    <td>{doct.apellidos}</td>
                    <td>{doct.especialidad}</td>
                    <td>{doct.salario}</td>
                    <td>{doct.idHospital}</td>
                </tr>
            )})
            }
            
        </tbody>
      </table>
      </div>
    )
  }
}
