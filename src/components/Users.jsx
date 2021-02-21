import React, { Component } from "react";
import "../assets/styles/Users.scss";
import { connect } from "react-redux";
import * as usuariosActions from "../actions/usuariosActions";
import Spinner from "./Spinner";
import Fatal from "./Fatal";

class Users extends Component {
  componentDidMount() {
    this.props.traerTodos();
  }

  ponerFilas = () =>
    this.props.usuarios.map((user) => (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.website}</td>
      </tr>
    ));

  renderContent = () => {
    return this.props.cargando ? (
      <Spinner />
    ) : this.props.error ? (
      <Fatal error={this.props.error} />
    ) : (
      <div id="users">
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Sitio web</th>
            </tr>
          </thead>
          <tbody>{this.ponerFilas()}</tbody>
        </table>
      </div>
    );
  };

  render() {
    console.log(this.props);
    return this.renderContent();
  }
}

const mapStateToProps = (state) => {
  return state.usuarios;
};

export default connect(mapStateToProps, usuariosActions)(Users);
