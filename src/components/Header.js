/* Images - import */
import logo from "../assets/img/epicerie-logo.png";

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <img src={logo} alt="Epicerie l'Ideal logo" />
        <h1>Stocks - Épicerie L'Idéal</h1>
      </div>
    </header>
  );
};

export default Header;
