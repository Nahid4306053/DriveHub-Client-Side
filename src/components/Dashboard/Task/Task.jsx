/* eslint-disable react/prop-types */
// Task.js

import moment from "moment";

import { useDrag } from "react-dnd";
import DeleteItem from "./DeleteItem";

const ItemTypes = {
  TASK: "task",
};

const Task = ({ task, settaskID }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.TASK,
    item: { id: task._id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <>
      <div
        className="bg-red-200  p-5 border-b"
        ref={drag}
        style={{ opacity: isDragging ? 0.9 : 1 }}
      >
        <div className="flex  justify-between items-center">
          <div className="handel">
            <h2
              onClick={() => (
                settaskID(task._id),
                document.getElementById("viewTask").showModal()
              )}
              className="md:text-lg hover:text-red-600cursor-pointer"
            >
              <i className="fa-regular mr-5 fa-list-check"></i>
              {task.name}
            </h2>
            <div className="flex mt-4 md:flex-row flex-wrap md:items-center gap-2 ">
              <div className=" badge ">
                <i className="fa-duotone fa-calendar-days mr-2"></i>
                {moment(task?.date).calendar().includes("at")
                  ? moment(task?.date).calendar().split(" at ")[0]
                  : moment(task?.date).format("MMM Do YY")}
              </div>
              <div className="badge  capitalize">{task?.status}</div>

              <div>
                <div
                  onClick={() => (
                    settaskID(task._id),
                    document.getElementById("viewTask").showModal()
                  )}
                  className="btn btn-xs   capitalize"
                >
                  view task
                </div>
              </div>

              <div>
                <div
                  onClick={() => (
                    settaskID(task._id),
                    document.getElementById("Edit").showModal()
                  )}
                  className="btn btn-xs capitalize"
                >
                  Edit task
                </div>
              </div>
              <div>
                <DeleteItem id={task._id}></DeleteItem>
              </div>
            </div>
          </div>
          <div className="drag md:w-10 w-5 h-full md:text-2xl flex justify-center items-center">
            <i className="fa-solid cursor-move fa-grip-dots"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Task;
