import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Hukam Singh</h2>
        <p>
          <a href="mailto:mailtohukam@gmail.com">mailtohukam@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Hukam. I am a{' '}
        <a href="https://icme.stanford.edu/">Senior Software Engineer II</a> at Akamai. Previously, I
        was Senior Software Engineer II at <a href="https://www.olx.in/">OLX</a>,
        and Senior Sofware Engineer at <a href="https://www.ericsson.com/en">Ericsson</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Hukam Singh <Link to="/">hukam-singh.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
