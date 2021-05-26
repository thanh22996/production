import React from "react";

function ProductComponent(props) {
  return (
    <div className="wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-3 col-md-6">
            <div className="card product-box">
              <div className="card-body">
                <div className="product-img">
                  <img
                    src="assets/images/products/1.jpg"
                    className="img-fluid rounded-top mx-auto d-block"
                    alt="work-thumbnail"
                  />
                  <div className="product-overlay">
                    <ul className="list-inline product-links social-links mb-0">
                      <li className="list-inline-item">
                        <a
                          href="#none"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Like"
                        >
                          <i className="dripicons-heart" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="#none"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Add to Wishlist"
                        >
                          <i className="dripicons-shopping-bag" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="#none"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Add to Cart"
                        >
                          <i className="dripicons-cart" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="detail mt-3">
                  <h4 className="font-16">
                    <a href="#none" className="text-dark">
                      Gray belt watch
                    </a>
                  </h4>
                  <p className="text-muted">
                    <i className="mdi mdi-star text-warning" />
                    <i className="mdi mdi-star text-warning" />
                    <i className="mdi mdi-star text-warning" />
                    <i className="mdi mdi-star text-warning" />
                    <i className="mdi mdi-star text-warning" />
                  </p>
                  <h5 className="my-0 font-16 float-right">
                    <span className="text-muted mr-2">
                      <del>$72</del>
                    </span>
                    <b>$64</b>
                  </h5>
                  <span className="badge badge-soft-primary">24 % Off</span>
                </div>
              </div>
            </div>
            {/* end product-box */}
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="card product-box">
              <div className="card-body">
                <div className="product-img">
                  <img
                    src="assets/images/products/2.jpg"
                    className="img-fluid rounded-top mx-auto d-block"
                    alt="work-thumbnail"
                  />
                  <div className="product-overlay">
                    <ul className="list-inline product-links social-links mb-0">
                      <li className="list-inline-item">
                        <a
                          href="#none"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Like"
                        >
                          <i className="dripicons-heart" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="#none"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Add to Wishlist"
                        >
                          <i className="dripicons-shopping-bag" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="#none"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Add to Cart"
                        >
                          <i className="dripicons-cart" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="detail mt-3">
                  <h4 className="font-16">
                    <a href="#none" className="text-dark">
                      Riverston Glass Chair
                    </a>
                  </h4>
                  <p className="text-muted">
                    <i className="mdi mdi-star text-warning" />
                    <i className="mdi mdi-star text-warning" />
                    <i className="mdi mdi-star text-warning" />
                    <i className="mdi mdi-star text-warning" />
                    <i className="mdi mdi-star" />
                  </p>
                  <h5 className="my-0 font-16 float-right">
                    <span className="text-muted mr-2">
                      <del>$70</del>
                    </span>
                    <b>$62</b>
                  </h5>
                  <span className="badge badge-soft-danger">26 % Off</span>
                </div>
              </div>
            </div>
            {/* end product-box */}
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="card product-box">
              <div className="card-body">
                <div className="product-img">
                  <img
                    src="assets/images/products/3.jpg"
                    className="img-fluid rounded-top mx-auto d-block"
                    alt="work-thumbnail"
                  />
                  <div className="product-overlay">
                    <ul className="list-inline product-links social-links mb-0">
                      <li className="list-inline-item">
                        <a
                          href="#none"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Like"
                        >
                          <i className="dripicons-heart" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="#none"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Add to Wishlist"
                        >
                          <i className="dripicons-shopping-bag" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="#none"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Add to Cart"
                        >
                          <i className="dripicons-cart" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="detail mt-3">
                  <h4 className="font-16">
                    <a href="#none" className="text-dark">
                      Trex Outdoor Furniture Cape
                    </a>
                  </h4>
                  <p className="text-muted">
                    <i className="mdi mdi-star text-warning" />
                    <i className="mdi mdi-star text-warning" />
                    <i className="mdi mdi-star text-warning" />
                    <i className="mdi mdi-star text-warning" />
                    <i className="mdi mdi-star text-warning" />
                  </p>
                  <h5 className="my-0 font-16 float-right">
                    <span className="text-muted mr-2">
                      <del>$78</del>
                    </span>
                    <b>$68</b>
                  </h5>
                  <span className="badge badge-soft-warning">30 % Off</span>
                </div>
              </div>
            </div>
            {/* end product-box */}
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="card product-box">
              <div className="card-body">
                <div className="product-img">
                  <img
                    src="assets/images/products/4.jpg"
                    className="img-fluid rounded-top mx-auto d-block"
                    alt="work-thumbnail"
                  />
                  <div className="product-overlay">
                    <ul className="list-inline product-links social-links mb-0">
                      <li className="list-inline-item">
                        <a
                          href="#none"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Like"
                        >
                          <i className="dripicons-heart" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="#none"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Add to Wishlist"
                        >
                          <i className="dripicons-shopping-bag" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="#none"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Add to Cart"
                        >
                          <i className="dripicons-cart" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="detail mt-3">
                  <h4 className="font-16">
                    <a href="#none" className="text-dark">
                      3 color belt watch
                    </a>
                  </h4>
                  <p className="text-muted">
                    <i className="mdi mdi-star text-warning" />
                    <i className="mdi mdi-star text-warning" />
                    <i className="mdi mdi-star text-warning" />
                    <i className="mdi mdi-star text-warning" />
                    <i className="mdi mdi-star" />
                  </p>
                  <h5 className="my-0 font-16 float-right">
                    <span className="text-muted mr-2">
                      <del>$84</del>
                    </span>
                    <b>$72</b>
                  </h5>
                  <span className="badge badge-soft-success">28 % Off</span>
                </div>
              </div>
            </div>
            {/* end product-box */}
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="card product-box">
              <div className="card-body">
                <div className="product-img">
                  <img
                    src="assets/images/products/5.jpg"
                    className="img-fluid rounded-top mx-auto d-block"
                    alt="work-thumbnail"
                  />
                  <div className="product-overlay">
                    <ul className="list-inline product-links social-links mb-0">
                      <li className="list-inline-item">
                        <a
                          href="#none"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Like"
                        >
                          <i className="dripicons-heart" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="#none"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Add to Wishlist"
                        >
                          <i className="dripicons-shopping-bag" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="#none"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Add to Cart"
                        >
                          <i className="dripicons-cart" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="detail mt-3">
                  <h4 className="font-16">
                    <a href="#none" className="text-dark">
                      Classic Company watch
                    </a>
                  </h4>
                  <p className="text-muted">
                    <i className="mdi mdi-star text-warning" />
                    <i className="mdi mdi-star text-warning" />
                    <i className="mdi mdi-star text-warning" />
                    <i className="mdi mdi-star text-warning" />
                    <i className="mdi mdi-star text-warning" />
                  </p>
                  <h5 className="my-0 font-16 float-right">
                    <span className="text-muted mr-2">
                      <del>$70</del>
                    </span>
                    <b>$68</b>
                  </h5>
                  <span className="badge badge-soft-success">30 % Off</span>
                </div>
              </div>
            </div>
            {/* end product-box */}
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="card product-box">
              <div className="card-body">
                <div className="product-img">
                  <img
                    src="assets/images/products/6.jpg"
                    className="img-fluid rounded-top mx-auto d-block"
                    alt="work-thumbnail"
                  />
                  <div className="product-overlay">
                    <ul className="list-inline product-links social-links mb-0">
                      <li className="list-inline-item">
                        <a
                          href="#none"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Like"
                        >
                          <i className="dripicons-heart" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="#none"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Add to Wishlist"
                        >
                          <i className="dripicons-shopping-bag" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="#none"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Add to Cart"
                        >
                          <i className="dripicons-cart" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="detail mt-3">
                  <h4 className="font-16">
                    <a href="#none" className="text-dark">
                      Shine Company Chair
                    </a>
                  </h4>
                  <p className="text-muted">
                    <i className="mdi mdi-star text-warning" />
                    <i className="mdi mdi-star text-warning" />
                    <i className="mdi mdi-star text-warning" />
                    <i className="mdi mdi-star text-warning" />
                    <i className="mdi mdi-star" />
                  </p>
                  <h5 className="my-0 font-16 float-right">
                    <span className="text-muted mr-2">
                      <del>$84</del>
                    </span>
                    <b>$68</b>
                  </h5>
                  <span className="badge badge-soft-warning">32 % Off</span>
                </div>
              </div>
            </div>
            {/* end product-box */}
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="card product-box">
              <div className="card-body">
                <div className="product-img">
                  <img
                    src="assets/images/products/7.jpg"
                    className="img-fluid rounded-top mx-auto d-block"
                    alt="work-thumbnail"
                  />
                  <div className="product-overlay">
                    <ul className="list-inline product-links social-links mb-0">
                      <li className="list-inline-item">
                        <a
                          href="#none"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Like"
                        >
                          <i className="dripicons-heart" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="#none"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Add to Wishlist"
                        >
                          <i className="dripicons-shopping-bag" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="#none"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Add to Cart"
                        >
                          <i className="dripicons-cart" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="detail mt-3">
                  <h4 className="font-16">
                    <a href="#none" className="text-dark">
                      Trex Outdoor Furniture Cape
                    </a>
                  </h4>
                  <p className="text-muted">
                    <i className="mdi mdi-star text-warning" />
                    <i className="mdi mdi-star text-warning" />
                    <i className="mdi mdi-star text-warning" />
                    <i className="mdi mdi-star text-warning" />
                    <i className="mdi mdi-star text-warning" />
                  </p>
                  <h5 className="my-0 font-16 float-right">
                    <span className="text-muted mr-2">
                      <del>$74</del>
                    </span>
                    <b>$66</b>
                  </h5>
                  <span className="badge badge-soft-danger">34 % Off</span>
                </div>
              </div>
            </div>
            {/* end product-box */}
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="card product-box">
              <div className="card-body">
                <div className="product-img">
                  <img
                    src="assets/images/products/8.jpg"
                    className="img-fluid rounded-top mx-auto d-block"
                    alt="work-thumbnail"
                  />
                  <div className="product-overlay">
                    <ul className="list-inline product-links social-links mb-0">
                      <li className="list-inline-item">
                        <a
                          href="#none"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Like"
                        >
                          <i className="dripicons-heart" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="#none"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Add to Wishlist"
                        >
                          <i className="dripicons-shopping-bag" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="#none"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Add to Cart"
                        >
                          <i className="dripicons-cart" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="detail mt-3">
                  <h4 className="font-16">
                    <a href="#none" className="text-dark">
                      black color lamp
                    </a>
                  </h4>
                  <p className="text-muted">
                    <i className="mdi mdi-star text-warning" />
                    <i className="mdi mdi-star text-warning" />
                    <i className="mdi mdi-star text-warning" />
                    <i className="mdi mdi-star text-warning" />
                    <i className="mdi mdi-star" />
                  </p>
                  <h5 className="my-0 font-16 float-right">
                    <span className="text-muted mr-2">
                      <del>$72</del>
                    </span>
                    <b>$64</b>
                  </h5>
                  <span className="badge badge-soft-primary">26 % Off</span>
                </div>
              </div>
            </div>
            {/* end product-box */}
          </div>
        </div>
        {/* end row */}
      </div>
      {/* end container-fluid */}
    </div>
  );
}

export default ProductComponent;
