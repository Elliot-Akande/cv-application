import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "/src/styles/DetailsMenu.css";

function DetailsMenu({ children, title, isOpen, handleMenuPressed, icon }) {
  const Icon = icon;

  return (
    <div className="detailsMenu__container">
      <button
        onClick={handleMenuPressed}
        className={`detailsMenu ${!isOpen ? "" : "detailsMenu--active"}`}
      >
        <h2>
          <Icon style={{ fontSize: "28px" }} />
          {title}
          <ExpandMoreIcon style={{ fontSize: "32px" }} />
        </h2>
      </button>
      {!!isOpen && children}
    </div>
  );
}

export default DetailsMenu;
