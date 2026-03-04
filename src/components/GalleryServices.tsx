const GalleryServices = () => {
  return (
    <div>
      <section className="bg-black pt-4">
        <div className="flex items-center gap-2">
          <hr className="w-64 border-gray-500" />
          <h2 className="text-xl font-bold text-white">Gallery Services</h2>
        </div>
        <div className="flex flex-row justify-center items-center gap-16 pt-6 md:gap-12">
          <img
            className="w-64 h-64 rounded-2xl md:w-60 md:h-60"
            src="https://i.ibb.co/bQytGp8/pexels-caleb-falkenhagen-216813613-29932984.jpg"
            alt=""
          />
          <img
            className="w-64 h-64 rounded-2xl md:w-60 md:h-60"
            src="https://i.ibb.co/5srqMJc/pexels-micotino-126770659-10044631.jpg"
            alt=""
          />
          <img
            className="w-64 h-64 rounded-2xl md:w-60 md:h-60"
            src="https://i.ibb.co/6tBwNsK/pexels-vasilis-karkalas-155349971-17397880.jpg"
            alt=""
          />
        </div>
      </section>
    </div>
  );
};

export default GalleryServices;
