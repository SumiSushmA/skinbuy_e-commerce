// import Link from "next/link";
// import { useRouter } from "next/router";
// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { userLoggedOut } from "@/redux/features/auth/authSlice";

// // language
// function Language({active,handleActive}) {
//   return (
//     <div className="tp-header-top-menu-item tp-header-lang">
//       <span
//         onClick={() => handleActive('lang')}
//         className="tp-header-lang-toggle"
//         id="tp-header-lang-toggle"
//       >
//         American English
//       </span>
//       <ul className={active === 'lang' ? "tp-lang-list-open" : ""}>
//         <li>
//           <a href="#">Nepali</a>
//         </li>
//         <li>
//           <a href="#">Indian</a>
//         </li>
//         <li>
//           <a href="#">British English</a>
//         </li>
//       </ul>
//     </div>
//   );
// }

// // currency
// function Currency({active,handleActive}) {
//   return (
//     <div className="tp-header-top-menu-item tp-header-currency">
//       <span
//         onClick={() => handleActive('currency')}
//         className="tp-header-currency-toggle"
//         id="tp-header-currency-toggle"
//       >
//         USD
//       </span>
//       <ul className={active === 'currency' ? "tp-currency-list-open" : ""}>
//         <li>
//           <a href="#">EUR</a>
//         </li>
//         <li>
//           <a href="#">CHF</a>
//         </li>
//         <li>
//           <a href="#">GBP</a>
//         </li>
//         <li>
//           <a href="#">KWD</a>
//         </li>
//       </ul>
//     </div>
//   );
// }

// // setting
// function ProfileSetting({active,handleActive}) {
//   const { user } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();
//   const router = useRouter();
//   // handle logout
//   const handleLogout = () => {
//     dispatch(userLoggedOut());
//     router.push('/')
//   }
//   return (
//     <div className="tp-header-top-menu-item tp-header-setting">
//       <span
//         onClick={() => handleActive('setting')}
//         className="tp-header-setting-toggle"
//         id="tp-header-setting-toggle"
//       >
//         Setting
//       </span>
//       <ul className={active === 'setting' ? "tp-setting-list-open" : ""}>
//         <li>
//           <Link href="/profile">My Profile</Link>
//         </li>
//         <li>
//           <Link href="/wishlist">Wishlist</Link>
//         </li>
//         <li>
//           <Link href="/cart">Cart</Link>
//         </li>
//         <li>
//           {!user?.name &&<Link href="/login" className="cursor-pointer">Login</Link>}
//           {user?.name &&<a onClick={handleLogout} className="cursor-pointer">Logout</a>}
//         </li>
//       </ul>
//     </div>
//   );
// }

// const HeaderTopRight = () => {
//   const [active, setIsActive] = useState('');
//   // handle active
//   const handleActive = (type) => {
//     if(type === active){
//       setIsActive('')
//     }
//     else {
//       setIsActive(type)
//     }
//   }
//   return (
//     <div className="tp-header-top-menu d-flex align-items-center justify-content-end">
//       <Language active={active} handleActive={handleActive} />
//       <Currency active={active} handleActive={handleActive} />
//       <ProfileSetting active={active} handleActive={handleActive} />
//     </div>
//   );
// };

// export default HeaderTopRight;

// components/HeaderTopRight.jsx
import { userLoggedOut } from "@/redux/features/auth/authSlice";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Language selector
function Language({ active, handleActive }) {
  return (
    <div className="tp-header-top-menu-item tp-header-lang">
      <span
        onClick={() => handleActive("lang")}
        className="tp-header-lang-toggle cursor-pointer text-lg"
        id="tp-header-lang-toggle"
      >
        American English
      </span>
      <ul className={active === "lang" ? "tp-lang-list-open" : ""}>
        <li>
          <a href="#" className="text-lg">Nepali</a>
        </li>
        <li>
          <a href="#" className="text-lg">Indian</a>
        </li>
        <li>
          <a href="#" className="text-lg">British English</a>
        </li>
      </ul>
    </div>
  );
}

// Currency selector
function Currency({ active, handleActive }) {
  return (
    <div className="tp-header-top-menu-item tp-header-currency">
      <span
        onClick={() => handleActive("currency")}
        className="tp-header-currency-toggle cursor-pointer text-lg"
        id="tp-header-currency-toggle"
      >
        USD
      </span>
      <ul className={active === "currency" ? "tp-currency-list-open" : ""}>
        <li>
          <a href="#" className="text-lg">EUR</a>
        </li>
        <li>
          <a href="#" className="text-lg">CHF</a>
        </li>
        <li>
          <a href="#" className="text-lg">GBP</a>
        </li>
        <li>
          <a href="#" className="text-lg">KWD</a>
        </li>
      </ul>
    </div>
  );
}

// Profile/settings menu
function ProfileSetting({ active, handleActive }) {
  const { user } = useSelector((s) => s.auth);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(userLoggedOut());
    router.push("/");
  };

  return (
    <div className="tp-header-top-menu-item tp-header-setting">
      <span
        onClick={() => handleActive("setting")}
        className="tp-header-setting-toggle cursor-pointer text-lg"
        id="tp-header-setting-toggle"
      >
        Setting
      </span>
      <ul className={active === "setting" ? "tp-setting-list-open" : ""}>
        <li>
          <Link href="/profile" className="text-lg">
            My Profile
          </Link>
        </li>
        <li>
          <Link href="/wishlist" className="text-lg">
            Wishlist
          </Link>
        </li>
        <li>
          <Link href="/cart" className="text-lg">
            Cart
          </Link>
        </li>
        <li>
          {!user?.name ? (
            <Link href="/login" className="cursor-pointer text-lg">
              Login
            </Link>
          ) : (
            <button onClick={handleLogout} className="cursor-pointer text-lg">
              Logout
            </button>
          )}
        </li>
      </ul>
    </div>
  );
}

export default function HeaderTopRight() {
  const [active, setActive] = useState("");

  const handleActive = (type) =>
    setActive((prev) => (prev === type ? "" : type));

  return (
    <div className="tp-header-top-menu d-flex align-items-center justify-content-end">
      <Language active={active} handleActive={handleActive} />
      <Currency active={active} handleActive={handleActive} />
      <ProfileSetting active={active} handleActive={handleActive} />
    </div>
  );
}
