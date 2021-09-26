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
    current === window.location.pathname.replaceAll("/", "")
      ? `${navLinkText} ${navLinkTextActive}`
      : navLinkText;

      console.log(window)

  return (
    <div className={container}>
      <div className={header}>
        <span
          style={{ marginRight: "889px", whiteSpace: "nowrap", fontSize: 20 }}
        >
          {name}
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
