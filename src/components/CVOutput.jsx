import PhoneIcon from "@mui/icons-material/Phone";
import PlaceIcon from "@mui/icons-material/Place";
import EmailIcon from "@mui/icons-material/Email";
import "/src/styles/CVOutput.css";

function CVOutput({ personal, education, experience }) {
  const iconStyle = { fontSize: "22px" };

  return (
    <>
      <header>
        <h1>{personal.name}</h1>
        <div>
          {personal.email && (
            <p>
              <EmailIcon style={iconStyle} />
              {personal.email}
            </p>
          )}
          {personal.phone && (
            <p>
              <PhoneIcon style={iconStyle} />
              {personal.phone}
            </p>
          )}
          {personal.address && (
            <p>
              <PlaceIcon style={iconStyle} />
              {personal.address}
            </p>
          )}
        </div>
      </header>
      <main aria-label="CV main">
        {!!education.length > 0 && (
          <section>
            <h2>Education</h2>
            {education.map((data) => (
              <div key={data.id}>
                <div>
                  <p>
                    {data.start} - {data.end}
                  </p>
                  <p>{data.location}</p>
                </div>
                <div>
                  <h3>{data.school}</h3>
                  <p>{data.degree}</p>
                </div>
              </div>
            ))}
          </section>
        )}
        {!!experience.length > 0 && (
          <section>
            <h2>Professional Experience</h2>
            {experience.map((data) => (
              <div key={data.id}>
                <div>
                  <p>
                    {data.start} - {data.end}
                  </p>
                  <p>{data.location}</p>
                </div>
                <div>
                  <h3>{data.company}</h3>
                  <p>{data.position}</p>
                  <p>{data.description}</p>
                </div>
              </div>
            ))}
          </section>
        )}
      </main>
    </>
  );
}

export default CVOutput;
