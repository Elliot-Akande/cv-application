function ExperienceForm({ data, setData }) {
  const { company, position, start, end, location, description } = data;

  return (
    <form>
      <ul>
        <li>
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            value={company}
            onChange={(e) => setData("company", e.target.value)}
          />
        </li>
        <li>
          <label htmlFor="position">Position</label>
          <input
            type="text"
            id="position"
            value={position}
            onChange={(e) => setData("position", e.target.value)}
          />
        </li>
        <li>
          <label htmlFor="start">Start</label>
          <input
            type="text"
            id="start"
            value={start}
            onChange={(e) => setData("start", e.target.value)}
          />
        </li>
        <li>
          <label htmlFor="end">End</label>
          <input
            type="text"
            id="end"
            value={end}
            onChange={(e) => setData("end", e.target.value)}
          />
        </li>
        <li>
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setData("location", e.target.value)}
          />
        </li>
        <li>
          <label htmlFor="description">description</label>
          <textarea
            id="description"
            cols="30"
            rows="10"
            value={description}
            onChange={(e) => setData("description", e.target.value)}
          ></textarea>
        </li>
      </ul>
    </form>
  );
}

export default ExperienceForm;
