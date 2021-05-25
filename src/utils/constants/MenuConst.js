import Home from "../../../public//assets/img/menu/home.svg";
import Deposit from "../../../public/assets/img/menu/deposit.svg";
import Withdraw from "../../../public/assets/img/menu/withdraw.svg";
import AccountLink from "../../../public/assets/img/menu/account-link.svg";
import InfoBuss from "../../../public/assets/img/menu/info-buss.svg";

export default [
  { title: "Ví PayME", path: "/", icon: <Home /> },
  { title: "Nạp tiền", path: "/deposit", icon: <Deposit /> },
  { title: "Rút tiền", path: "/withdraw", icon: <Withdraw /> },
  { title: "Tài khoản liên kết", path: "/link-bank", icon: <AccountLink /> },
  {
    title: "Thông tin doanh nghiệp",
    path: "/business-info",
    icon: <InfoBuss />,
  },
];
