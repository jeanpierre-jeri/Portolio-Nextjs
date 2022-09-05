export const Header = () => {
  const handleClick = () => {
    document.body.classList.toggle('nav-open')
  }

  return (
    <header className="header">
      <div className="logo">{/* <img src="/logo.svg" alt="jean pierre logo" /> */}</div>
      <div>
        <button className="nav-toggle" onClick={handleClick} aria-label="toggle navigation">
          <span className="hamburger"></span>
        </button>
        <nav className="nav">
          <ul className="nav__list">
            <li onClick={handleClick} className="nav__item">
              <a href="#home" className="nav__link">
                Home
              </a>
            </li>
            <li onClick={handleClick} className="nav__item">
              <a href="#services" className="nav__link">
                What i do
              </a>
            </li>
            <li onClick={handleClick} className="nav__item">
              <a href="#about" className="nav__link">
                About me
              </a>
            </li>
            <li onClick={handleClick} className="nav__item">
              <a href="#work" className="nav__link">
                My Work
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
