import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <h1 className="text-center text-4xl font-bold capitalize text-red-700">
        oops! error 404
      </h1>
      <p className="text-center mt-4 ">
        Go to WordCounter page{" "}
        <Link to={"/"} className="text-blue-500">
          {" "}
          <span>Wordcounter</span>
        </Link>
      </p>
    </div>
  );
};

export default PageNotFound;
