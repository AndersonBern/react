import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//IMPORTAR CSS do card
import "./css/Card.css";

//IMPORTAR DADOS de backend
import { acomodacoes } from "../../backend/dados";

export default function Card() {
  function getRnadomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return (
    <div className="container-fluid">
      <div className="container-airbnb row">
        {acomodacoes.map((acomodacao, index) => (
          <div key={acomodacao.id} className="col-xl-3 mt-3">
            <Swiper
              className="img-content"
              pagination={true}
              navigation={true}
              modules={[Pagination, Navigation]}
            >
              {acomodacao.imagens.map((imagem, index) => (
                <SwiperSlide
                  className="swiperImg"
                  key={index}
                >
                  <img src={imagem} className="img-fluid cardImage" />
                </SwiperSlide>
              ))}
            </Swiper>

            <p className="d-flex justify-content-between mt-3 mb-0">
              <span
                style={{ display: "block", maxWidth: "200px" }}
                className="fw-bold text-truncate"
              >
                {acomodacao.cidade}, {acomodacao.pais}
              </span>
              <span>
                <i className="mdi mdi-star" /> {acomodacao.nota}
              </span>
            </p>
            <p className="my-0 text-muted">
              {getRnadomInt(10, 800)} KM de distância
            </p>
            <p className="text-muted">
              {getRnadomInt(1, 31)} de jan - {getRnadomInt(1, 28)} fev
            </p>
            <p className="fw-bold">
              R$ {acomodacao.preco.toLocaleString("pt-br")} noite
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
