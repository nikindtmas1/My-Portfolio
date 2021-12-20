


function App() {
  return (
    <div>
      <header id="header" className="fixed-top ">
        <div className="container d-flex align-items-center justify-content-between">

          <a href="index.html" className="logo"><img src="assets/img/logo.png" alt="" className="img-fluid" /></a>

          <h1 className="logo"><a href="index.html">Folio</a></h1>

          <nav id="navbar" className="navbar">
            <ul>
              <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
              <li><a className="nav-link scrollto" href="#about">About</a></li>
              <li><a className="nav-link  scrollto" href="#portfolio">Portfolio</a></li>
              <li><a className="nav-link  scrollto" href="#journal">Blog</a></li>
              <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
                <ul>
                  <li><a href="#">Drop Down 1</a></li>
                  <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                    <ul>
                      <li><a href="#">Deep Drop Down 1</a></li>
                      <li><a href="#">Deep Drop Down 2</a></li>
                      <li><a href="#">Deep Drop Down 3</a></li>
                      <li><a href="#">Deep Drop Down 4</a></li>
                      <li><a href="#">Deep Drop Down 5</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Drop Down 2</a></li>
                  <li><a href="#">Drop Down 3</a></li>
                  <li><a href="#">Drop Down 4</a></li>
                </ul>
              </li>
              <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>

        </div>
      </header>

      <div id="hero" className="home">

        <div className="container">
          <div className="hero-content">
            <h1>I'm <span className="typed" data-typed-items="Alex Smith, Designer, Developer, Freelancer, Photographer"></span></h1>
            <p>Designer, Developer, Freelancer, Photographer</p>

            <ul className="list-unstyled list-social">
              <li><a href="#"><i className="bi bi-facebook"></i></a></li>
              <li><a href="#"><i className="bi bi-twitter"></i></a></li>
              <li><a href="#"><i className="bi bi-instagram"></i></a></li>
              <li><a href="#"><i className="bi bi-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
      </div>

      <main id="main">


        <div id="about" className="paddsection">
          <div className="container">
            <div className="row justify-content-between">

              <div className="col-lg-4 ">
                <div className="div-img-bg">
                  <div className="about-img">
                    <img src="assets/img/me.jpg" className="img-responsive" alt="me" />
                  </div>
                </div>
              </div>

              <div className="col-lg-7">
                <div className="about-descr">

                  <p className="p-heading">im a ux /ui designer austin based who loves clean, simple & unique design. i also enjoy crafting brand identities, icons, & ilustration work. </p>
                  <p className="separator">To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family.English person.</p>

                </div>

              </div>
            </div>
          </div>
        </div>
        <div id="services">
          <div className="container">

            <div className="services-slider swiper" data-aos="fade-up" data-aos-delay="100">
              <div className="swiper-wrapper">

                <div className="swiper-slide">
                  <div className="services-block">
                    <i className="bi bi-briefcase"></i>
                    <span>UI/UX DESIGN</span>
                    <p className="separator">To an English person, it will seem like simplified English,told me what </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="services-block">
                    <i className="bi bi-card-checklist"></i>
                    <span>BRAND IDENTITY</span>
                    <p className="separator">To an English person, it will seem like simplified English,told me what </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="services-block">
                    <i className="bi bi-bar-chart"></i>
                    <span>WEB DESIGN</span>
                    <p className="separator">To an English person, it will seem like simplified English,told me what </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="services-block">
                    <i className="bi bi-binoculars"></i>
                    <span>MOBILE APPS</span>
                    <p className="separator">To an English person, it will seem like simplified English,told me what </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="services-block">
                    <i className="bi bi-brightness-high"></i>
                    <span>Analytics</span>
                    <p className="separator">To an English person, it will seem like simplified English,told me what </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="services-block">
                    <i className="bi bi-calendar4-week"></i>
                    <span>PHOTOGRAPHY</span>
                    <p className="separator">To an English person, it will seem like simplified English,told me what </p>
                  </div>
                </div>

              </div>
              <div className="swiper-pagination"></div>
            </div>

          </div>

        </div>
        <div id="portfolio" className="paddsection">

          <div className="container">
            <div className="section-title text-center">
              <h2>My Portfolio</h2>
            </div>
          </div>

          <div className="container">

            <div className="row">
              <div className="col-lg-12 d-flex justify-content-center">
                <ul id="portfolio-flters">
                  <li data-filter="*" className="filter-active">All</li>
                  <li data-filter=".filter-app">App</li>
                  <li data-filter=".filter-card">Card</li>
                  <li data-filter=".filter-web">Web</li>
                </ul>
              </div>
            </div>

            <div className="row portfolio-container">

              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>App 1</h4>
                  <p>App</p>
                  <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 1"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <img src="assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Web 3</h4>
                  <p>Web</p>
                  <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <img src="assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>App 2</h4>
                  <p>App</p>
                  <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 2"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <img src="assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Card 2</h4>
                  <p>Card</p>
                  <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 2"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <img src="assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Web 2</h4>
                  <p>Web</p>
                  <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 2"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <img src="assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>App 3</h4>
                  <p>App</p>
                  <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 3"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>

            </div>

          </div>

        </div>
        <div id="journal" className="text-left paddsection">

          <div className="container">
            <div className="section-title text-center">
              <h2>journal</h2>
            </div>
          </div>

          <div className="container">
            <div className="journal-block">
              <div className="row">

                <div className="col-lg-4 col-md-6">
                  <div className="journal-info">

                    <a href="blog-single.html"><img src="assets/img/blog-post-1.jpg" className="img-responsive" alt="img" /></a>

                    <div className="journal-txt">

                      <h4><a href="blog-single.html">SO LETS MAKE THE MOST IS BEAUTIFUL</a></h4>
                      <p className="separator">To an English person, it will seem like simplified English
                      </p>

                    </div>

                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="journal-info">

                    <a href="blog-single.html"><img src="assets/img/blog-post-2.jpg" className="img-responsive" alt="img" /></a>

                    <div className="journal-txt">

                      <h4><a href="blog-single.html">WE'RE GONA MAKE DREAMS COMES</a></h4>
                      <p className="separator">To an English person, it will seem like simplified English
                      </p>

                    </div>

                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="journal-info">

                    <a href="blog-single.html"><img src="assets/img/blog-post-3.jpg" className="img-responsive" alt="img" /></a>

                    <div className="journal-txt">

                      <h4><a href="blog-single.html">NEW LIFE CIVILIZATIONS TO BOLDLY</a></h4>
                      <p className="separator">To an English person, it will seem like simplified English
                      </p>

                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
        <div id="contact" className="paddsection">
          <div className="container">
            <div className="contact-block1">
              <div className="row">

                <div className="col-lg-6">
                  <div className="contact-contact">

                    <h2 className="mb-30">GET IN TOUCH</h2>

                    <ul className="contact-details">
                      <li><span>23 Main, Street</span></li>
                      <li><span>New York, United States</span></li>
                      <li><span>+88 01912704287</span></li>
                      <li><span>example@example.com</span></li>
                    </ul>

                  </div>
                </div>

                <div className="col-lg-6">
                  <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                    <div className="row gy-3">

                      <div className="col-lg-6">
                        <div className="form-group contact-block1">
                          <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="form-group">
                          <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="form-group">
                          <textarea className="form-control" name="message" placeholder="Message" required></textarea>
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="loading">Loading</div>
                        <div className="error-message"></div>
                        <div className="sent-message">Your message has been sent. Thank you!</div>
                      </div>

                      <div className="mt-0">
                        <input type="submit" className="btn btn-defeault btn-send" value="Send message" />
                      </div>

                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>

      <div id="footer" className="text-center">
        <div className="container">
          <div className="socials-media text-center">

            <ul className="list-unstyled">
              <li><a href="#"><i className="bi bi-facebook"></i></a></li>
              <li><a href="#"><i className="bi bi-twitter"></i></a></li>
              <li><a href="#"><i className="bi bi-instagram"></i></a></li>
              <li><a href="https://www.linkedin.com/in/nikolay-nikolaev-4555631a7/"><i className="bi bi-linkedin"></i></a></li>
            </ul>

          </div>

          <p>&copy; Copyrights Folio. All rights reserved.</p>

          <div className="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
