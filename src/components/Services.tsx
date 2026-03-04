import { MdCamera } from "react-icons/md";
import { PiDroneLight } from "react-icons/pi";
import { PiDroneFill } from "react-icons/pi";
import { IoCalendarNumberSharp } from "react-icons/io5";
const Services = () => {
  return (
    <div>
      <section
        className="flex flex-col justify-center items-center p-6 "
        id="Services"
      >
        <h2 className="text-2xl font-bold ">Nuestros Servicios</h2>
        <div className="flex flex-row justify-center items-center mt-8 gap-12">
          <div className="flex flex-wrap justify-center items-center gap-8 mt-2">
            <div className="flex flex-col items-center border border-black rounded-lg p-6 h-64 w-80 text-center">
              <h3 className="text-xl font-bold mb-3">Fotografia Profesional</h3>
              <MdCamera className="w-12 h-12 mb-3" />
              <p className="text-base">
                Fotografía profesional para eventos, retratos, productos, moda y
                publicidad, con imágenes de alta calidad adaptadas a cada
                necesidad.
              </p>
            </div>
            <div className="flex flex-col items-center border border-black rounded-lg p-6 h-64 w-80 text-center">
              <h3 className="text-xl font-bold mb-3">Fotografia con dron</h3>
              <PiDroneLight className="w-12 h-12 mb-3" />
              <p className="text-base">
                Fotografía con dron para capturar perspectivas únicas y vistas
                aéreas impresionantes, ideales para eventos y proyectos
                especiales.
              </p>
            </div>
            <div className="flex flex-col items-center border border-black rounded-lg p-6 h-64 w-80 text-center">
              <h3 className="text-xl font-bold mb-3">Videos con dron</h3>
              <PiDroneFill className="w-12 h-12 mb-3" />
              <p className="text-base">
                Videos con dron para capturar escenas aéreas impactantes,
                ideales para resaltar eventos, promociones, y proyectos con
                perspectivas únicas y dinámicas.
              </p>
            </div>
            <div className="flex flex-col items-center border border-black rounded-lg p-6 h-64 w-80 text-center">
              <h3 className="text-xl font-bold mb-3">Diferentes eventos</h3>
              <IoCalendarNumberSharp className="w-12 h-12 mb-3" />
              <p className="text-base">
                Cobertura para eventos variados, incluyendo bodas, fiestas, y
                eventos corporativos, con imágenes de alta calidad adaptadas a
                cada ocasión.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
