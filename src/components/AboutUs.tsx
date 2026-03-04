import { Link } from "react-router";

const AboutUs = () => {
  return (
    <div>
      <section className="flex flex-row justify-center items-center gap-16 p-12 bg-black">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold text-white">
            Transforma tus Momentos en Arte
          </h2>
          <p className="text-xl text-slate-100 p-0.5">
            Capturamos cada emoción, cada detalle,
            <br />
            para que cada recuerdo sea inolvidable.
          </p>

          <p className="text-xl font-bold text-white p-0.5">
            Descubre tu Sesión Perfecta
          </p>
          <Link
            to="/header"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-3.5"
          >
            see more
          </Link>
        </div>
        <img
          src="https://i.ibb.co/rHkNqGP/imagen-about-me.jpg"
          alt=""
          className="w-72 h-72 rounded-3xl"
        />
      </section>
    </div>
  );
};

export default AboutUs;
