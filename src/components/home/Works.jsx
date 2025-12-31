import React from "react";
import worksData from "../../data/Home/works.json"; // Assuming you have a works.json file with the necessary data

const Works = () => {
  return (
     <div className="container relative mx-auto px-4 sm:px-6 lg:px-16">
      <div className="flex flex-col lg:flex-col items-center justify-center gap-8 py-16 bg-white">
        {/* Header */}
        <div className="flex flex-col items-center justify-center py-16">
          <h6 className="text-sm uppercase tracking-widest font-bold text-[#f0bc44] mb-2 playfont">
            Working Process
          </h6>
          <h4 className="playfont text-4xl">How Does IT Works</h4>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full ">
            {
                worksData.work.map((item, index) => (
                    <div
                        className="item-bx p-6 bg-white bg-opacity-80 hover:bg-opacity-95 transition duration-300 rounded shadow-xl mb-8"
                        key={index}
                    >
                        {/* <h2 className="numb text-2xl font-bold mb-2">{item.id}</h2> */}
                        <h6 className="mb-4 text-lg font-semibold playfont">{item.title}</h6>
                        <p className="mb-4 text-sm text-gray-700">{item.content}</p>
                    </div>
                ))
            }
        </div>

      </div>
    </div>
  );
};

export default Works;
