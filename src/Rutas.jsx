import React from 'react'
import { Routes, BrowserRouter as Router, Route, Link, HashRouter } from "react-router-dom";

import App from './App';

const Rutas = () => {
  return (
        <HashRouter>
            <Routes>
                <Route path="/esp" element={<App props={esp} />} />
                <Route path="/" element={<App props={en} />} />
            </Routes>
        </HashRouter>
  )
}

export default Rutas

//Languages

const esp = 
{
  navbar_1: "NFT Collection",
  navbar_2: "Presale",
  navbar_3: "Roadmaps",
  navbar_4: "Team",
  image_url_father: "./img/esp.png",
  image_url_children: "./img/eeuu.png",
  title: "Colección Freedomk NFT Art",
  subtitle: "La primera colección artesanal NFT inspirada en Frida K. pintada totalmente por artistas latinoamericanos.",
  buttonText: "Preventa de los primeros NFTs Freedomk  ART",
  date: "Hasta que los primeros 250 se vendan.",
  nftTitle: "Proyecto NFT",
  nftSubtitle: "Sobre la colección",
  nftText:  <>
  La colección <strong>Freedomk</strong> es la primera colección amplia de <strong>NFTs</strong> en la que cada uno se ha hecho totalmente a mano sin usar patrones repetidos ni combinaciones de plantillas. Es arte verdadero, <strong>por lo que cada NFT</strong> es realmente <strong>inédito y único.</strong> Con la participación de más de <strong>30 artistas latinoamericanos,</strong> hemos logrado obtener una colección extremadamente bella, profunda y sublime en la que queda plasmada la diversidad de ideas, estilos y técnicas, todas inspiradas por las obras e ideas revolucionarias de la propia Frida, en la que se intenta plasmar sus ideales de inclusión, igualdad, emotividad, y disfrute de la vida. <strong>Por lo que será un deleite para los amantes del arte visitarla y apreciar pieza por pieza cada NFT,</strong> a diferencia de otras colecciones en las que luego de ver algunos de ellos se puede imaginar cualquiera como es el resto de la colección, evitando así esa sensación de vacío y falta de arte.
  <br></br>
  <br></br>

<strong>Al ser cada pieza realmente única, la rareza y el valor será dada por el gusto del público, </strong>que preferirá algunas obras por encima de otras, no simplemente por el poco uso de una plantilla.
<br></br>
<br></br>

En nuestro mundo, es bien sabido que comprar una obra de arte es una inversión valiosa y sólida, pero a las <strong>colecciones de NFT</strong> les faltaba algo: exclusividad y verdadero arte, y ésta es la primera colección que lo consigue.
<br></br>
<br></br>

Creemos fielmente que esta colección <strong>cambiará la tendencia de los NFTs y habrá un antes y un después.</strong>
<br></br> 
<br></br> 

También hemos recurrido a Frida porque creemos en la igualdad y en la necesidad de apoyar a las mujeres en algunos ámbitos y sectores para que vivan en armonía sin la presión del abuso, la injusticia, el maltrato o la violencia.<br></br> Por eso, un porcentaje de las ventas se donará <strong>directamente a fundaciones</strong> que defienden y protegen a las mujeres. Nuestro equipo es feminista y creemos y defendemos la igualdad de derechos y condiciones de hombres y mujeres para que puedan existir en armonía y felicidad.
  </>,
  navbar_1: "Coleccion NFT",
  navbar_2: "Preventa",
  navbar_3: "Roadmap",
  navbar_4: "Equipo",
  lang_top: "Español",
  lang_bottom: "Ingles",
  nftObjetiveTitle: "Objetivo del Proyecto NFT",
  nftObjetiveText: "Parte de nuestro objetivo es retomar y rescatar los valores del arte, por eso hemos usado a Frida, una figura que rompió con los esquemas de su época en todo el sentido de la palabra.",
  designTitle: "Diseño y técnicas utilizadas",
  designText: "Se han usado técnicas al óleo, acrílico, acuarela y grafito. Logrando obras realistas, impresionistas, caricaturescas, minimalistas, surrealistas, hyper  realistas, pop art, cúbicas, modernas.",
  fridakTitle: "NFT FridaK",
  buttonTextClicked: "Muy pronto",
  descrip_1: "Artistas Latinoamericanos",
  descrip_2: "Solo",
  descrip_3: "NFTs hechos a mano",
  descrip_4: "Apoya fundaciones pro mujeres",
  roadmap_title: "Roadmap Cronología del lanzamiento",
  roadmap_1: <>La conceptualización y creación de una idea en Pro del arte en el mundo <strong>de los NFTs,</strong> que transmitiera valores y belleza al público.</>,
  roadmap_2: "La búsqueda de artistas únicos, talentosos y profesionales, capaces de crear con técnicas a mano los distintos cuadros de Frida, inspirados en sus obras e ideas.",
  roadmap_3: "La selección cuidadosa de las mejores obras trabajando con un nivel de calidad único, buscando darle la mayor variedad en estilos y técnicas a la colección, de manera que observarla sea tan gratificante como ir a una galería o museo de arte. ",
  roadmap_4: <>Realizar una amplia campaña publicitaria a través de las distintas redes sociales para que se conozca este nuevo trabajo en el mundo de los <strong>NFTs,</strong> haciendo que el mensaje llegue a tanta gente como sea posible, logrando así que la colección se haga muy valiosa, no solo por su propuesta nueva e innovadora.</>,
  roadmap_5: "La primera preventa en las que nuestros primeros seguidores y creyentes puedan adquirir su NFT a un precio mucho mejor.",
  roadmap_6: "La venta al público de las 2000 NFTs",
  langRes: "Esp",
  langResBottom: "Ingles",

  videoSrc: "https://www.youtube.com/embed/fbpnt4JlhHg",

  roadmap_7: "La revelación que estará disponible después de que finalice la venta oficial.",
  roadmap_8: "El apoyo a fundaciones que busquen defender los derechos de las mujeres y su igualdad real, así como su protección de abusos o violencia. ",
  roadmap_9: "Compartir y dar a conocer por redes el trabajo de dichas fundaciones. ",
  greenText: "Contactar con fundaciones de protección y derechos de la mujer, organizar eventos con ellas para ayudar a difundir su mensaje y su causa. Crear una sólida alianza entre el proyecto, los propietarios de las NFT y las fundaciones, el 10% de los fondos recaudados se donará a las fundaciones.",
  teamText_1: "Enamórate de ti, de la vida y luego de quien tú quieras F.K.",
  teamText_2: "Mi sangre es un milagro que, desde mis venas, cruza el aire de mi corazón al tuyo F.K.",
  teamText_3: "Si actúas como si supieras lo que estás haciendo, puedes hacer lo que quieras F.K.",
  teamText_4: "Soy mi propia musa, soy la persona que mejor conozco. El tema que quiero conocer mejor F.K.",
  footerText_1: "La colección Freedomk Art es la primera colección amplia de NFTs en la que cada uno se ha hecho totalmente a mano sin usar patrones repetidos ni combinaciones de plantillas.",
  footerText_2: "© 2022 FreedomK. All rights reserved",
  locate_href: "/"
}

