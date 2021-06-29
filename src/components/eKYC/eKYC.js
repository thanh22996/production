import React from "react";

function EKYCComponent(props) {
  return (
    <div className="wrapper">
      <div>
        <div className="title-kyc">
          <p>Định danh tài khoản của bạn</p>
          <p>(eKYC)</p>
          <img src="/assets/images/kyc-intro.svg" alt="kyc" />
        </div>
        <div className="step-kyc">
          <div className="step-by-step">
            <div className="step-number">1</div>
            <div className="step-text">
              <p>Chụp hình giấy tờ tuỳ thân</p>
              <p>
                Bạn cần chụp hình mặt trước và sau của CMND hoặc thẻ Căn cước
                hoặc Hộ chiếu
              </p>
            </div>
          </div>
          <div className="step-by-step">
            <div className="step-number">2</div>
            <div className="step-text">
              <p>Quay video xác thực khuôn mặt</p>
              <p>
                Bạn cần xác thực gương mặt của bạn cùng với giấy tờ tuỳ thân
              </p>
            </div>
          </div>
        </div>
        <div className="btn-kyc">
          <button>Bắt đầu định danh</button>
        </div>
      </div>
    </div>
  );
}

export default EKYCComponent;
