import React from "react";
import ItemForm from "./ItemForm";
import Item from "./Item";

function ShoppingList({ items, searchText, selectedCategory, onItemFormSubmit }) {
  const itemsToDisplay = items.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearchText = item.name.toLowerCase().includes(searchText.toLowerCase());
    return matchesCategory && matchesSearchText;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
