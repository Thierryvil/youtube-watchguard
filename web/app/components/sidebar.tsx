import React from 'react';
import { daysOfWeek } from '../utils';


interface SidebarProps {
  minutes: number[]
  setMinutes: (minutes: number[]) => void
}


const Sidebar = ({ minutes, setMinutes }: SidebarProps) => {

  const handleAddMinutes = (index: number) => {
    const newMinutes = [...minutes];
    newMinutes[index] += 1;
    setMinutes(newMinutes);
  };

  const handleRemoveMinutes = (index: number) => {
    const newMinutes = [...minutes];
    if (newMinutes[index] > 0) {
      newMinutes[index] -= 1;
      setMinutes(newMinutes);
    }
  };

  return (
    <div className="w-64 px-2 p-5">
      <ul className="list-none p-0">
        {daysOfWeek.map((day, index) => (
          <li key={index} className="mb-2">
            <div className="flex flex-col items-center justify-between">
              <span>{day}</span>
              <div className="flex mt-1">
                <button
                  className="px-2 py-1 bg-blue-500 text-white rounded"
                  onClick={() => handleAddMinutes(index)}
                >
                  +
                </button>
                <span className="p-2 pt-2">{minutes[index]} min</span>
                <button
                  className="px-2 py-1 bg-red-500 text-white rounded"
                  onClick={() => handleRemoveMinutes(index)}
                >
                  -
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;