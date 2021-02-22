import React from "react";
import { connect } from "react-redux";
import "../assets/styles/Table.scss";
import { Link } from "react-router-dom";

const Table = (props) => {
  const ponerFilas = () =>
    props.usuarios.map((user, key) => (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.website}</td>
        <td>
          <Link to={ `/publicaciones/${key}` }>
            <div className="eye-solid3 icon"></div>
          </Link>
        </td>
      </tr>
    ));

  return (
    <div id="users">
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Sitio web</th>
          </tr>
        </thead>
        <tbody>{ponerFilas()}</tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state.usuarios;
};

export default connect(mapStateToProps)(Table);
