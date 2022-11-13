import React from "react";
import { FixedSizeList as List } from "react-window";
import { Grid } from "@material-ui/core";
import MediaCard from '../cards'

export default function VirtualizeGrid({ listItems }) {  
  const list = React.useRef(null);
  const offsetTop = document.getElementById('search_pokemons')?.offsetTop ? document.getElementById('search_pokemons')?.offsetTop : 0
  const MultiRows = ({ index, style }) => {
    const renderItems = [];
    for (var i = index * 6; i < index * 6 + 6; i++) {
      if (listItems[i] !== undefined) {
        renderItems.push(
          <Grid
            key={`row-item-${Math.random()}`}
            item
            xs={12}
            sm={6}
            md={4}
            lg={2}
            style={{ boxSizing: "border-box", padding: "16px" }}
          >
            <MediaCard index={listItems[i].id} content = {listItems[i]}></MediaCard>
          </Grid>
        );
      }
    }
    return (
      <Grid container style={style}>
        {renderItems}
      </Grid>
    );
  };

  return (
    <List
      ref={list}
      height={window?.visualViewport?.height - offsetTop - 100} 
      itemCount={listItems.length / 6 + 1}
      itemSize={200}
      width="100%"
    >
      {MultiRows}
    </List>    
  );
} 