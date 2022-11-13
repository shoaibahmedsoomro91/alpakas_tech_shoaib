export const saveToLocalStorage = (key,value) => {
    try {      
      if(key){ 
        const values = loadFromLocalStorage(key) || [];
        values.push(value);
        localStorage.setItem(key, JSON.stringify(values));
        return true;
      }
      return false;
    } catch (e) {
      return false
    }  
  }
    
  export const removeFromLocalStorage = (key,id) => {
    try {      
      if(key){ 
        const values = loadFromLocalStorage(key);
        console.log('value====>',values,id);
        const index = values.findIndex(x => x.id === id);
        if(index > -1){
          values.splice(index, 1)
          localStorage.setItem(key, JSON.stringify(values));
          return true;
        }
        return false;
      }
      return false;
    } catch (e) {
      return false
    }
  }
    
  export const loadFromLocalStorage = (key) => {
    try {
      const serializedValue = localStorage.getItem(key)
      if (serializedValue === null)
        return false
      const data = JSON.parse(serializedValue);      
      return data
    } catch (e) {      
      return false
    }
  }