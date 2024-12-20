import React from 'react';

interface CategoryListProps {
  categories: string[];
  onSelectCategory: (category: string) => void;
}

const CategoryList: React.FC<CategoryListProps> = ({ categories, onSelectCategory }) => {
  return (
    <div className="category-list">
      {categories.map((category, index) => (
        <button key={index} onClick={() => onSelectCategory(category)}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryList;
