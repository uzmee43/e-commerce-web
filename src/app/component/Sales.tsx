import Image from "next/image";


const Sales = () => {
  return (
    <div className="w-full flex justify-center items-center mt-10">
      <div className="w-[90%] lg:w-[80%] h-auto">
        {/* Header Section */}
        <div>
          <span id="red" className="border-l-8 border-red-500 text-red-600 p-2">
            Today’s
          </span>
          <div className="text-2xl md:text-3xl mt-4 md:mt-8 text-red-600 font-bold flex items-center gap-2 md:gap-5 mb-6">
            Flash Sales
           
          </div>
        </div>

        {/* Products Section */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-items-center mt-7">
          <div className="w-[150px] md:w-[200px] h-[180px] md:h-[260px] flex justify-center items-center p-5 border-2 border-gray-200 hover:border-blue-600">
            <Image
              src={require("./../../../public/Cart With Flat Discount.png11.png")}
              alt="img"
              className="object-contain"
            />
          </div>
          <div className="w-[150px] md:w-[200px] h-[180px] md:h-[260px] flex justify-center items-center p-5 border-2 border-gray-200 hover:border-blue-600">
            <Image
              src={require("./../../../public/Cart With Flat Discount.png2.png")}
              alt="img"
              className="object-contain"
            />
          </div>
          <div className="w-[150px] md:w-[200px] h-[180px] md:h-[260px] flex justify-center items-center p-5 border-2 border-gray-200 hover:border-blue-600">
            <Image
              src={require("./../../../public/Cart With Flat Discount.png3.png")}
              alt="img"
              className="object-contain"
            />
          </div>
          <div className="w-[150px] md:w-[200px] h-[180px] md:h-[260px] flex justify-center items-center p-5 border-2 border-gray-200 hover:border-blue-600">
            <Image
              src={require("./../../../public/Cart With Flat Discount.png4.png")}
              alt="img"
              className="object-contain"
            />
          </div>
        </div>

        {/* Button Section */}
        <div className="h-14 flex justify-center items-center mt-8">
          <button
            id="btn"
            className="text-white font-bold h-14 px-8 bg-red-600 hover:bg-red-700 transition-all duration-300 hover:text-blue-600"
          >
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
};


export default Sales;
