import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import CancelIcon from "@mui/icons-material/Cancel";
import SaveIcon from "@mui/icons-material/Save";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";
import "/src/styles/DetailsItem.css";

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

  const iconStyle = { fontSize: "22px" };

  if (!isOpen) {
    return (
      <button onClick={handlePressed} className="detailsItem">
        {data[type] || "Untitled"}
      </button>
    );
  } else {
    return (
      <>
        {getForm()}
        <div className="detailsItem__btns">
          <button
            onClick={() => {
              setData(changedData);
              handlePressed();
            }}
          >
            <SaveIcon style={iconStyle} />
            Save
          </button>
          <button onClick={handlePressed}>
            <CancelIcon style={iconStyle} />
            Cancel
          </button>
          <button onClick={handleDelete}>
            <DeleteIcon style={iconStyle} />
            Delete
          </button>
        </div>
      </>
    );
  }
}

export default DetailsItem;
