import "/src/styles/form.css";

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
            autoComplete="name"
            autoCapitalize="words"
          />
        </li>
        <li>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            autoComplete="email"
          />
        </li>
        <li>
          <label htmlFor="phone">Phone number</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setData({ ...data, phone: e.target.value })}
            autoComplete="phone"
          />
        </li>
        <li>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setData({ ...data, address: e.target.value })}
            autoComplete="address"
          />
        </li>
      </ul>
    </form>
  );
}

export default PersonalForm;
