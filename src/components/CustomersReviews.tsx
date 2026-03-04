const CustomersReviews = () => {
  return (
    <div>
      <section className="bg-black pt-12 pb-12 text-white">
        <div className="flex items-center gap-2 flex-row-reverse">
          <hr className="w-64 border-gray-500" />
          <h2 className="text-xl font-bold text-white">Customer Reviews</h2>
        </div>
        <div className="flex justify-center items-center pt-6 gap-16 lg:gap-8 md:gap-12 md:flex-wrap">
          <div className="flex flex-col justify-center items-center w-72 h-76 gap-2 p-4 border rounded-xl border-solid border-inherit">
            <img
              src="https://i.ibb.co/YjjdBWB/d2d1b83f9aeb282efe4d510a18fe6657.jpg"
              alt=""
              className="w-20 h-20 rounded-full mt-2"
            />
            <h2>Fio Barrantes</h2>
            <p className="text-center">
              Estoy encantado con el trabajo realizado. Capturaron cada detalle
              y emoción de nuestro evento. ¡Las fotos son espectaculares!
            </p>
            <p>⭐⭐⭐⭐⭐</p>
          </div>
          <div className="flex flex-col justify-center items-center w-72 h-76 gap-2 p-4 border rounded-xl border-solid border-inherit">
            <img
              src="https://i.ibb.co/x8R4xfF/bf1e96ab228573b5f14cca020f781bad.jpg"
              alt=""
              className="w-20 h-20 rounded-full mt-2"
            />
            <h2>Bairon Fallas</h2>
            <p className="text-center">
              Las imágenes superaron todas mis expectativas. La atención al
              detalle y la creatividad hacen que cada foto sea única.
            </p>
            <p>⭐⭐⭐⭐⭐</p>
          </div>
          <div className="flex flex-col justify-center items-center w-72 h-76 gap-2 p-4 border rounded-xl border-solid border-inherit">
            <img
              src="https://i.ibb.co/mcDHVG8/6415993e7dc60fd63bd21043ef4f9ebf.jpg"
              alt=""
              className="w-20 h-20 rounded-full mt-2"
            />
            <h2>Levi Baltodano</h2>
            <p className="text-center">
              La mejor experiencia con un fotógrafo. Supo guiarnos y hacer que
              nos sintiéramos cómodos. Las fotos son simplemente hermosas.
            </p>
            <p>⭐⭐⭐⭐⭐</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomersReviews;
