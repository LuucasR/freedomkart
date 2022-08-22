import React from 'react'
import { Routes, BrowserRouter as Router, Route, Link, HashRouter } from "react-router-dom";

import App from './App';

const Rutas = () => {
  return (
        <Router>
            <Routes>
                <Route path="/esp" element={<App props={esp} />} />
                <Route path="/" element={<App props={en} />} />
            </Routes>
        </Router>
  )
}

export default Rutas

//Languages

const esp = 
{
    connectWallet: "Conectar Wallet",
    comingsoon: "Proximamente",
    mint: "Mint",
    image_url_father: "../images/esp.png",
    image_url_children: "../images/eeuu.png",
    link_1 : "Coleccion NFT",
    link_2 : "Preventa",
    link_3 : "Roadmaps",
    lang_top: "Español",
    lang_top_mobile: "ESP",
    lang_bottom: "Ingles",
    lang_bottom_mobile: "EN",
    link_4 : "Equipo",
    title_1 : "¡No te quedes por fuera y haz historia!",
    description_1 : "Preventa disponible hasta el 15 de Septiembre o hasta agotarse la existencia de los primeros 500 NFTs",
    title_2 : "Recuerda",
    description_2: <>Solo serán{" "}
    <b>
      2000 NFTs totalmente originales hechos completamente a mano por
      más de 50 artistas.
    </b></>,
    sub_description_1: <>¡<b>FreedomK</b> es una causa en pro de la mujer y tú estás
    ayudando!</>,
    sub_description_2 : <> La preventa y el precio de{" "}
    <b>0.35 Eth sólo estará disponible hasta el día 15 de Septiembre.</b>{" "}
    Luego será mucho más.</>,

    footer_1 : <>La colección <b>Frida Kahlo Art</b> es la primera colección amplia
    de NFTs en la que cada uno se ha hecho totalmente a mano sin usar
    patrones repetidos ni combinaciones de plantillas.
    </>,
    locate_href: "/language/en"
}

const en = 
{
    connectWallet: "Connect Wallet",
    comingsoon: "Coming soon",
    mint: "Mint",
    image_url_father: "../images/eeuu.png",
    image_url_children: "../images/esp.png",
    link_1 : "NFT Collection",
    link_2 : "Prevent",
    link_3 : "Roadmaps",
    lang_top: "English",
    lang_bottom: "Spanish",
    lang_top_mobile: "ENG",
    lang_bottom_mobile: "ESP",
    link_4 : "Team",
    title_1 : "Don't be left out and make history with the NFT's future by joining FreedomK's first collection of unique and authentic art.",
    description_1 : "Presale available until September 15 or until the first 500 NFTs are sold out",
    title_2 : "Remember",
    description_2: <>It will consist of only {" "}
    <b>
    2000 totally original NFTs made entirely by hand by over 50 artists.
    </b></>,
    sub_description_1: <>¡<b>FreedomK</b> is a cause for women and you're helping! </>,
    sub_description_2 : <> The presale and price of{" "}
    <b> 0.35 Eth will only be available until September 15th. After that</b>{" "}
    , it will cost much more. </>,

    footer_1 : <>The <b>Freedomk Art </b>collection is the first comprehensive collection of NFTs in which each piece has been made entirely by hand without the use of repeated patterns or stencil combinations</>,
    locate_href: "/language/esp"
}