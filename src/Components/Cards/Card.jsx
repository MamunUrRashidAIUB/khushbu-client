const Card = ({ name, image, title, brand }) => {
  return (
    <div className="bg-amber-950 w-60 shadow-xl rounded-lg overflow-hidden flex flex-col">
      <figure className="  mx-auto pt-10">
        <img src={image} alt={name} className="rounded-xl  " />
      </figure>
      <div className="card-body flex flex-col items-center text-center p-4 flex-grow">
        <h2 className="card-title  text-lg font-semibold  overflow-hidden">
          {name}
        </h2>
        <p className="text-sm   overflow-hidden">{title}</p>
        <p className="text-sm overflow-hidden">{brand}</p>
        <div className="card-actions mt-auto">
          <button className="btn btn-primary rounded-lg">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
