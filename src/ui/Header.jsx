import Logo from "../assets/Dev-Topia-Logo.png";

function Header() {
  return (
    <header className="mb-4 md:mb-10">
      <img src={Logo} alt="Logo" className="w-20" />
    </header>
  );
}

export default Header;
