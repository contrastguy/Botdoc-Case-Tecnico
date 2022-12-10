const tree = {
    value: 'Maça',
    left: {
      value: 'Morango',
      left: { value: 'Goiaba' },
      right: { value: 'Limao' },
    },
    right: {
      value: 'Pera',
      value:'Abacaxi',
      value:'Laranja',
      left: { value: 'Banana' },
      right: { value: 'Cebola' },
    },
  };
  
  
  function searchNode(root, value) {
    
    if (!root) return '';
  
    
    if (root.value === value) return value;
  
    
    const leftSearch = searchNode(root.left, value);
    const rightSearch = searchNode(root.right, value);
  
   
    if (leftSearch) return `${root.value} -> ${leftSearch}`;
    if (rightSearch) return `${root.value} -> ${rightSearch}`;
  
    
    return '';
  }
  



  const searchResult = searchNode(tree, 'Goiaba')