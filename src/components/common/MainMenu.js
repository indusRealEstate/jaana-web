import {
  AboutUs,
  Agent,
  AllProperties,
  ContactUs,
  RentItems,
  SaleItems,
  homeItems,
} from "@/data/navItems";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const MainMenu = ({ scroll }) => {
  const pathname = usePathname();
  const [topMenu, setTopMenu] = useState("");

  useEffect(() => {
    homeItems.forEach((elm) => {
      if (elm.href.split("/")[1] == pathname.split("/")[1]) {
        setTopMenu("home");
      }
    });

    ContactUs.forEach((elm) => {
      if (elm.href.split("/")[1] == pathname.split("/")[1]) {
        setTopMenu("contact");
      }
    });
    AboutUs.forEach((elm) => {
      if (elm.href.split("/")[1] == pathname.split("/")[1]) {
        setTopMenu("about");
      }
    });
    RentItems.forEach((elm) => {
      if (elm.href.split("/")[1] == pathname.split("/")[1]) {
        setTopMenu("rent");
      }
    });
    SaleItems.forEach((elm) => {
      if (elm.href.split("/")[1] == pathname.split("/")[1]) {
        setTopMenu("sale");
      }
    });
    AllProperties.forEach((elm) => {
      if (elm.href.split("/")[1] == pathname.split("/")[1]) {
        setTopMenu("all-prop");
      }
    });
    Agent.forEach((elm) => {
      if (elm.href.split("/")[1] == pathname.split("/")[1]) {
        setTopMenu("agent");
      }
    });
  }, [topMenu, pathname]);

  return (
    <ul className="ace-responsive-menu">
      <li className="visible_list dropitem">
        <Link className="list-item" href="/">
          <span
            className={
              topMenu == "home"
                ? `title ${scroll ? "menuActive-scroll" : "menuActive"}`
                : "title"
            }
          >
            Home
          </span>
        </Link>
      </li>
      {/* End homeItems */}
      <li className="visible_list dropitem">
        <Link
          className="list-item"
          href={{
            pathname: "/all-properties",
          }}
        >
          <span
            className={
              topMenu == "all-prop"
                ? `title ${scroll ? "menuActive-scroll" : "menuActive"}`
                : "title"
            }
          >
            All Properties
          </span>
        </Link>
      </li>
      <li className="visible_list dropitem">
        <Link className="list-item" href="/properties-rent">
          <span
            className={
              topMenu == "rent"
                ? `title ${scroll ? "menuActive-scroll" : "menuActive"}`
                : "title"
            }
          >
            Rent
          </span>
        </Link>
      </li>
      <li className="visible_list dropitem">
        <Link className="list-item" href="/properties-sale">
          <span
            className={
              topMenu == "sale"
                ? `title ${scroll ? "menuActive-scroll" : "menuActive"}`
                : "title"
            }
          >
            Sale
          </span>
        </Link>
      </li>
      <li className="visible_list dropitem">
        <Link
          className="list-item"
          href={{
            pathname: "/agent-details",
          }}
        >
          <span
            className={
              topMenu == "agent"
                ? `title ${scroll ? "menuActive-scroll" : "menuActive"}`
                : "title"
            }
          >
            About Agent
          </span>
        </Link>
      </li>
      <li className="visible_list dropitem">
        <Link
          className="list-item"
          href={{
            pathname: "/about",
          }}
        >
          <span
            className={
              topMenu == "about"
                ? `title ${scroll ? "menuActive-scroll" : "menuActive"}`
                : "title"
            }
          >
            About Us
          </span>
        </Link>
      </li>
      <li className="visible_list dropitem">
        <Link
          className="list-item"
          href={{
            pathname: "/contact",
          }}
        >
          <span
            className={
              topMenu == "contact"
                ? `title ${scroll ? "menuActive-scroll" : "menuActive"}`
                : "title"
            }
          >
            Contact Us
          </span>
        </Link>
      </li>
      {/* <li className="megamenu_style dropitem">
        <a className="list-item" href="#">
          <span className={topMenu == "listing" ? "title menuActive" : "title"}>
            Listing
          </span>
          <span className="arrow"></span>
        </a>
        <ul className="row dropdown-megamenu sub-menu">
          {listingItems.map((item, index) => (
            <li className="col mega_menu_list" key={index}>
              <h4 className="title">{item.title}</h4>
              <ul className="sub-menu">
                {item.submenu.map((submenuItem, subIndex) => (
                  <li key={subIndex}>
                    <Link
                      className={`${handleActive(submenuItem.href)}`}
                      href={submenuItem.href}
                    >
                      {submenuItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </li> */}
      {/* End listings */}

      {/* <li className="visible_list dropitem">
        <a className="list-item" href="#">
          <span
            className={topMenu == "property" ? "title menuActive" : "title"}
          >
            Property
          </span>
          <span className="arrow"></span>
        </a>
        <ul className="sub-menu">
          {propertyItems.map((item, index) => (
            <li key={index} className="dropitem">
              <a href="#">
                <span
                  className={
                    submenu == item.label ? "title menuActive" : "title"
                  }
                >
                  {item.label}
                </span>
                <span className="arrow"></span>
              </a>
              <ul className="sub-menu">
                {item.subMenuItems.map((subMenuItem, subIndex) => (
                  <li key={subIndex}>
                    <Link
                      className={`${handleActive(subMenuItem.href)}`}
                      href={subMenuItem.href}
                    >
                      {subMenuItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </li> */}
      {/* End property Items */}

      {/* <li className="visible_list dropitem">
        <a className="list-item" href="#">
          <span className={topMenu == "blog" ? "title menuActive" : "title"}>
            Blog
          </span>
          <span className="arrow"></span>
        </a>
        <ul className="sub-menu">
          {blogItems.map((item, index) => (
            <li key={index}>
              <Link className={`${handleActive(item.href)}`} href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </li> */}
      {/* End blog Items */}

      {/* <li className="visible_list dropitem">
        <a className="list-item" href="#">
          <span className={topMenu == "pages" ? "title menuActive" : "title"}>
            Pages
          </span>
          <span className="arrow"></span>
        </a>
        <ul className="sub-menu">
          {pageItems.map((item, index) => (
            <li key={index}>
              <Link className={`${handleActive(item.href)}`} href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </li> */}
      {/* End pages Items */}
    </ul>
  );
};

export default MainMenu;
