import banner from "../../assets/img/banner-book.jpg";

const Banner = () => {
  return (
    <>
      <div className="flex justify-evenly bg-[#1313130D] mt-16 items-center rounded-3xl px-20 py-14">
        <div>
          <h1 className="font-bold text-5xl">
            Books to freshen up <br /> your bookshelf
          </h1>
          <button className="btn btn-primary mt-12">View The List</button>
        </div>
        <div>
          <img src={banner} alt="" />
        </div>
      </div>
    </>
  );
};

export default Banner;
