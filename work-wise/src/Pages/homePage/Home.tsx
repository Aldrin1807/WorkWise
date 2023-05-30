import LeftNav from "../../Components/Left/LeftNav";
import { Search1 } from "../../Components/Middle/Content";
import "./Home.css";
function Home() {
  return (
    <>
      <div className="content1">
        <LeftNav icon={"home"} />
      </div>
      <div className="main">
        <div className="search-section">
          <h2 className="search-section-header">
            Punësim i Garantuar për të Rinjtë
          </h2>
          <Search1 />
          <p className="search-section-text">
            superpuna është platformë punësimi e krijuar nga Qeveria e
            Republikës së Kosovës, në kuadër të skemës së Punësimit të Garantuar
            për të Rinjtë, e cila do të lehtësojë qasjen e të rinjve në tregun e
            punës dhe do të ndihmojë bizneset në angazhimin e punëtorëve të
            rinj.
          </p>
        </div>

        <div className="ofrimi-section">
          <h2 className="search-section-header">Çfarë ju ofron superpuna? </h2>
          <p className="search-section-text">
            superpuna synon garantimin nga Qeveria të një vendi pune për çdo të
            ri nga 18 deri në 25 vjeç, përmes ndërmjetësimit midis punëdhënësve
            dhe punëkërkuesve. Pas ndërmjetësimit të suksesshëm, Qeveria bën
            subvencionimin e pagës mujore të punëtorit, në vlerë prej 264 eurosh
            për 6 muaj.
          </p>
        </div>

        <div className="punedhenesi">
          <img
            src="https://superpuna.rks-gov.net/images/p_1.webp"
            alt=""
            width="600px"
          />
          <div className="punedhenesi-texti">
            <h3>Punëdhënësit:</h3>

            <p>
              Punëdhënësit mund të jenë nga sektori privat, sektori publik ose
              organizatat joqeveritare.
            </p>

            <p>superpuna i ofron punëdhënësve:</p>

            <ul>
              <li>Mundësi angazhimi për deri në 50 të rinj,</li>
              <li>Subvencionim të pagës prej 264 euro për 6 muaj,</li>
              <li>Zhvillim të resurseve njerëzore.</li>
            </ul>

            <button className="punedhenesi-button">
              Regjistrohu si punëdhënës
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
