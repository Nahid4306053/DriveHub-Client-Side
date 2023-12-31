import { TextField } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../../../Context/AuthnicationContext";
import useAxiosSecureV1 from "../../../Hooks/useAxiosSecureV1";

export default function AdditionalInfoForm() {
  const { CurrentUser, SetCurrentUser } = useAuth();
  const AxiosSecureV1 = useAxiosSecureV1();
  const [readOnly, setreadOnly] = useState();
  const mutation = useMutation({
    mutationFn: async (data) => {
      const res = await AxiosSecureV1.patch("/user/set-addtional-info", data);
      return res;
    },
    onSuccess: (data) => {
      SetCurrentUser(data.data);
      toast.success(
        `Additional Info ${
          CurrentUser.additionalInfo ? "Update " : "Add "
        }Successfully`
      );
    },
    onError: (err) => {
      console.log(err);
      toast.error("Failed to Set Additional Info");
    },
  });
  const handelAddtionalInfo = (e) => {
    e.preventDefault();
    const formData = {};
    formData.phone = e.target.phone.value;
    formData.address = e.target.address.value;
    formData.education = e.target.education.value;
    formData.skill = e.target.skill.value;
    formData.work_experience = e.target.work_experience.value;
    formData.hobby = e.target.hobby.value;
    if (Object.keys(formData).length > 0) {
      mutation.mutate(formData);
      console.log(formData);
    } else {
      toast.error("Please Provide any information");
    }
  };
  useEffect(() => {
    if (CurrentUser.additionalInfo) {
      setreadOnly(true);
    } else {
      setreadOnly(false);
      console.log(CurrentUser.additionalInfo);
    }
  }, [CurrentUser]);
  return (
    <div className="mt-3 pb-10">
      <h1 className="text-2xl opacity-60 font-bold flex items-center flex-wrap">
        {CurrentUser.additionalInfo ? "" : "Add"} Additional Info:
        {CurrentUser.additionalInfo ? (
          <button
            className="btn btn-xs ml-5 btn-neutral"
            onClick={() => setreadOnly(!readOnly)}
          >
            {readOnly ? "Edit Info" : "Close Edit"}
          </button>
        ) : (
          ""
        )}
      </h1>
      <form
        onSubmit={handelAddtionalInfo}
        className="gap-10 mt-5 grid grid-cols-2"
      >
        <TextField
          type="tel"
          inputProps={{ readOnly: readOnly }}
          defaultValue={CurrentUser.additionalInfo?.phone}
          name="phone"
          id="phone"
          fullWidth
          label="Phone Number"
          variant="outlined"
        />
        <TextField
          type="text"
          inputProps={{ readOnly: readOnly }}
          defaultValue={CurrentUser.additionalInfo?.address}
          name="address"
          id="address"
          fullWidth
          label="Address"
          variant="outlined"
        />

        <TextField
          type="text"
          inputProps={{ readOnly: readOnly }}
          defaultValue={CurrentUser.additionalInfo?.education}
          name="education"
          id="education"
          fullWidth
          label="Education"
          variant="outlined"
        />

        <TextField
          type="text"
          inputProps={{ readOnly: readOnly }}
          defaultValue={CurrentUser.additionalInfo?.skill}
          name="skill"
          id="skill"
          fullWidth
          label="Skill"
          variant="outlined"
        />

        <TextField
          type="text"
          inputProps={{ readOnly: readOnly }}
          defaultValue={CurrentUser.additionalInfo?.work_experience}
          name="work_experience"
          id="work-experience"
          fullWidth
          label="Work experience"
          variant="outlined"
        />

        <TextField
          type="text"
          inputProps={{ readOnly: readOnly }}
          defaultValue={CurrentUser.additionalInfo?.hobby}
          name="hobby"
          id="hobby"
          fullWidth
          label="Hobby"
          variant="outlined"
        />

        {!readOnly && (
          <div className="col-span-2">
            <button className="btn bg-red-600  hover:bg-red-600  w-full text-white">
              {CurrentUser.additionalInfo ? "Edit" : "Add"} Additional Info
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
