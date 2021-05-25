import React from "react";
import useTranslation from "next-translate/useTranslation";

const Footer = () => {
  const { t } = useTranslation("home");

  return (
    <div className="footer" id="contact">
      <div className="container">
        <div>
          <img
            className="logo-travelook-symbol"
            src="/assets/img/travelook-img/logo-travelook-onecolor-symbol.png"
            alt="logo-travelook"
          />
        </div>
        <div className="line-bottom"></div>
        <div className="list-menu-footer">
          <div className="row box-row-parent">
            <div className="col-md-3">
              <p className="title-list-menu-footer">
                {t("TRAVELOOK-COMPANY-LIMITED")}
              </p>
              <p>
                <span className="MST">{t("MST")}</span> 4201900664
              </p>
            </div>
            <div className="col-md-4">
              <p className="title-list-menu-footer">
                {t("Ho-Chi-Minh-Office")}
              </p>
              <p>
                <span>{t("Address")}</span>
                {t("address-company")}
                <br />
                {t("ward-address-company")}
              </p>
              <p>
                <span>{t("Hotline")}</span>
                <span className="name-phone">
                  <a href="tel:0981305549" className="contact-us">
                    +84 981 30 55 49
                  </a>
                </span>
              </p>
              <p>
                <span>{t("Email-company")}</span>
                <span className="name-mail">
                  <a href="mailto:hello@travelook.vn" className="contact-us">
                    hello@travelook.vn
                  </a>
                </span>
              </p>
            </div>
            <div className="col-md-5 footer-icon">
              <div className="row">
                <div className="col-6">
                  <p className="title-list-menu-footer">{t("Community")}</p>
                  <div className="community">
                    <span>
                      <a
                        href="https://www.facebook.com/travelook.vn"
                        target="_blank"
                      >
                        <img
                          src="/assets/img/travelook-img/icon-fb.svg"
                          alt="icon-fb"
                        />
                      </a>
                    </span>
                    <span>
                      <a href="mailto:hello@travelook.vn">
                        <img
                          src="/assets/img/travelook-img/icon-mail.svg"
                          alt="icon-email"
                        />
                      </a>
                    </span>
                    <span>
                      <img
                        src="/assets/img/travelook-img/icon-insta.svg"
                        alt="icon-insta"
                      />
                    </span>
                    <span>
                      <img
                        src="/assets/img/travelook-img/icon-ytb.svg"
                        alt="icon-ytb"
                      />
                    </span>
                  </div>
                </div>
                <div className="col-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.57964791799!2d106.72373231535623!3d10.766843762313274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317525f523bba99f%3A0xc8720e85dce48033!2zMTUgTmd1eeG7hW4gQ8ahIFRo4bqhY2gsIEFuIEzhu6NpIMSQw7RuZywgUXXhuq1uIDIsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1619088499949!5m2!1svi!2s"
                    width="100%"
                    style={{ border: "none", borderRadius: "7px" }}
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="copy-right">{t("copy-right")}</p>
      </div>
    </div>
  );
};

export default Footer;
