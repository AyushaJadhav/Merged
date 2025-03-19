import React from "react";
import { format, addDays, startOfWeek, addWeeks } from "date-fns";


const SprintColumn = ({ children }) => {
  return <div className="flex w-full">{children}</div>;
};

SprintColumn.Header = () => {
  return <div className="basis-2xl shrink-0 ">Sprints</div>;
};



SprintColumn.Body = () => {
  const today = new Date();
  const startDate = startOfWeek(today, { weekStartsOn: 1 }); 
  const numWeeks = 20;
  const weeks =  Array.from({ length: numWeeks }, (_, index) =>
    addWeeks(startDate, index)
  );

  return(
  <div className="overflow-x-auto flex">
     {weeks.map((weekStart, index) => (
        <div
          key={index}
          className="border border-gray-300 shrink-0 m-1 p-1 w-[300px]  bg-gray-100"
        >
          <div className="text-xs text-gray-500 text-center">{format(weekStart, "MMMM")}</div>
          <div className="grid grid-cols-7 text-xs text-gray-600 gap-1">
            {Array.from({ length: 7 }).map((_, dayIndex) => {
              const day = addDays(weekStart, dayIndex);
              return (
                <div
                  key={dayIndex}
                  className="text-center p-1 rounded hover:bg-gray-200"
                >
                  {format(day, "d")}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

   
    /*<div className="border border-amber-300 shrink-0 m-1 p-1 w-[300px]">skjfhsfhd</div>*/

 
export default SprintColumn;
