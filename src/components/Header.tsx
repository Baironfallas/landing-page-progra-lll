import { FaCameraRetro } from "react-icons/fa";
const Header = () => {
  return (
    <div>
      <header className=" w-full h-[6rem] flex flex-row justify-between  justify-center items-center p-4">
        <div className="flex flex-row gap-4 justify-center items-center p-4 ">
          <FaCameraRetro className="w-12 h-12" />
          <h1 className="text-2xl">Snapsy</h1>
        </div>
        <nav className="">
          <ul className="flex flex-row text-lg justify-center items-center p-4 gap-4">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="#Services">Services</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
