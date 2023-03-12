

export default function Header(props) {
    const init = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const parts = [[0, 2], [1, 3], 4, 5, [6, 12], 7, 8, 9, 10, 11]
    const names = ['leg', 'head', 'jet', 'missile', 'hand', 'shoulder', 'middle', 'skin', 'chest', 'pulse']
    const settings = (i, part) => {
      i === 0 || i === 1 || i === 4 ? props.handlePart(part) : props.handlePart([part])
    }
    return (
      <header className="header">
        <nav className="navbar">
          <a className="Gundam" href="#Gundam" onClick={() => props.handlePart(init)}>
            Gundam
          </a>
          <input type="checkbox" id="nav" className="hidden" />
          <label htmlFor="nav" className="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </label>
          <div className="wrapper">
            <ul className="menu">
              {parts.map((part, i) => {
                return (
                  <li key={i} className="menu-item">
                    <a href={`#${names[i]}`} onClick={() => settings(i, part)}>
                      {names[i]}
                    </a>
                  </li>
                )
              })}
              <li className="menu-item">
                <a href="#shadow" onClick={() => props.handleActive()}>
                  shadow
                </a>
              </li>
              <li className="menu-item">
                <a href="#All" onClick={() => props.handlePart(init)}>
                  All
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
  