const en = 
{
    navbar_1: "NFT Collection",
    navbar_2: "Presale",
    image_url_father: "./img/eeuu.png",
    image_url_children: "./img/esp.png",
    lang_top: "English",
    lang_bottom: "Spanish",
    buttonTextClicked: "Coming soon",
    navbar_3: "Roadmaps",
    navbar_4: "Team",
    title: "FREEDOMK NFT ART Collection",
    subtitle: "The first NFT handmade collection inspired in Frida K. entirely painted by Latin American artists.",
    buttonText: "Pre-sale of the first Freedomk ART NFTs",
    date: "Until the first 250 are sold out.",
    langRes: "Ing",
    langResBottom: "Spanish",
    nftTitle: "NFT Project",
    nftSubtitle: "About the collection",
    nftText: <>
              The Freedomk collection is the first comprehensive collection of
              NFTs in which each piece has been made entirely by hand without
              the use of repeated patterns or stencil combinations. It is real
              art, <strong>so each NFT is truly unpublished and unique.</strong> With the
              participation of more than 30 Latin Americans artists, we have
              managed to obtain an extremely beautiful, profound, and sublime
              collection that reflects the diversity of ideas, styles, and
              techniques, all inspired by Frida’s own revolutionary works and
              ideas, in which we try to capture her ideals of inclusion,
              equality, emotion, and enjoyment of life. <strong>So, it will be a delight
              for art lovers to visit and appreciate piece by piece each NFT,</strong>  in
              contrast to other collections in which after seeing some of them
              you can imagine what the rest of the collection is like, thus
              avoiding that feeling of emptiness and lack of art.
              <br></br>
              <br></br>
              <strong>As each piece is truly unique, the uniqueness and value will be
              given by the taste of the public,</strong>  who will prefer some works over
              others, not simply by the little use of a stencil.
              <br></br>
              <br></br>
              In our world, it is well known that buying a work of art is a
              valuable and solid investment, but <strong>NFTs collections</strong>  were missing
              something: exclusivity and true art, and this is the first
              collection to achieve it.
              <br></br>
              <br></br>
              We faithfully believe that<strong> this collection will change  the trend
              of NFTs </strong>and there will be a before and after.
              <br></br>
              <br></br>
              We have also used Frida because we believe in equality and the
              need <strong>to support women</strong>  in some areas and sectors to live in harmony
              without the pressure of abuse, injustice, mistreatment, or
              violence. That is why a percentage of the sales will be directly
              donated to foundations that defend and protect women. Our team is
              feminist and we believe in and stand for the equality of rights
              and conditions for men and women so that they can exist in harmony
              and happiness.
    </>,
    nftObjetiveTitle: "NFT Project Objective",
    nftObjetiveText: "Part of our goal is to retake and rescue the values of art, that is why we have used Frida, a figure that broke with the schemes of her time in every sense of the word.",
    designTitle: "Design and techniques used",
    designText: "Oil, acrylic, watercolor, and graphite techniques have been used, achieving realistic, impressionistic, caricatural, minimalist, surrealist, hyper-realistic, pop art, cubic, modern, and some distinctive works of some of our artists.",
    fridakTitle: "NFT Fridak",
    descrip_1: "Latin American Artists",
    descrip_2: "Just",
    descrip_3: "handmade NFTs",
    descrip_4: "Support pro women ",
    descrip_5: "fundations",
    roadmap_title: "Roadmaps Chronology of the launch",
    roadmap_1: <>The conceptualization and creation of an idea in Pro of Art in the world<strong> of NFTs</strong>, that would transmit values and beauty to the public.</>,
    roadmap_2: "The search for unique, talented, and professional artists, capable of creating with handmade techniques the different paintings of Frida, inspired by her works and ideas.",
    roadmap_3: "The careful selection of the best works, working with a unique level of quality, seeking to give the greatest variety in styles and techniques to the collection so that admiring it would be as gratifying as going to an art gallery or museum.",
    roadmap_4: <>To carry out a wide advertising campaign through the different social channels so that this new work in the world of <strong>NFTs</strong>  is known, spreading the message to as many people as possible, making the collection very valuable, far beyond its new and innovative proposal.</>,
    roadmap_5: "The first pre-sale in which our first followers and believers can acquire their NFT at a much better price.",
    roadmap_6: "The sale to the public of the 2000 NFTs",
    roadmap_7: "The revelation which will be available after the official sale ends",
    roadmap_8: "Support for foundations that seek to defend the rights of women and their real equality, as well as their protection from abuse or violence.",
    roadmap_9: "To spread the word about the work of these foundations through social media.",
    
    greenText: "Contacting women’s rights and protection foundations, organize events with them to help spread their message and cause.  Create a solid alliance between the project, the owners of the NFTs and the foundations, 10% of the collected funds will be donated to the foundations.",

    
    videoSrc: "https://www.youtube.com/embed/Lsw079KsYIc",

    teamText_1: "Fall in love with yourself, with life and then with whoever you want F.K.",
    teamText_2: "My blood is a miracle that, from my veins, crosses the air from my heart to yours F.K.",
    teamText_3: "If you act like you know what you’re doing, you can do whatever you want F.K.",
    teamText_4: "I am my own muse, I am the person I know best. The subject I want to know better F.K.",
    
    footerText_1: "The Freedomk Art collection is the first comprehensive collection of NFTs in which each piece has been made entirely by hand without the use of repeated patterns or stencil combinations",
    footerText_2: "© 2022 FreedomK. All rights reserved",
    locate_href: "/#/esp"
}