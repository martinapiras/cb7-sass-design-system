import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { Logo } from "../icons";

import styles from "./Header.module.scss";

const Header = () => {
  const menuItems = [
    {
      id: 1,
      label: "A",
      items: [
        { id: 1, label: "A.1" },
        { id: 2, label: "A.2" },
        { id: 3, label: "A.3" },
      ],
    },
    {
      id: 2,
      label: "B",
      items: [
        { id: 1, label: "B.1" },
        { id: 2, label: "B.2" },
        { id: 3, label: "B.3" },
      ],
    },
    {
      id: 3,
      label: "C",
      items: [
        { id: 1, label: "C.1" },
        { id: 2, label: "C.2" },
        { id: 3, label: "C.3" },
      ],
    },
  ];

  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = (id) => {
    if (id === openMenu) {
      setOpenMenu(false);
    } else {
      setOpenMenu(id);
    }
  };

  return (
    <header className={styles.Header}>
      <div className={`${styles.logo} col-3 col-xs-4`}>
        <Logo />
      </div>
      <div className={`${styles.menu} col-6 col-xs-8`}>
        <ul className={styles.menuItemList}>
          {menuItems?.map((item) => (
            <li
              className={styles.menuItem}
              key={item.id}
              onClick={() => toggleMenu(item.id)}
            >
              <div className={styles.menuItem__text}>
                <span className={styles.menuItem__label}>{item.label}</span>
                <span className={styles.menuItem__icon}>
                  <FaAngleDown />
                </span>
              </div>
              <ul
                className={`${styles.menuItem__dropdown} ${
                  openMenu && openMenu === item.id && styles.open
                }`}
              >
                {item?.items?.map((subItem) => (
                  <li key={subItem.id} className={styles.dropdownItem}>
                    {subItem.label}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <div className={`${styles.actions} col-3`}>Actions</div>
    </header>
  );
};

export default Header;
