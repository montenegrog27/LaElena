import React from "react";
import staffPerson from "../assets/images/staffPerson.png";

const EmployeeCard = ({ name, role }) => {
  return (
    <div className="border rounded-lg h-auto max-w-48 flex justify-center items-center flex-col shadow-2xl hover:bg-gray-200  transition-transform">
      <img
        src={staffPerson}
        alt={name}
        className=" object-cover rounded-t-md"
      />
      <div className="p-3 h-24">
        <h3 className="font-bold text-gray-700">{name}</h3>
        <p className="text-gray-500 text-sm">{role}</p>
      </div>
    </div>
  );
};

export default EmployeeCard;
