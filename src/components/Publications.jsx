import React, { Component } from "react";
import { connect } from "react-redux";
import * as publicacionesActions from "../actions/publicacionesActions";
import * as usuariosActions from "../actions/usuariosActions";

import Spinner from "./Spinner";

const { traerTodos: usuariosTraerTodos } = usuariosActions;
const { traerPorUsuario: publicacionesTraerPorUsuario } = publicacionesActions;

class Publicaciones extends Component {
  constructor() {
    super();
  }
  async componentDidMount() {
    if (!this.props.usuarios.usuarios.length) {
      this.props.usuariosTraerTodos();
    }
    this.props.publicacionesTraerPorUsuario(this.props.match.params.key);
  }

  render() {
    const userId = this.props.match.params.key;
    console.log(this.props);
    return (
      <div>
        <h1>Publicaciones de</h1>
        {this.props.match.params.key}
      </div>
    );
  }
}

const mapStateToProps = ({ usuarios, publicaciones }) => {
  return { usuarios, publicaciones };
};

const mapDispatchToProps = { usuariosTraerTodos, publicacionesTraerPorUsuario };

export default connect(mapStateToProps, mapDispatchToProps)(Publicaciones);
