import "lazysizes";
// import a plugin
import "lazysizes/plugins/parent-fit/ls.parent-fit";

function Card({ char }) {
  return (
    <div className="card">
      <div className="md:w-60 min-h-[240px]">
        <img
          className="card__img h-full lazyload blur-up"
          data-src={char?.image}
          alt="Character Image"
        />
      </div>

      <div className="p-3">
        <div>
          <h1 className="font-bold text-3xl">
            {char?.name.length > 18
              ? char?.name.slice(0, 18).concat("...")
              : char?.name || "Not Found"}
          </h1>
          <h1>
            <span
              className={`rounded-full inline-block w-2 h-2 ${
                char?.status == "Alive"
                  ? "bg-green-500"
                  : char?.status == "Dead"
                  ? "bg-red-500"
                  : "bg-gray-500"
              } mr-2`}
            ></span>
            <span>{char?.status || "Not Found"}</span>
            {" - "}
            <span>{char?.species || "Not Found"}</span>
          </h1>
        </div>

        <div className="my-4">
          <h1 className="text-gray-400">Type:</h1>
          <h1 className="text-lg mt-1">{char?.type || "Normal"}</h1>
        </div>

        <div>
          <h1 className="text-gray-400">Last known location:</h1>
          <h1 className="text-lg mt-1">
            {char?.location?.name || "Not Found"}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Card;
