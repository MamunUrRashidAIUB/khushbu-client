const Card = ({ name, image, title }) => {
  return (
    <div className="bg-amber-950 w-96 shadow-xl rounded-lg overflow-hidden flex flex-col">
      <figure className="px-10  pt-10">
        <img src={image} alt={name} className="rounded-xl " />
      </figure>
      <div className="card-body flex flex-col items-center text-center p-4 flex-grow">
        <h2 className="card-title mb-2 text-lg font-semibold h-10 overflow-hidden">
          {name}
        </h2>
        <p className="text-sm text-gray-300 mb-4 h-16 overflow-hidden">
          {title}
        </p>
        <div className="card-actions mt-auto">
          <button className="btn btn-primary rounded-lg">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
