const buttons = {
  POKEMON_CARDS : [    
    { actionType:'showDialog', actionOn:"sorting" , id:"sorting" , icon:"sort" , tooltip:"Sort"},
    { actionType: 'showDialog', actionOn: "filter", id: "filter", icon: "add", tooltip: "Filters" }
  ]
}
  
export const getToolbarButtons = (name) => {
  return buttons[name];
};  
  