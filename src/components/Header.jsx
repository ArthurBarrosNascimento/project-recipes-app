import React, { useState } from 'react';
import { connect } from 'react-redux';
import { string } from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

function Header({ history }) {
  const [toggle, setToggle] = useState(false);

  const { pathname } = history.location;

  const verifyPathName = () => {
    if (pathname === '/done-recipes') {
      return 'Done Recipes';
    }
    if (pathname === '/favorite-recipes') {
      return 'Favorite Recipes';
    }
    return pathname.slice(1)[0].toUpperCase() + pathname.slice(2);
  };

  return (
    <header>
      <div>
        <Link to="/profile">
          <img
            src={ profileIcon }
            alt="Foto profile"
            data-testid="profile-top-btn"
          />
        </Link>
        <p data-testid="page-title">
          {verifyPathName()}
        </p>
      </div>
      {pathname === '/meals' || pathname === '/drinks'
        ? (
          <div>
            <button
              type="button"
              alt="Search icon"
              data-testid="search-top-btn"
              src={ searchIcon }
              onClick={ () => setToggle(!toggle) }
            >
              <img src={ searchIcon } alt="search" />
            </button>

            { toggle && <SearchBar pathname={ pathname } /> }

          </div>
        )
        : (
          <div />
        )}
    </header>
  );
}

Header.propTypes = {
  history: string,
}.isRequired;

export default connect()(Header);
