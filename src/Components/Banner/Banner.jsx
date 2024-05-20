import { Link } from "react-router-dom";
import banner from "../../assets/img/pngwing 1.png";

const Banner = () => {
  return (
    <>
      <div className="flex justify-evenly bg-[#1313130D] mt-16 items-center rounded-3xl px-20 py-14">
        <div>
          <h1 className="font-bold text-6xl playfair-display ">
            Books to freshen up <br /> your bookshelf
          </h1>
          <Link to="/list">
            <button className="btn btn-primary mt-12">View The List</button>
          </Link>
        </div>
        <div>
          <img src={banner} alt="" />
        </div>
      </div>
    </>
  );
};

export default Banner;
