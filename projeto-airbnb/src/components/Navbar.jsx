import React from "react";

//Importar CSS deste componente
import "./css/Navbar.css";

//Importar IMAGEM
import logo from "../assets/logo-airbnb.svg";

export default function Navbar() {
  return (
    <div className="vermelho">
      <nav className="nav-topo">
        <div className="container-airbnb">
          <div className="d-flex align-items-center col-sm-6">
            <img className="logo" src={logo} alt="logo do site" />
          </div>

          <div className="d-flex align-items-center justify-content-end col-sm-6">
            <a href="#" className="link-especial">
              Seja um anfitrião
            </a>

            <a href="#" className="icon-nav mx-2">
              <i className="mdi mdi-web"></i>
            </a>

            <div className="dropdown ms-2">
              <a
                className="button-login dropdown"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fs-5 mdi mdi-menu ps-2 me-1"></i>
                <i className="fs-2 mdi mdi-account-circle position-relative pe-2">
                  <span class="position-absolute top-0 start-50 badge border border-light rounded-circle bg-danger p-2"><span class="visually-hidden">unread messages</span></span>
                </i>
              </a>

              <ul style={{borderRadius:'15px'}} className="dropdown-menu py-3 mt-2 border-0 shadow">
                <li>
                  <a className="dropdown-item p-2 px-3 fw-bold" href="#">
                    Cadastre-se
                  </a>
                </li>
                <li>
                  <a className="dropdown-item p-2 px-3" href="#">
                    Entrar
                  </a>
                </li>
                <li><hr className="dropdown-divider"></hr></li>
                <li>
                  <a className="dropdown-item p-2 px-3" href="#">
                    Hospede em sua acomodação
                  </a>
                   <a className="dropdown-item p-2 px-3" href="#">
                    Hospede uma experiência
                  </a>
                   <a className="dropdown-item p-2 px-3" href="#">
                    Ajuda
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
