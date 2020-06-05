import React, { useState } from 'react';
import classNames from 'classnames';

import NavLink from 'components/NavLink';
import Icon from 'components/Icon';
import Button from 'components/Button';

import styles from './header.module.scss';

import headerData from 'data/header';

const Header = () => {
  const [open, setOpen] = useState(false);

  const renderHeaderItem = (headerItem, key) => (
    <li className={styles.listItem} key={key}>
      <NavLink to={headerItem.route} onClick={handleLinkClick}>
        {headerItem.label}
      </NavLink>
    </li>
  );

  const getNavClass = () => classNames(
    styles.nav,
    open && styles.open
  );

  const handleNavBarIconClick = (event) => setOpen(!open);

  const handleLinkClick = () => setOpen(false);

  return(
    <header className={styles.header}>
      <nav className={getNavClass()}>
        <ul className={`${styles.list} no-margin`}>
          {headerData.map(renderHeaderItem)}
        </ul>
        <div className={`${styles.menuIcon} hide-medium-up`}>
          <Button
            className={styles.buttonMenu}
            onClick={handleNavBarIconClick}
          >
            <Icon
              animated
              className="no-margin"
              iconStyle="solid"
              name="bars"
              secondIconName="times"
              showSecondIcon={open}
              size="lg"
              type="tertiary" />
          </Button>
        </div>
      </nav>
    </header>
  );
}

export default Header;