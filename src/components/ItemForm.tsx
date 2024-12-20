import React, { useState } from 'react';

interface ItemFormProps {
  onAddItem: (name: string, category: string) => void;
}

const ItemForm: React.FC<ItemFormProps> = ({ onAddItem }) => {
  const [itemName, setItemName] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = () => {
    if (itemName && category) {
      onAddItem(itemName, category);
      setItemName('');
      setCategory('');
    }
  };

  return (
    <div className="item-form">
      <input
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        placeholder="Enter item name"
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select Category</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
      </select>
      <button onClick={handleSubmit}>Add Item</button>
    </div>
  );
};

export default ItemForm;
