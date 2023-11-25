import React, { Component, Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default class Menu extends Component {
    render() {
        return (
            <div>
                <nav className="navbar justify-content-center navbar-expand-lg bg-body-tertiary p-4">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-center fs-5" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <NavLink className="nav-link px-3" aria-current="page" to="/">Inicio</NavLink>
                                <NavLink className="nav-link px-3" to="/html">Carga 1</NavLink>
                                <NavLink className="nav-link px-3" to="/react">Carga 2</NavLink>
                            </div>

                        </div>
                    </div>
                </nav>
                <Suspense>
                    <Outlet />
                </Suspense>
            </div>

        )
    }
}
