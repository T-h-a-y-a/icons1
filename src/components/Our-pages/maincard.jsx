import React from "react";

const Maincard = ({main}) => {
      if (!Array.isArray(main)) {
    return (
      <div className="text-center py-10 text-red-600 font-semibold">
        
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
      {main.map((card) => (
        <div
          key={card.id}
          className="bg-white rounded-xl shadow-md p-6 border border-gray-200"
        >
          <div className="flex gap-3 pb-3 items-center">
            <img src={card.image} className="w-10 " alt={card.alt} />
            <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
          </div>
          <p className="text-gray-600 text-justify">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Maincard;
