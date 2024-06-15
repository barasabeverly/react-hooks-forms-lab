import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import Filter from "./Filter";
import itemData from "../data/items";
import { v4 as uuid } from "uuid";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  function handleSearchChange(search) {
    setSearchText(search);
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleItemFormSubmit(newItem) {
    setItems((prevItems) => [...prevItems, newItem]);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <Filter
        searchText={searchText}
        onSearchChange={handleSearchChange}
        onCategoryChange={handleCategoryChange}
      />
      <ShoppingList
        items={items}
        searchText={searchText}
        selectedCategory={selectedCategory}
        onItemFormSubmit={handleItemFormSubmit}
      />
    </div>
  );
}

export default App;
