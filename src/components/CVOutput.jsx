function CVOutput({ personal, education, experience }) {
  return (
    <>
      <header>
        <h1>{personal.name}</h1>
        <div>
          <p>{personal.email}</p>
          <p>{personal.phone}</p>
          <p>{personal.address}</p>
        </div>
      </header>
      <main>
        {!!education && (
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
        {!!experience && (
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
