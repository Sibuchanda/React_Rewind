import React from "react";
import { Plus, Trash2 } from "lucide-react";
import { useSelector } from "react-redux";

const Todo = () => {
  const tasks = useSelector((state) => state.task);
  console.log(tasks);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-amber-100 to-orange-200 flex justify-center items-center py-10">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-[90%] max-w-lg border border-gray-200">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Todo App
        </h1>

        {/* Add Task Input */}
        <form className="flex items-center gap-3 mb-6">
          <input
            type="text"
            id="input-box"
            placeholder="Add a new task..."
            className="flex-1 border border-gray-400 p-3 rounded-lg text-gray-700 focus:border-blue-500 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-1 transition"
          >
            <Plus size={20} />
            Add
          </button>
        </form>

        {/* Todo List */}
        <ul className="list-container space-y-3">
          {tasks.map((currTask, index) => (
            <li
              key={index}
              className="flex items-center justify-between bg-gray-100 py-3 px-4 rounded-lg hover:bg-gray-200 transition"
            >
              <span className="text-gray-800 text-lg">
                {index + 1}. {currTask}
              </span>

              {/* Delete Button (no functionality yet) */}
              <button className="text-red-500 hover:text-red-600 cursor-pointer">
                <Trash2 size={20} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
