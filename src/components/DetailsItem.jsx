import { useState } from "react";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";

function DetailsItem({
  data,
  setData,
  type,
  isOpen,
  handlePressed,
  handleDelete,
}) {
  const [changedData, setChangedData] = useState({ ...data });

  const setFormData = (key, value) => {
    setChangedData({ ...changedData, [key]: value });
  };

  const getForm = () => {
    if (type === "school")
      return (
        <EducationForm data={changedData} setData={setFormData}></EducationForm>
      );
    if (type === "company")
      return (
        <ExperienceForm
          data={changedData}
          setData={setFormData}
        ></ExperienceForm>
      );
  };

  if (!isOpen) {
    return <button onClick={handlePressed}>{data[type] || "Untitled"}</button>;
  } else {
    return (
      <>
        {getForm()}
        <div>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handlePressed}>Cancel</button>
          <button
            onClick={() => {
              setData(changedData);
              handlePressed();
            }}
          >
            Save
          </button>
        </div>
      </>
    );
  }
}

export default DetailsItem;
