import logo from "../images/logo.PNG"

export default function MainView() {
    return (
      <div className="Page">
        <meta charSet="utf-8" />
        <title>Psychletes</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <main className="main">
            <div id="main-content">
              <div className="centered-content" id="home"><img alt="" className="floating-logo-img" src={logo} />
                <p>Welcome to Psychletes!<br />
                  My name is Tyler Sumpter and I'm the punter for West Virgia Football<br />
                  Our mission here at Psychletes is to help athletes reach their highest potential by pursuing better mental health!</p>
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
    );
  }