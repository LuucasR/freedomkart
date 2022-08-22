import React, { useEffect, useState} from "react";
import "./styles/main.css";
// import './styles/footer.scss'

import CountUp from "react-countup";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

function App({ props }) {
        // const {
        //     link_1,
        //     link_2,
        //     link_3,
        //     link_4,
        //     lang_top_mobile,
        //     lang_bottom_mobile,
        //     image_url_father,
        //     locate_href,
        //     image_url_children,
        //   } = props;

    
  const [clicked, setClicked] = useState(false);
  const [modal, setModal] = useState(false);
  const [lang, setLang] = useState(false);

      const routeImage = () => {
        window.location.href = "https://freedomk.art/";
      };
    
      const handleLang = () => {
        if (lang) {
          setTimeout(function () {
            setLang(false);
          }, 1000);
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
    
    //   const routeLang = () => {
    //     window.location.href = locate_href;
    //   };
    

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
            window.location.href = "https://discord.gg/uEp3vvYF";
        };

  return (
    <>
      <header>
        <nav>
          <div class="logo">
            <img src="./Logosredes/navbar-logo.png" alt="" />
          </div>
          <ul>
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
            <li>
              <a href="#">Español</a>
            </li>
          </ul>
          <div class="logosredes">
            <a href="#">
              {/* <svg xmlns="http://www.w3.org/2000/svg" fill="#ffff" aria-hidden="true" role="img" 
                         preserveAspectRatio="xMidYMid meet" viewBox="0 0 486.037 1000">
                        <path
                            d="M124.074 1000V530.771H0V361.826h124.074V217.525C124.074 104.132 197.365 0 366.243 0C434.619 0 485.18 6.555 485.18 6.555l-3.984 157.766s-51.564-.502-107.833-.502c-60.9 0-70.657 28.065-70.657 74.646v123.361h183.331l-7.977 168.945H302.706V1000H124.074" />
                    </svg> */}
            </a>
            <a href="#">
              {/* <svg xmlns="http://www.w3.org/2000/svg" fill="#ffff" aria-hidden="true" role="img" 
                        preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path
                            d="M7.465 1.066C8.638 1.012 9.012 1 12 1c2.988 0 3.362.013 4.534.066c1.172.053 1.972.24 2.672.511c.733.277 1.398.71 1.948 1.27c.56.549.992 1.213 1.268 1.947c.272.7.458 1.5.512 2.67C22.988 8.639 23 9.013 23 12c0 2.988-.013 3.362-.066 4.535c-.053 1.17-.24 1.97-.512 2.67a5.396 5.396 0 0 1-1.268 1.949c-.55.56-1.215.992-1.948 1.268c-.7.272-1.5.458-2.67.512c-1.174.054-1.548.066-4.536.066c-2.988 0-3.362-.013-4.535-.066c-1.17-.053-1.97-.24-2.67-.512a5.397 5.397 0 0 1-1.949-1.268a5.392 5.392 0 0 1-1.269-1.948c-.271-.7-.457-1.5-.511-2.67C1.012 15.361 1 14.987 1 12c0-2.988.013-3.362.066-4.534c.053-1.172.24-1.972.511-2.672a5.396 5.396 0 0 1 1.27-1.948a5.392 5.392 0 0 1 1.947-1.269c.7-.271 1.5-.457 2.67-.511Zm8.98 1.98c-1.16-.053-1.508-.064-4.445-.064c-2.937 0-3.285.011-4.445.064c-1.073.049-1.655.228-2.043.379c-.513.2-.88.437-1.265.822a3.412 3.412 0 0 0-.822 1.265c-.151.388-.33.97-.379 2.043c-.053 1.16-.064 1.508-.064 4.445c0 2.937.011 3.285.064 4.445c.049 1.073.228 1.655.379 2.043c.176.477.457.91.822 1.265c.355.365.788.646 1.265.822c.388.151.97.33 2.043.379c1.16.053 1.507.064 4.445.064c2.938 0 3.285-.011 4.445-.064c1.073-.049 1.655-.228 2.043-.379c.513-.2.88-.437 1.265-.822c.365-.355.646-.788.822-1.265c.151-.388.33-.97.379-2.043c.053-1.16.064-1.508.064-4.445c0-2.937-.011-3.285-.064-4.445c-.049-1.073-.228-1.655-.379-2.043c-.2-.513-.437-.88-.822-1.265a3.413 3.413 0 0 0-1.265-.822c-.388-.151-.97-.33-2.043-.379Zm-5.85 12.345a3.669 3.669 0 0 0 4-5.986a3.67 3.67 0 1 0-4 5.986ZM8.002 8.002a5.654 5.654 0 1 1 7.996 7.996a5.654 5.654 0 0 1-7.996-7.996Zm10.906-.814a1.337 1.337 0 1 0-1.89-1.89a1.337 1.337 0 0 0 1.89 1.89Z"
                            clipRule="evenodd" />
                    </svg> */}
            </a>
            <a href="#">
              {/* <svg xmlns="http://www.w3.org/2000/svg" fill="#ffff" aria-hidden="true" role="img" 
                        preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path
                            d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 0 0 2.048-2.578a9.3 9.3 0 0 1-2.958 1.13a4.66 4.66 0 0 0-7.938 4.25a13.229 13.229 0 0 1-9.602-4.868c-.4.69-.63 1.49-.63 2.342A4.66 4.66 0 0 0 3.96 9.824a4.647 4.647 0 0 1-2.11-.583v.06a4.66 4.66 0 0 0 3.737 4.568a4.692 4.692 0 0 1-2.104.08a4.661 4.661 0 0 0 4.352 3.234a9.348 9.348 0 0 1-5.786 1.995a9.5 9.5 0 0 1-1.112-.065a13.175 13.175 0 0 0 7.14 2.093c8.57 0 13.255-7.098 13.255-13.254c0-.2-.005-.402-.014-.602a9.47 9.47 0 0 0 2.323-2.41l.002-.003Z" />
                    </svg> */}
            </a>
            <a href="#">
              {/* <svg fill="#ffff" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img"
                        preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024">
                        <path
                            d="M941.3 296.1a112.3 112.3 0 0 0-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0 0 82.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133l-232 135z" />
                    </svg> */}
            </a>
            <a href="#">
              {/* <svg fill="#ffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" >
                        <path d="M941.3 296.1a112.3 112.3 0 0 0-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0 0 82.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133l-232 135z"/>
                    </svg> */}
            </a>
            <a href="#">
              {/* <svg fill="#Ffff" xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 48 48" >
                        <path style="stroke:none;fill-rule:nonzero;fill-opacity:1;"
                            d="M 40 12 C 40 12 35.414062 8.410156 30 8 L 29.511719 8.976562 C 34.40625 10.175781 36.652344 11.890625 39 14 C 34.953125 11.933594 30.960938 10 24 10 C 17.039062 10 13.046875 11.933594 9 14 C 11.347656 11.890625 14.019531 9.984375 18.488281 8.976562 L 18 8 C 12.320312 8.535156 8 12 8 12 C 8 12 2.878906 19.425781 2 34 C 7.160156 39.953125 15 40 15 40 L 16.640625 37.816406 C 13.855469 36.847656 10.714844 35.121094 8 32 C 11.238281 34.449219 16.125 37 24 37 C 31.875 37 36.761719 34.449219 40 32 C 37.285156 35.121094 34.144531 36.847656 31.359375 37.816406 L 33 40 C 33 40 40.839844 39.953125 46 34 C 45.121094 19.425781 40 12 40 12 Z M 17.5 30 C 15.566406 30 14 28.210938 14 26 C 14 23.789062 15.566406 22 17.5 22 C 19.433594 22 21 23.789062 21 26 C 21 28.210938 19.433594 30 17.5 30 Z M 30.5 30 C 28.566406 30 27 28.210938 27 26 C 27 23.789062 28.566406 22 30.5 22 C 32.433594 22 34 23.789062 34 26 C 34 28.210938 32.433594 30 30.5 30 Z M 30.5 30 " />
                    </svg> */}
            </a>
          </div>
        </nav>
        {/* <nav className="responsiveNav">
          <img
            className="responsive-logo"
            src="/images/navbar-logo.png"
            alt=""
            width={350}
          />
          <div className="responsiveNav-main">
            <button onClick={handleClick} class="responsiveNav-ham">
              <div></div>
              <div></div>
              <div></div>
            </button>
            <ul className="responsiveNav-media">
              <a href="https://www.facebook.com/Freedomkart-110389825084974">
                <img src="/svg/facebook.svg" alt="#" />
              </a>
              <a href="https://www.instagram.com/freedomk_art/">
                <img src="/svg/instagram.svg" alt="#" />
              </a>
              <a href="https://twitter.com/freedomkart">
                <img src="/svg/twitter.svg" alt="#" />
              </a>
              <a href="https://discord.gg/uEp3vvYF">
                <img src="/svg/discord-logo.png" alt="#" />
              </a>
            </ul>
            <div className="container_langs_mobile">
              <p onClick={handleMobileLang}>
                {" "}
                <img src={image_url_father}></img>
               2 <i class="fa-solid fa-sort-down"></i>
              </p>
              <div className={!lang ? "none sub_language" : "sub_language"}>
                <small onClick={routeLang}>
                  <img src={image_url_children}></img>
                  3
                </small>
              </div>
            </div>
          </div>
          {clicked ? (
            <ul className="showNav">
              <li onClick={handleClick}>
                <a href="#">1</a>
              </li>
              <li onClick={handleClick}>
                <a href="#">1</a>
              </li>
              <li onClick={handleClick}>
                <a href="#">1</a>
              </li>
              <li onClick={handleClick}>
                <a href="#">1</a>
              </li>
            </ul>
          ) : (
            <div display="none"></div>
          )}
        </nav> */}



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

          <h1>FREEDOMK NFT ART Collection</h1>
          <h2>
            The first NFT handmade collection inspired in Frida K. entirely
            painted by Latin American artists.
          </h2>

          <div class="arrowed">
            <div class="arrow-6"></div>
            <div class="arrow-6"></div>
            <div class="arrow-6"></div>
          </div>

          <button>Pre-sale of the first Freedomk ART NFTs</button>
          <p>Until Sep 15th</p>
        </section>
        <section class="header-bottom">
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 20" preserveAspectRatio="none">
                <path class="elementor-shape-fill"
                    d="M0,0v3c0,0,393.8,0,483.4,0c9.2,0,16.6,7.4,16.6,16.6c0-9.1,7.4-16.6,16.6-16.6C606.2,3,1000,3,1000,3V0H0z">
                </path>
            </svg> */}
        </section>
      </header>
      <section class="sectiontwo">
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
            <p class="nft"> NFT Project</p>
            <div class="separation"></div>
            <h3> About the collection</h3>
            <p>
              The Freedomk collection is the first comprehensive collection of
              NFTs in which each piece has been made entirely by hand without
              the use of repeated patterns or stencil combinations. It is real
              art, so each NFT is truly unpublished and unique. With the
              participation of more than 30 Latin Americans artists, we have
              managed to obtain an extremely beautiful, profound, and sublime
              collection that reflects the diversity of ideas, styles, and
              techniques, all inspired by Frida’s own revolutionary works and
              ideas, in which we try to capture her ideals of inclusion,
              equality, emotion, and enjoyment of life. So, it will be a delight
              for art lovers to visit and appreciate piece by piece each NFT, in
              contrast to other collections in which after seeing some of them
              you can imagine what the rest of the collection is like, thus
              avoiding that feeling of emptiness and lack of art.
              <br></br>
              <br></br>
              As each piece is truly unique, the uniqueness and value will be
              given by the taste of the public, who will prefer some works over
              others, not simply by the little use of a stencil.
              <br></br>
              <br></br>
              In our world, it is well known that buying a work of art is a
              valuable and solid investment, but NFTs collections were missing
              something: exclusivity and true art, and this is the first
              collection to achieve it.
              <br></br>
              <br></br>
              We faithfully believe that this collection will change the trend
              of NFTs and there will be a before and after.
              <br></br>
              <br></br>
              We have also used Frida because we believe in equality and the
              need to support women in some areas and sectors to live in harmony
              without the pressure of abuse, injustice, mistreatment, or
              violence. That is why a percentage of the sales will be directly
              donated to foundations that defend and protect women. Our team is
              feminist and we believe in and stand for the equality of rights
              and conditions for men and women so that they can exist in harmony
              and happiness.
            </p>
          </div>
        </div>
      </section>
      <section class="duales">
        <div class="contenedor">
          <div class="cuadrouno">
            <img src="./img/frida-pequeno-17.jpg" alt="" />
            <div className="textocuadradouno">
              <h3>NFT Project Objective</h3>
              <div className="separationlineone"></div>
              <p>
                Part of our goal is to retake and rescue the values of art, that
                is why we have used Frida, a figure that broke with the schemes
                of her time in every sense of the word.
              </p>
            </div>
          </div>
          <div class="cuadrodos">
            <img src="./img/frida-pequen-18.jpg" alt="" />
            <div className="textocuadradodos">
              <h3>Design and techniques used</h3>
              <div className="separationlineone"></div>
              <p>
                Oil, acrylic, watercolor, and graphite techniques have been
                used, achieving realistic, impressionistic, caricatural,
                minimalist, surrealist, hyper-realistic, pop art, cubic, modern,
                and some distinctive works of some of our artists.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="frida_cantitys">
        <h1>NFT Fridak</h1>

        <div className="countup-container">
          <div className="countup">
            <a href="#">
              +<CountUp end={30} /> <br></br>
              <small>Latin American Artists</small>
            </a>
          </div>
          <div className="countup">
            <a href="#">
              <small>Just</small> <br></br> <CountUp end={2000} /> <br></br>
              <small>handmade NFTs</small>
            </a>
          </div>
          <div className="countup">
            <a href="#">
              {" "}
              <CountUp end={10} />% <br></br>
              <small>Support pro women fundactions</small>
            </a>
          </div>
        </div>
      </section>

      <div className="draggable-section">
        <div className="draggable-container_up">
          <Swiper
            slidesPerView={6}
            spaceBetween={5}
            slidesPerGroup={10}
            loop={true}
            loopFillGroupWithBlank={false}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 4,
                spaceBetween: 50,
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
            slidesPerView={6}
            spaceBetween={1}
            slidesPerGroup={10}
            loop={true}
            loopFillGroupWithBlank={false}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            breakpoints={{
              "@0.00": {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 5,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 6,
                spaceBetween: 50,
              },
            }}
          >
            <SwiperSlide>
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

      <section className="roadmap">
        <h1>Roadmaps Chronology of the launch</h1>

        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section className="container-networks">
        <h2> Our Team</h2>
        <div className="separation-line"></div>
        <div className="networks">
          <div className="networksone">
            <img src="./img/Danna.jpg" alt="" />
            <h3>Emilia Dannae Rodriguez</h3>
            <br />
            <p>
              Fall in love with yourself, with life and then with whoever you
              want F.K.
            </p>
            <div className="ig"> </div>
          </div>
          <div className="networkstwo">
            <img src="./img/Claudia.jpg" alt="" />
            <h3>Claudia Betancourt Estrada</h3>
            <br />
            <p>
              My blood is a miracle that, from my veins, crosses the air from my
              heart to yours F.K.
            </p>
            <div className="ig"> </div>
          </div>
          <div className="networksthree">
            <img src="./img/letty.jpg" alt="" />
            <h3>Lety Martínez</h3>
            <br />
            <p>
              If you act like you know what you’re doing, you can do whatever
              you want F.K.
            </p>
            <div className="ig"> </div>
          </div>
          <div className="networksfour">
            <img src="./img/jack.jpg" alt="" />
            <h3>Jaqueline Espinoza</h3>
            <br />
            <p>
              I am my own muse, I am the person I know best. The subject I want
              to know better F.K.
            </p>
            <div className="ig"> </div>
          </div>
        </div>
      </section>

      {/* INICIO FOOTER */}
      <footer className="footer">
        <div className="footer-up">
          <img src="/img/navbar-logo.png" alt="" width={324} />
          <p>The Freedomk Art collection is the first comprehensive collection of NFTs in which each piece has been made entirely by hand without the use of repeated patterns or stencil combinations</p>
          <div className="footer-media">
            <button>
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
            <button>
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
            <button>
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
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="25px"
                height="25px"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 1024 1024"
              >
                <path d="M941.3 296.1a112.3 112.3 0 0 0-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0 0 82.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133l-232 135z" />
              </svg>{" "}
            </button>
          </div>
        </div>
        <div className="footer-separation"></div>
        <div className="footer-down">
          <p>© 2022 FridaK. All rights reserved</p>
          <p>Diseñado por kratem.net</p>
        </div>
      </footer>
    </>
  );
}
export default App;
