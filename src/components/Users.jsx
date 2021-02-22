import React, { Component } from "react";
import "../assets/styles/Users.scss";
import { connect } from "react-redux";
import * as usuariosActions from "../actions/usuariosActions";
import Spinner from "./Spinner";
import Fatal from "./Fatal";
import Table from "./Table";

class Users extends Component {
  componentDidMount() {
    if (!this.props.usuarios.length) {
      this.props.traerTodos();
    }
  }

  renderContent = () => {
    return this.props.cargando ? (
      <Spinner />
    ) : this.props.error ? (
      <Fatal error={this.props.error} />
    ) : (
      <Table />
    );
  };

  render() {
    console.log(this.props);
    return (
      <>
        <h1>Usuarios</h1>
        {this.renderContent()}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return state.usuarios;
};

export default connect(mapStateToProps, usuariosActions)(Users);
