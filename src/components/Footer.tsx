const Footer = () => {
  return (
    <div>
      <footer className="flex flex-row justify-between  justify-center p-4 text-base ">
        <ul className=" flex flex-row justify-center items-center gap-4 md:gap-2">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Gallery</a>
          </li>
        </ul>

        <p>© 2025 Bairon. Todos los derechos reservados.</p>
        <p>Contacto: contacto@tusitio.com</p>
      </footer>
    </div>
  );
};

export default Footer;
