import { Checkbox } from "./ui/checkbox";
import React from "react";

const filterData = [
  {
    filterType: "Location",
    array: ["Delhi NCR", "Bangalore", "Hyderabad", "Mumbai", "Pune", "Chennai"],
  },
  {
    filterType: "Industry",
    array: ["Frontend Developer", "Backend Developer", "FullStack Developer"],
  },
  {
    filterType: "Salary",
    array: ["0-40k", "42k-1Lakh", "1Lakh-5lakh"],
  },
];

function FilterCard() {
  return (
    <div className="pl-6">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3" />

      {filterData.map((data, index) => (
        <div key={index}>
          <h1 className="font-bold text-lg mt-3">{data.filterType}</h1>

          {data.array.map((item, idx) => (
            <div key={idx} className="flex items-center space-x-2 my-2">
              <Checkbox id={item} />
              <label htmlFor={item}>{item}</label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default FilterCard;