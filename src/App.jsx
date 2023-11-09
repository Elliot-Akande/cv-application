import { useState } from "react";
import DetailsMenu from "./components/DetailsMenu";
import PersonalForm from "./components/PersonalForm";
import CVOutput from "./components/CVOutput";
import "./styles/App.css";
import DetailsList from "./components/DetailsList";
import { v4 as uuid } from "uuid";

function App() {
  const [currentMenu, setCurrentMenu] = useState(0);
  const [personalData, setPersonalData] = useState({
    name: "Elliot Akande",
    email: "elliotakande@gmail.com",
    phone: "+44 7344 924019",
    address: "Saltcoats, UK",
  });
  const [educationData, setEducationData] = useState([
    {
      id: 0,
      school: "University of Strathclyde",
      degree: "Bachelors in Computer Science",
      start: "08/2020",
      end: "present",
      location: "Glasgow, UK",
    },
  ]);
  const [experienceData, setExperienceData] = useState([
    {
      id: 0,
      company: "Umbrella Inc.",
      position: "UX & UI Designer",
      start: "08/2020",
      end: "present",
      location: "Glasgow, UK",
      description:
        "Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android",
    },
    {
      id: 1,
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
      <aside>
        <DetailsMenu
          title="Personal Details"
          isOpen={currentMenu === 0}
          handleMenuPressed={() => handleMenuPressed(0)}
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
    </>
  );
}

export default App;
