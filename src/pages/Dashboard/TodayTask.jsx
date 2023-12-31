/* eslint-disable no-unused-vars */
// App.js
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { toast } from "react-toastify";
import useAxiosSecureV1 from "../../Hooks/useAxiosSecureV1";
import useTodayTask from "../../Hooks/useTodayTasks";
import TaskList from "../../components/Dashboard/Task/TaskList";
import SmallError from "../../components/shared/SmallError";
import SmallLoading from "../../components/shared/SmallLoading";
import EditTask from "./EditTask";
import TaskDetailsModel from "./TaskDetailsModel";
const TodayTask = () => {
  const { TodayTask, error, isError, isLoading, isSuccess } = useTodayTask();
  const AxiosSecureV1 = useAxiosSecureV1();
  const QueryClient = useQueryClient();
  const [viewtaskById, settaskID] = useState();
  const mutation = useMutation({
    mutationFn: async (data) => {
      const res = AxiosSecureV1.patch(`/task/status/${data.taskId}`, {
        status: data.status,
      });
      return res;
    },
    onSuccess: () => {
      QueryClient.invalidateQueries("TodayTask");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  const handleTaskStatusChange = (taskId, newStatus) => {
    mutation.mutate({ taskId: taskId, status: newStatus });
  };

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        {isLoading ? (
          <SmallLoading></SmallLoading>
        ) : isError ? (
          <SmallError></SmallError>
        ) : (
          <>
            <div className="flex  my-10">
              {" "}
              <h1 className="p-5 mx-auto px-10 text-xl text-center bg-red-600text-white   clipshape2 shadow-lg">
                My Todays Task
              </h1>
            </div>
            <div className="md:p-7  flex lg:flex-row flex-col gap-7 justify-between">
              <div className="flex-1 custom-scrollbar max-h-[800px] overflow-y-auto">
                <TaskList
                  settaskID={settaskID}
                  tasks={TodayTask.data?.todo}
                  status="to-do"
                  onTaskStatusChange={handleTaskStatusChange}
                />
              </div>
              <div className="flex-1 flex flex-col h-full gap-7">
                <div className="lg:flex-1 custom-scrollbar max-h-[400px] overflow-y-auto">
                  <TaskList
                    settaskID={settaskID}
                    tasks={TodayTask.data?.ongoing}
                    status="ongoing"
                    onTaskStatusChange={handleTaskStatusChange}
                  />
                </div>
                <div className="lg:flex-1 custom-scrollbar max-h-[400px] overflow-y-auto">
                  <TaskList
                    settaskID={settaskID}
                    tasks={TodayTask.data?.completed}
                    status="completed"
                    onTaskStatusChange={handleTaskStatusChange}
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </DndProvider>
      <TaskDetailsModel id={viewtaskById}></TaskDetailsModel>
      <EditTask id={viewtaskById}></EditTask>
    </>
  );
};

export default TodayTask;
