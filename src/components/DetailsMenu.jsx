function DetailsMenu({ children, title, isOpen, handleMenuPressed }) {
  return (
    <>
      <button onClick={handleMenuPressed}>
        <h2>{title}</h2>
      </button>
      {!!isOpen && children}
    </>
  );
}

export default DetailsMenu;
