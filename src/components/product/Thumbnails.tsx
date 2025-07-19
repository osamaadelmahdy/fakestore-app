function Thumbnails({ image }: { image: string }) {
  return (
    <div className="flex md:flex-col gap-4 md:col-span-1">
      {[...Array(4)].map((_, i) => (
        <img
          key={i}
          src={image}
          alt="thumb"
          className="h-20 w-20 object-contain border hover:scale-105 transition duration-200"
        />
      ))}
    </div>
  );
}

export default Thumbnails;
