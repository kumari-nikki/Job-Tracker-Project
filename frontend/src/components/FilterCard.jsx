import { useDispatch } from "react-redux";
import { Checkbox } from "./ui/checkbox";
import React, { useState, useEffect } from "react";
import { setSearchedQuery } from "@/redux/jobSlice";

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
  const [selectedValue, setSelectedValue] = useState([]);
 const dispatch=useDispatch();
  // ✅ FIXED handler (add/remove logic)
  const changeHandler = (value) => {
    setSelectedValue((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value) // remove
        : [...prev, value] // add
    );
  };

  useEffect(() => {
   dispatch(setSearchedQuery(selectedValue));
  }, [selectedValue]);

  return (
    <div className="pl-6">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3" />

      {filterData.map((data, index) => (
        <div key={index}>
          <h1 className="font-bold text-lg mt-3">{data.filterType}</h1>

          {data.array.map((item, idx) => (
            <div key={idx} className="flex items-center space-x-2 my-2">
              
              {/* ✅ FIXED checkbox */}
              <Checkbox
                id={item}
                checked={selectedValue.includes(item)}  // ✅ correct
                onCheckedChange={() => changeHandler(item)} // ✅ toggle
              />

              <label htmlFor={item}>{item}</label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default FilterCard;