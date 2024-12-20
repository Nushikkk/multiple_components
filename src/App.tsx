import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ItemList from './components/ItemList';
import Footer from './components/Footer';
import CategoryList from './components/CategoryList';
import ItemForm from './components/ItemForm';
import LocalStorageService from './services/LocalStorageService';

const App: React.FC = () => {
  const [items, setItems] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const categories = ['Work', 'Personal'];

  useEffect(() => {
    const savedItems = LocalStorageService.loadItems();
    setItems(savedItems);
  }, []);

  useEffect(() => {
    LocalStorageService.saveItems(items);
  }, [items]);

  const handleAddItem = (name: string, category: string) => {
    setItems([...items, `${name} (${category})`]);
  };

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredItems = selectedCategory
    ? items.filter(item => item.includes(selectedCategory))
    : items;

  return (
    <div className="app">
      <Header title="Multiple Components" />
      <CategoryList categories={categories} onSelectCategory={handleSelectCategory} />
      <ItemForm onAddItem={handleAddItem} />
      <ItemList items={filteredItems} />
      <Footer text="This is the footer" />
    </div>
  );
}

export default App;
