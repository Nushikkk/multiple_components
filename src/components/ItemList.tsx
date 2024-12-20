import React from 'react';

interface ItemListProps {
  items: string[];
}

const ItemList: React.FC<ItemListProps> = ({ items }) => {
  return (
    <ul className="item-list">
      {items.map((item, index) => (
        <li key={index} className="item">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
