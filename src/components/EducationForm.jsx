import "/src/styles/form.css";

function EducationForm({ data, setData }) {
  const { school, degree, start, end, location } = data;

  return (
    <form>
      <ul>
        <li>
          <label htmlFor="school">School</label>
          <input
            type="text"
            id="school"
            value={school}
            onChange={(e) => setData("school", e.target.value)}
            autoComplete="on"
            autoCapitalize="on"
          />
        </li>
        <li>
          <label htmlFor="degree">Degree</label>
          <input
            type="text"
            id="degree"
            value={degree}
            onChange={(e) => setData("degree", e.target.value)}
            autoComplete="on"
          />
        </li>
        <li>
          <label htmlFor="start">Start</label>
          <input
            type="text"
            id="start"
            value={start}
            onChange={(e) => setData("start", e.target.value)}
            autoComplete="on"
          />
        </li>
        <li>
          <label htmlFor="end">End</label>
          <input
            type="text"
            id="end"
            value={end}
            onChange={(e) => setData("end", e.target.value)}
            autoComplete="on"
          />
        </li>
        <li>
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setData("location", e.target.value)}
            autoComplete="location"
            autoCapitalize="on"
          />
        </li>
      </ul>
    </form>
  );
}

export default EducationForm;
