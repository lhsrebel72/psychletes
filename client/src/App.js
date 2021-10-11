import {FaBrain} from "react-icons/fa"
import logo from "./images/logo.PNG"
import './App.css';

function App() {
  return (
    <div className="App">
      <meta charSet="utf-8" />
      <title>Psychletes</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <div className="wrapper">
        <div className="sidebar">
          <header id="sidebar-logo"><FaBrain size="5em"/></header>
          <nav id="menu" role="navigation">
            <div>
              <ul>
                <li><a href="/shop.html">Merch</a></li>
                <li><a href="/videos">Videos</a></li>
                <li><a href="/about">About</a></li>
              </ul>
            </div>
          </nav>
        </div>
        <main className="main">
          <div id="main-content">
            <div className="centered-content" id="home"><img alt="" className="floating-img" src={logo} />
              <p>hi my name is Tyler Sumpter<br />
                I'm a hoe<br />
                but i guess im a pretty good kicker too</p>
              <p />
              <div clas="fluid-width-video-wrapper"><iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen frameBorder={0} height={315} src="https://www.youtube.com/embed/0f7KhX2q77E" title="YouTube video player" width={560} /></div>
              <p />
            </div>
            <p />
            <div id="story">
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
