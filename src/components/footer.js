import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid">
      <footer className="page-footer font-small cyan darken-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12 py-5">
              <div className="mb-5 flex-center">
                <a className="fb-ic" href="https://www.facebook.com/0mdsumon1">
                  <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x">
                    {" "}
                  </i>
                </a>
                <a className="tw-ic" href="https://twitter.com/SumonHasibur">
                  <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x">
                    {" "}
                  </i>
                </a>
                <a className="gplus-ic">
                  <i className="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x">
                    {" "}
                  </i>
                </a>

                <a
                  className="li-ic"
                  href="https://www.linkedin.com/in/md-hasibur-sumon-891213165/"
                >
                  <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x">
                    {" "}
                  </i>
                </a>

                <a
                  className="ins-ic"
                  href="https://www.instagram.com/sumon751423/?hl=en"
                >
                  <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x">
                    {" "}
                  </i>
                </a>
                <a className="pin-ic">
                  <i className="fab fa-pinterest fa-lg white-text fa-2x"> </i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3">
          © 2018 Copyright:
          <a href="https://mdbootstrap.com/education/bootstrap/">
            {" "}
            MDBootstrap.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
