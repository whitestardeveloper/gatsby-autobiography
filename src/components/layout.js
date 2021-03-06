import * as React from "react";
import { Link } from "gatsby";
import {
  container,
  header,
  navLinks,
  navLinkItem,
  navLinkText,
  navLinkTextActive,
  navLinkTranslateText,
} from "./layout.module.css";
import "../styles/global.css";

const Layout = ({ name, children }) => {

  const isActive = (current) =>
    current === (typeof window !== "undefined" && window.location.pathname.slice(1).replace('/',''))
      ? `${navLinkText} ${navLinkTextActive}`
      : navLinkText;

      typeof window !== "undefined" && console.log(window.location.pathname.slice(1).replace('/',''))

  return (
    <div className={container}>
      <div className={header}>
        <span
          style={{ marginRight: "925px", whiteSpace: "nowrap", fontSize: 20 }}
        >
          <Link style={{  color: 'inherit',textDecoration: 'none'}} to="/">{name}</Link>
        </span>
        <div>
          <div className={navLinks}>
            <li className={navLinkItem} style={{ marginRight: 82 }}>
              <Link to="/awards" className={`${isActive("awards")}`}>
                awards
              </Link>
              <div className={navLinkTranslateText}>ödüller</div>
            </li>
            <li className={navLinkItem} style={{ marginRight: 47 }}>
              <Link to="/about" className={`${isActive("about")}`}>
                about
              </Link>
              <div className={navLinkTranslateText}>hakkında</div>
            </li>
            <li className={navLinkItem}>
              <Link to="/contact" className={`${isActive("contact")}`}>
                contact
              </Link>
              <div className={navLinkTranslateText}>iletişim</div>
            </li>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "calc(100% - 136px)",
          overflow: "auto",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
