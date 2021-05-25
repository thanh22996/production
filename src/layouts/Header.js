import React, { useState, useEffect } from "react";
import Link from "next/link";

function Header(props) {
  const handle = {
    logout: () => {
      console.log("object");
    },
  };
  return (
    <div className="header-bg">
      <header id="topnav">
        <div className="topbar-main">
          <div className="container-fluid">
            <div className="logo">
              <a href="index.html" className="logo">
                <img
                  src="assets/images/logo-sm.png"
                  alt=""
                  className="logo-small"
                />
                <img
                  src="assets/images/logo-light.png"
                  alt=""
                  className="logo-large"
                />
              </a>
            </div>
            <div className="menu-extras topbar-custom">
              <ul className="navbar-right list-inline float-right mb-0">
                <li className="dropdown notification-list list-inline-item d-none d-md-inline-block">
                  <form role="search" className="app-search">
                    <div className="form-group mb-0">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search.."
                      />
                      <button type="submit">
                        <i className="fa fa-search" />
                      </button>
                    </div>
                  </form>
                </li>
                <li className="dropdown notification-list list-inline-item d-none d-md-inline-block">
                  <a
                    className="nav-link dropdown-toggle arrow-none"
                    data-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-haspopup="false"
                    aria-expanded="false"
                  >
                    <img
                      src="assets/images/flags/us_flag.jpg"
                      className="mr-2"
                      height={12}
                      alt=""
                    />{" "}
                    English <span className="mdi mdi-chevron-down" />
                  </a>
                  <div className="dropdown-menu dropdown-menu-right language-switch">
                    <a className="dropdown-item" href="#">
                      <img
                        src="assets/images/flags/germany_flag.jpg"
                        alt=""
                        height={16}
                      />
                      <span> German </span>
                    </a>
                    <a className="dropdown-item" href="#">
                      <img
                        src="assets/images/flags/italy_flag.jpg"
                        alt=""
                        height={16}
                      />
                      <span> Italian </span>
                    </a>
                    <a className="dropdown-item" href="#">
                      <img
                        src="assets/images/flags/french_flag.jpg"
                        alt=""
                        height={16}
                      />
                      <span> French </span>
                    </a>
                    <a className="dropdown-item" href="#">
                      <img
                        src="assets/images/flags/spain_flag.jpg"
                        alt=""
                        height={16}
                      />
                      <span> Spanish </span>
                    </a>
                    <a className="dropdown-item" href="#">
                      <img
                        src="assets/images/flags/russia_flag.jpg"
                        alt=""
                        height={16}
                      />
                      <span> Russian </span>
                    </a>
                  </div>
                </li>
                <li className="dropdown notification-list list-inline-item d-none d-md-inline-block">
                  <a className="nav-link" href="#" id="btn-fullscreen">
                    <i className="ion ion-md-qr-scanner noti-icon" />
                  </a>
                </li>
                <li className="dropdown notification-list list-inline-item">
                  <div className="dropdown notification-list nav-pro-img">
                    <a
                      className="dropdown-toggle nav-link arrow-none nav-user"
                      data-toggle="dropdown"
                      href="#"
                      role="button"
                      aria-haspopup="false"
                      aria-expanded="false"
                    >
                      <img
                        src="assets/images/users/user-4.jpg"
                        alt="user"
                        className="rounded-circle"
                      />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right profile-dropdown ">
                      {/* item*/}
                      <a className="dropdown-item" href="#">
                        <i className="mdi mdi-account-circle" /> Profile
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="mdi mdi-wallet" /> My Wallet
                      </a>
                      <a className="dropdown-item d-block" href="#">
                        <span className="badge badge-success float-right">
                          11
                        </span>
                        <i className="mdi mdi-settings" /> Settings
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="mdi mdi-lock-open-outline" /> Lock screen
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item text-danger" href="#">
                        <i className="mdi mdi-power text-danger" /> Logout
                      </a>
                    </div>
                  </div>
                </li>
                <li className="menu-item list-inline-item">
                  {/* Mobile menu toggle*/}
                  <a className="navbar-toggle nav-link">
                    <div className="lines">
                      <span />
                      <span />
                      <span />
                    </div>
                  </a>
                  {/* End mobile menu toggle*/}
                </li>
              </ul>
            </div>
            {/* end menu-extras */}
            <div className="clearfix" />
          </div>{" "}
          {/* end container */}
        </div>
        {/* end topbar-main */}
        {/* MENU Start */}
        <div className="navbar-custom">
          <div className="container-fluid">
            <div id="navigation">
              {/* Navigation Menu*/}
              <ul className="navigation-menu">
                <li className="has-submenu">
                  <a href="index.html">
                    <i className="ion ion-md-speedometer" />
                    Dashboard
                  </a>
                </li>
                <li className="has-submenu">
                  <a href="#">
                    <i className="ion ion-md-help-buoy" />
                    UI Elements <i className="mdi mdi-chevron-down mdi-drop" />
                  </a>
                  <ul className="submenu megamenu">
                    <li>
                      <ul>
                        <li>
                          <a href="ui-alerts.html">Alerts</a>
                        </li>
                        <li>
                          <a href="ui-buttons.html">Buttons</a>
                        </li>
                        <li>
                          <a href="ui-cards.html">Cards</a>
                        </li>
                        <li>
                          <a href="ui-carousel.html">Carousel</a>
                        </li>
                        <li>
                          <a href="ui-general.html">General UI</a>
                        </li>
                        <li>
                          <a href="ui-grid.html">Grid</a>
                        </li>
                        <li>
                          <a href="ui-images.html">Images</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <ul>
                        <li>
                          <a href="ui-lightbox.html">Lightbox</a>
                        </li>
                        <li>
                          <a href="ui-modals.html">Modals</a>
                        </li>
                        <li>
                          <a href="ui-rangeslider.html">Range Slider</a>
                        </li>
                        <li>
                          <a href="ui-sweet-alert.html">Sweet-Alert</a>
                        </li>
                        <li>
                          <a href="ui-tabs-accordions.html">
                            Tabs &amp; Accordions
                          </a>
                        </li>
                        <li>
                          <a href="ui-typography.html">Typography</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <a href="#">
                    <i className="ion ion-md-grid" />
                    Apps <i className="mdi mdi-chevron-down mdi-drop" />
                  </a>
                  <ul className="submenu">
                    <li className="has-submenu">
                      <a href="#">Email</a>
                      <ul className="submenu">
                        <li>
                          <a href="email-inbox.html">Inbox</a>
                        </li>
                        <li>
                          <a href="email-read.html">Email Read</a>
                        </li>
                        <li>
                          <a href="email-compose.html">Email Compose</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="calendar.html">Calendar</a>
                    </li>
                    <li className="has-submenu">
                      <a href="#">Ecommerce</a>
                      <ul className="submenu">
                        <li>
                          <a href="ecommerce-products.html">Products</a>
                        </li>
                        <li>
                          <a href="ecommerce-products-list.html">
                            Products List
                          </a>
                        </li>
                        <li>
                          <a href="ecommerce-order-history.html">
                            Order History
                          </a>
                        </li>
                        <li>
                          <a href="ecommerce-customers.html">Customers</a>
                        </li>
                        <li>
                          <a href="ecommerce-product-edit.html">Product Edit</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="projects.html">Projects</a>
                    </li>
                    <li className="has-submenu">
                      <a href="#">Layouts</a>
                      <ul className="submenu">
                        <li>
                          <a href="layouts-header-dark.html">Header Dark</a>
                        </li>
                        <li>
                          <a href="layouts-topbar-light.html">Topbar Light</a>
                        </li>
                        <li>
                          <a href="layouts-width.html">Layout width</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <a href="#">
                    <i className="ion ion-md-options" />
                    Components <i className="mdi mdi-chevron-down mdi-drop" />
                  </a>
                  <ul className="submenu">
                    <li className="has-submenu">
                      <a href="#">Forms</a>
                      <ul className="submenu">
                        <li>
                          <a href="form-elements.html">Form Elements</a>
                        </li>
                        <li>
                          <a href="form-validation.html">Form Validation</a>
                        </li>
                        <li>
                          <a href="form-advanced.html">Form Advanced</a>
                        </li>
                        <li>
                          <a href="form-editors.html">Form Editors</a>
                        </li>
                        <li>
                          <a href="form-uploads.html">Form File Upload</a>
                        </li>
                        <li>
                          <a href="form-xeditable.html">Form Xeditable</a>
                        </li>
                        <li>
                          <a href="form-wizard.html">Form Wizard</a>
                        </li>
                        <li>
                          <a href="form-mask.html">Form Mask</a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a href="#">Charts</a>
                      <ul className="submenu">
                        <li>
                          <a href="charts-apex.html">Apex Chart</a>
                        </li>
                        <li>
                          <a href="charts-echart.html">E - Chart</a>
                        </li>
                        <li>
                          <a href="charts-morris.html">Morris Chart</a>
                        </li>
                        <li>
                          <a href="charts-chartist.html">Chartist Chart</a>
                        </li>
                        <li>
                          <a href="charts-chartjs.html">Chartjs Chart</a>
                        </li>
                        <li>
                          <a href="charts-flot.html">Flot Chart</a>
                        </li>
                        <li>
                          <a href="charts-knob.html">Jquery Knob Chart</a>
                        </li>
                        <li>
                          <a href="charts-sparkline.html">Sparkline Chart</a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a href="#">Tables</a>
                      <ul className="submenu">
                        <li>
                          <a href="tables-basic.html">Basic Tables</a>
                        </li>
                        <li>
                          <a href="tables-datatable.html">Data Table</a>
                        </li>
                        <li>
                          <a href="tables-responsive.html">Responsive Table</a>
                        </li>
                        <li>
                          <a href="tables-editable.html">Editable Table</a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a href="#">Icons</a>
                      <ul className="submenu">
                        <li>
                          <a href="icons-material.html">Material Design</a>
                        </li>
                        <li>
                          <a href="icons-fontawesome.html">Font Awesome</a>
                        </li>
                        <li>
                          <a href="icons-ion.html">Ion Icons</a>
                        </li>
                        <li>
                          <a href="icons-themify.html">Themify Icons</a>
                        </li>
                        <li>
                          <a href="icons-dripicons.html">Dripicons</a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a href="#">Maps</a>
                      <ul className="submenu">
                        <li>
                          <a href="maps-google.html"> Google Map</a>
                        </li>
                        <li>
                          <a href="maps-vector.html"> Vector Map</a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a href="#">Email Templates</a>
                      <ul className="submenu">
                        <li>
                          <a href="email-template-basic.html">
                            Basic Action Email
                          </a>
                        </li>
                        <li>
                          <a href="email-template-alert.html">Alert Email</a>
                        </li>
                        <li>
                          <a href="email-template-billing.html">
                            Billing Email
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <a href="#">
                    <i className="ion ion-md-wifi" /> Authentication{" "}
                    <i className="mdi mdi-chevron-down mdi-drop" />
                  </a>
                  <ul className="submenu megamenu">
                    <li>
                      <ul>
                        <li>
                          <a href="auth-login.html">Login One</a>
                        </li>
                        <li>
                          <a href="auth-register.html">Register One</a>
                        </li>
                        <li>
                          <a href="auth-recoverpw.html">Recover Password One</a>
                        </li>
                        <li>
                          <a href="auth-lock-screen.html">Lock Screen One</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <ul>
                        <li>
                          <a href="auth-login-2.html">Login Two</a>
                        </li>
                        <li>
                          <a href="auth-register-2.html">Register Two</a>
                        </li>
                        <li>
                          <a href="auth-recoverpw-2.html">
                            Recover Password Two
                          </a>
                        </li>
                        <li>
                          <a href="auth-lock-screen-2.html">Lock Screen Two</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <a href="#">
                    <i className="ion ion-md-copy" />
                    Extra Pages <i className="mdi mdi-chevron-down mdi-drop" />
                  </a>
                  <ul className="submenu megamenu">
                    <li>
                      <ul>
                        <li>
                          <a href="pages-blank.html">Blank Page</a>
                        </li>
                        <li>
                          <a href="pages-timeline.html">Timeline</a>
                        </li>
                        <li>
                          <a href="pages-invoice.html">Invoice</a>
                        </li>
                        <li>
                          <a href="pages-pricing.html">Pricing</a>
                        </li>
                        <li>
                          <a href="pages-maintenance.html">Maintenance</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <ul>
                        <li>
                          <a href="pages-faq.html">Faq</a>
                        </li>
                        <li>
                          <a href="pages-404.html">Error 404</a>
                        </li>
                        <li>
                          <a href="pages-500.html">Error 500</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="page-title-box">
              <div className="row align-items-center">
                <div className="col-sm-6">
                  <h4 className="page-title">Products</h4>
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="javascript:void(0);">
                        <i className="mdi mdi-home-outline" />
                      </a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="javascript:void(0);">Ecommerce</a>
                    </li>
                    <li className="breadcrumb-item active">Products</li>
                  </ol>
                </div>
                <div className="col-sm-6">
                  <div className="float-right d-none d-md-block">
                    <div className="dropdown">
                      <button
                        className="btn btn-danger dropdown-toggle arrow-none waves-effect waves-light"
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="mdi mdi-settings mr-2" /> Settings
                      </button>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#">
                          Separated link
                        </a>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                {/* end col*/}
              </div>{" "}
              {/* end row*/}
            </div>
            {/* end page title */}
          </div>{" "}
          {/* end col */}
        </div>{" "}
        {/* end row*/}
      </div>
    </div>
  );
}

export default Header;
