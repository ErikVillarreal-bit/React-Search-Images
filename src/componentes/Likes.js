import React, { Component } from 'react';
class Likes extends Component {
    busquedaRef = React.createRef();
    obtenerDatos = (e) => {
        e.preventDefault();
        //Tomamos el valor del input y lo enviamos al componente principal
        this.props.datosBusqueda(this.busquedaRef.current.value);
    }
    render() {
        return(
            <form onSubmit={this.obtenerDatos}>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input ref={this.busquedaRef} type="text" className="form-control form-control-lg" placeholder="Busca tu Imagen"/>
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn vtn-lg btn-danger btn-block" value="Buscar"/>
                    </div>
                </div>
            </form>
        )

    }
}
export default Likes;