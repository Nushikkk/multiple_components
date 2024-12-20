class LocalStorageService {
    static saveItems(items: string[]) {
      localStorage.setItem('items', JSON.stringify(items));
    }
  
    static loadItems(): string[] {
      const savedItems = localStorage.getItem('items');
      return savedItems ? JSON.parse(savedItems) : [];
    }
  }
  
  export default LocalStorageService;
  