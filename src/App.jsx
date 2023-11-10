import { useState } from "react";
import ScienceIcon from "@mui/icons-material/Science";
import SchoolIcon from "@mui/icons-material/School";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { v4 as uuid } from "uuid";
import DetailsMenu from "./components/DetailsMenu";
import PersonalForm from "./components/PersonalForm";
import CVOutput from "./components/CVOutput";
import DetailsList from "./components/DetailsList";
import "./styles/App.css";

function App() {
  const [currentMenu, setCurrentMenu] = useState(0);
  const [personalData, setPersonalData] = useState({
    name: "Gordan Freeman",
    email: "gmanlives@protonmail.com",
    phone: "+44 7344 924019",
    address: "Glasgow, UK",
  });
  const [educationData, setEducationData] = useState([
    {
      id: uuid(),
      school: "University of Strathclyde",
      degree: "Bachelors in Computer Science",
      start: "08/2020",
      end: "present",
      location: "Glasgow, UK",
    },
  ]);
  const [experienceData, setExperienceData] = useState([
    {
      id: uuid(),
      company: "Umbrella Inc.",
      position: "UX & UI Designer",
      start: "08/2020",
      end: "present",
      location: "Glasgow, UK",
      description:
        "Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android.",
    },
    {
      id: uuid(),
      company: "Black Mesa Labs",
      position: "UX Research Assistant",
      start: "04/2018",
      end: "02/2019",
      location: "Berlin, Germany",
      description:
        "Supported senior researchers on accessibility standards for the open web. Created and usability tested wireframes and prototypes. Produced interactive documentation for quick onboarding of new researchers.",
    },
  ]);

  const handleMenuPressed = (index) => {
    index !== currentMenu ? setCurrentMenu(index) : setCurrentMenu(-1);
  };

  return (
    <>
      <nav>
        <ScienceIcon style={{ fontSize: "38px" }} />
        CV Lab
      </nav>
      <div className="content">
        <aside>
          <DetailsMenu
            title="Personal Details"
            isOpen={currentMenu === 0}
            handleMenuPressed={() => handleMenuPressed(0)}
            icon={AccountCircleIcon}
          >
            <PersonalForm
              data={personalData}
              setData={setPersonalData}
            ></PersonalForm>
          </DetailsMenu>
          <DetailsMenu
            title="Education"
            isOpen={currentMenu === 1}
            handleMenuPressed={() => handleMenuPressed(1)}
            icon={SchoolIcon}
          >
            <DetailsList
              data={educationData}
              setData={setEducationData}
              type="school"
            ></DetailsList>
          </DetailsMenu>
          <DetailsMenu
            title="Experience"
            isOpen={currentMenu === 2}
            handleMenuPressed={() => handleMenuPressed(2)}
            icon={BusinessCenterIcon}
          >
            <DetailsList
              data={experienceData}
              setData={setExperienceData}
              type="company"
            ></DetailsList>
          </DetailsMenu>
        </aside>
        <main>
          <CVOutput
            personal={personalData}
            education={educationData}
            experience={experienceData}
          ></CVOutput>
        </main>
      </div>
    </>
  );
}

export default App;
