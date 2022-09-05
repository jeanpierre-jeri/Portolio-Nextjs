import React from 'react'

export const Footer = () => {
  return (
    <footer className="footer">
      <a href="mailto:jeanpierre.webdev@gmail.com" className="footer__link">
        jeanpierre.webdev@gmail.com
      </a>
      <ul className="social-list">
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://www.linkedin.com/in/jean-pierre-jeri-elias/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://wa.link/90xogv"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://github.com/jeanpierre-jeri"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </li>
      </ul>
    </footer>
  )
}
