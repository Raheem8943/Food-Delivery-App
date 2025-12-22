const Shimmer = () => {
  return (
    <div className="animate-pulse px-4">
      {/* Search bar shimmer */}
      <div className="flex justify-center my-4 gap-2">
        <div className="h-8 w-full max-w-[600px] bg-gray-300 rounded-xl"></div>
        <div className="h-8 w-13 bg-gray-300 rounded-xl"></div>
      </div>

      {/* Card shimmer grid */}
      <div
        className="grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          xl:grid-cols-5 
          2xl:grid-cols-7 
          gap-6"
      >
        {Array(14)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="w-full max-w-[240px] mx-auto bg-gray-300 h-[380px] rounded-md"
            ></div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer;
