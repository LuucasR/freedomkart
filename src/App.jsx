import React, { useEffect, useState } from "react";
import "./styles/main.css";
// import './styles/footer.scss'

import CountUp from "react-countup";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";


function App({ props }) {
  const {
    navbar_1,
    navbar_2,
    navbar_3,
    navbar_4,
    image_url_children,
    image_url_father,
    lang_top,
    lang_bottom,
    title,
    subtitle,
    buttonText,
    date,
    nftTitle,
    nftSubtitle,
    nftText,
    langRes,
    langResBottom,
    nftObjetiveTitle,
    nftObjetiveText,
    designTitle,
    designText,
    fridakTitle,
    videoSrc,
    descrip_1,
    descrip_2,
    descrip_3,
    descrip_4,
    descrip_5,
    roadmap_title,
    roadmap_1,
    roadmap_2,
    roadmap_3,
    roadmap_4,
    roadmap_5,
    roadmap_6,
    roadmap_7,
    roadmap_8,
    roadmap_9,
    greenText,
    teamText_1,
    teamText_2,
    teamText_3,
    teamText_4,
    footerText_1,
    footerText_2,
    locate_href,
  } = props;


  const [clicked, setClicked] = useState(false);
  const [lang, setLang] = useState(false);

  const routeImage = () => {
    window.location.href = "https://freedomk.art/";
  };

  const handleLang = () => {
    if (lang) {
      setTimeout(function () {
        setLang(false);
      }, 2000);
    } else {
      setLang(true);
    }
  };


  const handleMobileLang = () => {
    lang ? setLang(false) : setLang(true);
  };

  const handleClick = () => {
    setClicked(!clicked);
  };

  const routeLang = () => {
    window.location.href = locate_href;
  };

  const handleMenu = () => {
    !clicked ? setClicked(true) : setClicked(false)
    console.log(clicked)
  }

  const handleFacebook = () => {
    window.location.href =
      "https://www.facebook.com/Freedomkart-110389825084974";
  };
  const handleInstagram = () => {
    window.location.href = "https://www.instagram.com/freedomk_art/";
  };
  const handleTwitter = () => {
    window.location.href = "https://twitter.com/freedomkart";
  };
  const handleDiscord = () => {
    window.location.href = "https://discord.gg/4DUmyfdm";
  };
  const handleTelegram = () => {
    window.location.href = "https://t.me/freedomk_art";
  }

  const handleMintingHref = () => {
    window.location.href = "https://minting.freedomk.art/";
  }


  console.log(clicked)



  return (
    <>

      <header>

        <nav className="desktop_nav">
          <div class="logo">
            <img src="./img/navbar-logo.png" alt="" />
          </div>
          <ul className="desktop">
            <li>
              <a className="link_cursor"> <Link to="collection" spy={true} smooth={true} duration={500}>{navbar_1}</Link></a>
            </li>
            <li>
              <a target="_blank" href="https://minting.freedomk.art">{navbar_2}</a>
            </li>
            <li>
              <a className="link_cursor"><Link to="roadmap" spy={true} smooth={true} duration={500}>{navbar_3}</Link></a>
            </li>
            <li>
              <a className="link_cursor"><Link to="team" spy={true} smooth={true} duration={500} >{navbar_4}</Link></a>
            </li>
            <div className="container_langs">
              <p onMouseLeave={handleLang} onMouseEnter={handleLang}>
                {" "}
                <img src={image_url_father}></img>
                {lang_top} <i class="fa-solid fa-sort-down"></i>
              </p>
              <div
                onMouseLeave={handleLang}
                onMouseEnter={handleLang}
                className={!lang ? "none sub_language" : "sub_language"}
              >
                <small onClick={routeLang}>
                  <img src={image_url_children}></img>
                  {lang_bottom}
                </small>
              </div>
            </div>
          </ul>
          <div class="logosredes">
            <a href="#">
              <img src="/svg/facebook.svg" alt="#" />
            </a>
            <a href="#">
              <img onClick={handleInstagram} src="/svg/instagram.svg" alt="#" />
            </a>
            <a href="#">
              <img onClick={handleTwitter} src="/svg/twitter.svg" alt="#" />
            </a>
            <a href="#">
              <img
                onClick={handleDiscord}
                src="/svg/discord-logo.png"
                alt="#"
              />
            </a>
          </div>
        </nav>

        <nav className="responsiveNav">
          <div class="logo">
            <img src="./img/navbar-logo.png" alt="" />
          </div>
          <ul className="nav_responsive">
            <i onClick={handleMenu} class="fa-solid fa-bars hamburger"></i>
            <div className={!clicked ? "transition_menu none" : "nav_resposive-container"}>
              <li>
                <a href="#">NFT Collection</a>
              </li>
              <li>
                <a href="#">Presale</a>
              </li>
              <li>
                <a href="#">Roadmaps</a>
              </li>
              <li>
                <a href="#">Team</a>
              </li>
            </div>
          </ul>

          <div class="logosredes">
            <a href="#">
              <img src="/svg/facebook.svg" alt="#" />
            </a>
            <a href="#">
              <img onClick={handleInstagram} src="/svg/instagram.svg" alt="#" />
            </a>
            <a href="#">
              <img onClick={handleTwitter} src="/svg/twitter.svg" alt="#" />
            </a>
            <a href="#">
              <img
                onClick={handleDiscord}
                src="/svg/discord-logo.png"
                alt="#"
              />
            </a>
          </div>
          <div className="container_langs">
            <p onMouseLeave={handleLang} onMouseEnter={handleLang}>
              {" "}
              <img src={image_url_father}></img>
              {lang_top} <i class="fa-solid fa-sort-down"></i>
            </p>
            <div
              onMouseLeave={handleLang}
              onMouseEnter={handleLang}
              className={!lang ? "none sub_language" : "sub_language"}
            >
              <small onClick={routeLang}>
                <img src={image_url_children}></img>
                {lang_bottom}
              </small>
            </div>
          </div>
        </nav>

        <section class="header-content">
          <img class="header_img-center" src="./img/section.png" alt=""></img>
          <img
            class="fridapequeno25"
            src="./img/frida-pequeno-25.jpg"
            alt=""
          ></img>
          <img
            class="fridapequeno4"
            src="./img/pequena-frida4.png"
            alt=""
          ></img>
          <img
            class="fridapequeno2"
            src="./img/pequena-frida2.png"
            alt=""
          ></img>
          <img
            class="fridapequeno18"
            src="./img/frida-pequeno-18.jpg"
            alt=""
          ></img>
          <img
            class="fridapequeno14"
            src="./img/frida-pequeno-14.jpg"
            alt=""
          ></img>
          <img
            class="fridamonkey"
            src="./img/fridas-miniaturasm-monkey.jpg"
            alt=""
          ></img>

          <div class="green_square"></div>
          <div class="green_squaretwo"></div>
          <div class="white_square"></div>
          <div class="white_squaretwo"></div>

          <h1>{title}</h1>
          <h2>
            {subtitle}
          </h2>

          <div class="arrowed">
            <div class="arrow-6"></div>
            <div class="arrow-6"></div>
            <div class="arrow-6"></div>
          </div>

          <button onClick={handleMintingHref}>{buttonText}</button>
          <p>{date}</p>
        </section>
        <section class="header-bottom">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 20" preserveAspectRatio="none">
            <path class="elementor-shape-fill"
              d="M0,0v3c0,0,393.8,0,483.4,0c9.2,0,16.6,7.4,16.6,16.6c0-9.1,7.4-16.6,16.6-16.6C606.2,3,1000,3,1000,3V0H0z">
            </path>
          </svg>
        </section>
      </header>
      <section class="sectiontwo" name="collection">
        <div class="about">
          <div class="container-grid">
            <div class="one">
              <div class="primera"></div>
            </div>
            <div class="two"></div>
            <div class="three"></div>
            <div class="four"></div>
            <div class="five"></div>
            <div class="six"></div>
          </div>
          <div class="textabout">
            <p class="nft">{nftTitle}</p>
            <div class="separation"></div>

            <h3>{nftSubtitle}</h3>
            <p>
              {nftText}
            </p>
          </div>
        </div>
      </section>
      <section class="duales">
        <div class="contenedor">
          <div class="cuadrouno">
            <img src="./img/frida-pequeno-17.jpg" alt="" />
            <div className="textocuadradouno">
              <h3>{nftObjetiveTitle}</h3>
              <div className="separationlineone"></div>
              <p>
                {nftObjetiveText}
              </p>
            </div>
          </div>
          <div class="cuadrodos">
            <img src="./img/frida-pequen-18.jpg" alt="" />
            <div className="textocuadradodos">
              <h3>{designTitle}</h3>
              <div className="separationlineone"></div>
              <p>
                {designText}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="frida_cantitys">
        <div class="separation_cantitys"></div>
        <h1>{fridakTitle}</h1>
        <div className="countup-container">

          <div className="countup">
            <p>
              +<CountUp end={30} /> <br></br>
              <small className="smallmodified">{descrip_1}</small>
            </p>
          </div>
          <div className="countup">
            <p>
              <small>{descrip_2}</small> <br></br> <CountUp end={2000} /> <br></br>
              <small className="smallmodified">{descrip_3}</small>
            </p>
          </div>
          <div className="countup">
            <p>
              <CountUp end={10} />% <br></br>
              <small>{descrip_4}</small>
              <small>{descrip_5}</small>
            </p>
          </div>
        </div>
      </section>

      <section className="videos">
        <iframe src={videoSrc} title="Frida Khalo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
      </section>

      <div className="draggable-section">

        <div className="draggable-container_up">
          <Swiper
            data-swiper-autoplay="2000"
            slidesPerView={6}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            spaceBetween={5}
            slidesPerGroup={10}
            loop={true}
            loopFillGroupWithBlank={false}
            pagination={{
              clickable: true,
            }}
            grabCursor={true}
            className="mySwiper"
            breakpoints={{
              "320": {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              "600": {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              "920": {
                slidesPerView: 5,
                spaceBetween: 10,
              },
              "1240": {
                slidesPerView: 6,
                spaceBetween: 10,
              },
              "1440": {
                slidesPerView: 7,
                spaceBetween: 10,
              },
            }}
          >
            <SwiperSlide>
              <div className="carousel_image-one"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="carousel_image-two"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="carousel_image-three"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="carousel_image-four"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="carousel_image-five"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="carousel_image-six"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="carousel_image-seven"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="carousel_image-eight"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="carousel_image-nine"></div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="draggable-container_down">
          <Swiper
            slidesPerView={3}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            grabCursor={true}
            spaceBetween={1}
            slidesPerGroup={10}
            edgeSwipeDetection={true}
            loop={true}
            loopFillGroupWithBlank={false}
            pagination={{
              clickable: true,
            }}

            className="mySwiper"
            breakpoints={{
              "320": {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              "600": {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              "920": {
                slidesPerView: 5,
                spaceBetween: 10,
              },
              "1240": {
                slidesPerView: 6,
                spaceBetween: 10,
              },
              "1440": {
                slidesPerView: 7,
                spaceBetween: 10,
              },
            }}
          >
            <SwiperSlide >
              <div className="down_carousel_image-one"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="down_carousel_image-two"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="down_carousel_image-three"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="down_carousel_image-four"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="down_carousel_image-five"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="down_carousel_image-six"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="down_carousel_image-seven"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="down_carousel_image-eight"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="down_carousel_image-nine"></div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <section className="roadmap" name="roadmap">
        <h1>{roadmap_title}</h1>
        <div class="separation_roadmap"></div>
        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            modules={[Navigation]}
            grabCursor={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            className="mySwiper"
            breakpoints={{
              "980": {
                slidesPerView: 3
              }
            }}
          >
            <SwiperSlide>
              <div className="card-container">
                <h2>00</h2>
                <div className="line"></div>
                <div className="card">
                  <h3>Road 00</h3>
                  <br />
                  <p>{roadmap_1}</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-container">
                <h2>01</h2>
                <div className="line"></div>
                <div className="card">
                  <h3>Road 01</h3>
                  <br />
                  <p>{roadmap_2}</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-container">
                <h2>02</h2>
                <div className="line"></div>
                <div className="card">
                  <h3>Road 02</h3>
                  <br />
                  <p>{roadmap_3}</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-container">
                <h2>03</h2>
                <div className="line"></div>
                <div className="card">
                  <h3>Road 03</h3>
                  <br />
                  <p>{roadmap_4}</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-container">
                <h2>04</h2>
                <div className="line"></div>
                <div className="card">
                  <h3>Road 04</h3>
                  <br />
                  <p>{roadmap_5}</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-container">
                <h2>05</h2>
                <div className="line"></div>
                <div className="card">
                  <h3>Road 05</h3>
                  <br />
                  <p>{roadmap_6}</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-container">
                <h2>06</h2>
                <div className="line"></div>
                <div className="card">
                  <h3>Road 06</h3>
                  <br />
                  <p>{roadmap_7}</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-container">
                <h2>07</h2>
                <div className="line"></div>
                <div className="card">
                  <h3>Road 07</h3>
                  <br />
                  <p>{roadmap_8}</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card-container">
                <h2>08</h2>
                <div className="line"></div>
                <div className="card">
                  <h3>Road 08</h3>
                  <br />
                  <p>{roadmap_9}</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="text-green">{greenText}</div>
        </div>
      </section>
      <section name="team" className="container-networks">
        <h2> Our Team</h2>
        <div className="separation-line"></div>
        <div className="networks">
          <div className="networksone">
            <img src="./img/Danna.jpg" alt="" />
            <h3>Emilia Dannae Rodriguez</h3>
            <br />
            <p>
              {teamText_1}
            </p>
            <br></br>
            <a target="blank" href="https://www.instagram.com/dannaerdz26/"><div className="ig"> </div></a>
          </div>
          <div className="networkstwo">
            <img src="./img/Claudia.jpg" alt="" />
            <h3>Claudia Betancourt Estrada</h3>
            <br />
            <p>
              {teamText_2}
            </p>
            <a target="blank" href="https://www.instagram.com/claubefitness/"><div className="ig"> </div></a>

          </div>
          <div className="networksthree">
            <img src="./img/letty.jpg" alt="" />
            <h3>Lety Martínez</h3>
            <br />
            <p>
              {teamText_3}
            </p>
            <a target="blank" href="https://www.instagram.com/lety_10_11/">
              <div className="ig">
              </div></a>
          </div>
          <div className="networksfour">
            <img src="./img/jack.jpg" alt="" />
            <h3>Jaqueline Espinoza</h3>
            <br />
            <p>
              {teamText_4}
            </p>
            <a target="blank" href="https://www.instagram.com/jack_espinoza_/"><div className="ig"></div></a>
          </div>
        </div>
      </section>

      {/* INICIO FOOTER */}
      <footer className="footer">
        <div className="footer-up">
          <img src="/img/navbar-logo.png" alt="" width={324} />
          <p>{footerText_1}</p>
          <div className="footer-media">
            <button onClick={handleFacebook}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="25px"
                height="25px"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 486.037 1000"
              >
                <path d="M124.074 1000V530.771H0V361.826h124.074V217.525C124.074 104.132 197.365 0 366.243 0C434.619 0 485.18 6.555 485.18 6.555l-3.984 157.766s-51.564-.502-107.833-.502c-60.9 0-70.657 28.065-70.657 74.646v123.361h183.331l-7.977 168.945H302.706V1000H124.074" />
              </svg>
            </button>
            <button onClick={handleTelegram}>
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="25px" height="25px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12S5.373 0 12 0s12 5.373 12 12ZM12.43 8.859c-1.167.485-3.5 1.49-6.998 3.014c-.568.226-.866.447-.893.663c-.046.366.412.51 1.034.705c.085.027.173.054.263.084c.613.199 1.437.432 1.865.441c.389.008.823-.152 1.302-.48c3.268-2.207 4.955-3.322 5.061-3.346c.075-.017.179-.039.249.024c.07.062.063.18.056.212c-.046.193-1.84 1.862-2.77 2.726c-.29.269-.495.46-.537.504c-.094.097-.19.19-.282.279c-.57.548-.996.96.024 1.632c.49.323.882.59 1.273.856c.427.291.853.581 1.405.943c.14.092.274.187.405.28c.497.355.944.673 1.496.623c.32-.03.652-.331.82-1.23c.397-2.126 1.179-6.73 1.36-8.628a2.111 2.111 0 0 0-.02-.472a.506.506 0 0 0-.172-.325c-.143-.117-.365-.142-.465-.14c-.451.008-1.143.249-4.476 1.635Z" clip-rule="evenodd" /></svg>
            </button>
            <button onClick={handleInstagram}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="25px"
                height="25px"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  d="M7.465 1.066C8.638 1.012 9.012 1 12 1c2.988 0 3.362.013 4.534.066c1.172.053 1.972.24 2.672.511c.733.277 1.398.71 1.948 1.27c.56.549.992 1.213 1.268 1.947c.272.7.458 1.5.512 2.67C22.988 8.639 23 9.013 23 12c0 2.988-.013 3.362-.066 4.535c-.053 1.17-.24 1.97-.512 2.67a5.396 5.396 0 0 1-1.268 1.949c-.55.56-1.215.992-1.948 1.268c-.7.272-1.5.458-2.67.512c-1.174.054-1.548.066-4.536.066c-2.988 0-3.362-.013-4.535-.066c-1.17-.053-1.97-.24-2.67-.512a5.397 5.397 0 0 1-1.949-1.268a5.392 5.392 0 0 1-1.269-1.948c-.271-.7-.457-1.5-.511-2.67C1.012 15.361 1 14.987 1 12c0-2.988.013-3.362.066-4.534c.053-1.172.24-1.972.511-2.672a5.396 5.396 0 0 1 1.27-1.948a5.392 5.392 0 0 1 1.947-1.269c.7-.271 1.5-.457 2.67-.511Zm8.98 1.98c-1.16-.053-1.508-.064-4.445-.064c-2.937 0-3.285.011-4.445.064c-1.073.049-1.655.228-2.043.379c-.513.2-.88.437-1.265.822a3.412 3.412 0 0 0-.822 1.265c-.151.388-.33.97-.379 2.043c-.053 1.16-.064 1.508-.064 4.445c0 2.937.011 3.285.064 4.445c.049 1.073.228 1.655.379 2.043c.176.477.457.91.822 1.265c.355.365.788.646 1.265.822c.388.151.97.33 2.043.379c1.16.053 1.507.064 4.445.064c2.938 0 3.285-.011 4.445-.064c1.073-.049 1.655-.228 2.043-.379c.513-.2.88-.437 1.265-.822c.365-.355.646-.788.822-1.265c.151-.388.33-.97.379-2.043c.053-1.16.064-1.508.064-4.445c0-2.937-.011-3.285-.064-4.445c-.049-1.073-.228-1.655-.379-2.043c-.2-.513-.437-.88-.822-1.265a3.413 3.413 0 0 0-1.265-.822c-.388-.151-.97-.33-2.043-.379Zm-5.85 12.345a3.669 3.669 0 0 0 4-5.986a3.67 3.67 0 1 0-4 5.986ZM8.002 8.002a5.654 5.654 0 1 1 7.996 7.996a5.654 5.654 0 0 1-7.996-7.996Zm10.906-.814a1.337 1.337 0 1 0-1.89-1.89a1.337 1.337 0 0 0 1.89 1.89Z"
                  clip-rule="evenodd"
                />
              </svg>{" "}
            </button>
            <button onClick={handleTwitter}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="25px"
                height="25px"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 0 0 2.048-2.578a9.3 9.3 0 0 1-2.958 1.13a4.66 4.66 0 0 0-7.938 4.25a13.229 13.229 0 0 1-9.602-4.868c-.4.69-.63 1.49-.63 2.342A4.66 4.66 0 0 0 3.96 9.824a4.647 4.647 0 0 1-2.11-.583v.06a4.66 4.66 0 0 0 3.737 4.568a4.692 4.692 0 0 1-2.104.08a4.661 4.661 0 0 0 4.352 3.234a9.348 9.348 0 0 1-5.786 1.995a9.5 9.5 0 0 1-1.112-.065a13.175 13.175 0 0 0 7.14 2.093c8.57 0 13.255-7.098 13.255-13.254c0-.2-.005-.402-.014-.602a9.47 9.47 0 0 0 2.323-2.41l.002-.003Z" />
              </svg>{" "}
            </button>
            <button onClick={handleDiscord}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="25px"
                height="25px"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="footer-separation"></div>
        <div className="footer-down">
          <p>{footerText_2}</p>
        </div>
      </footer>
    </>
  );
}
export default App;
