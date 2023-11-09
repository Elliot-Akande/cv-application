import DetailsItem from "./DetailsItem";
import { useState } from "react";
import { v4 as uuid } from "uuid";

function DetailsList({ data, setData, type }) {
  const [currentItem, setCurrentItem] = useState(-1);

  const handleItemPressed = (index) => {
    index !== currentItem ? setCurrentItem(index) : setCurrentItem(-1);
  };

  const updateData = (changedData, id) => {
    setData(
      data.map((item) => {
        return id === item.id ? changedData : item;
      })
    );
  };

  const addItem = () => {
    const item = {
      id: uuid(),
      start: "",
      end: "",
      location: "",
    };

    if (type === "company") {
      item.company = "";
      item.position = "";
      item.description = "";
    } else {
      item.school = "";
      item.degree = "";
    }

    setData([...data, item]);
    setCurrentItem(data.length);
  };

  const deleteItem = (id) => {
    setData(data.filter((item) => item.id !== id));
    setCurrentItem(-1);
  };

  const items = data.map((item, index) => (
    <DetailsItem
      key={item.id}
      data={item}
      type={type}
      isOpen={index === currentItem}
      setData={(changedData) => updateData(changedData, item.id)}
      handlePressed={() => handleItemPressed(index)}
      handleDelete={() => deleteItem(item.id)}
    ></DetailsItem>
  ));

  return (
    <>
      {currentItem >= 0 ? items[currentItem] : items}
      {currentItem < 0 && <button onClick={addItem}>Add new</button>}
    </>
  );
}

export default DetailsList;
