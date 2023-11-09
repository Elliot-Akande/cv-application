function PersonalForm({ data, setData }) {
  const { name, email, phone, address } = data;

  return (
    <form>
      <ul>
        <li>
          <label htmlFor="name">Full name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </li>
        <li>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </li>
        <li>
          <label htmlFor="phone">Phone number</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setData({ ...data, phone: e.target.value })}
          />
        </li>
        <li>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setData({ ...data, address: e.target.value })}
          />
        </li>
      </ul>
    </form>
  );
}

export default PersonalForm;
