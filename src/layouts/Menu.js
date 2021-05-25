import React from 'react'
import Link from 'next/link'
import { useRouter } from "next/router";
// import Recharge from '../public/assets/img/menu/recharge.svg'
import MenuConst from 'utils/constants/MenuConst'
function Menu(props) {
    const router = useRouter();


    return (
        <ul className="menu col-4">
            <div className="">

                {MenuConst && MenuConst.map((item, index) => <li key={index} onClick={(e) => { e.preventDefault(); props.setDefaultPage && props.setDefaultPage(); console.log('click link') }} className={router.pathname === item.path ? "active-item" : ""} >
                    <Link href={item.path}><a >{item.icon}{item.title}</a></Link>
                </li>)}
            </div>

        </ul>

    )
}

export default Menu;
