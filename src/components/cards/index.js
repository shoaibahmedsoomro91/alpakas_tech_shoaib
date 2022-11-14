import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 235,
  },
  media: {
    height: 100,
  },

  gridItem: {
    width: "100%",
    height: "100%"    
  } 
});

export default function MediaCard({ index, content }) {
  const history = useHistory();

  const classes = useStyles();
  const handleClick = () => {    
    history.push({
      pathname: '/pokemons-detail',
      state: { id : content.id }      
    });
  }
  return (
    <Card className={classes.gridItem} onClick={handleClick} role='media-card'>
      <CardActionArea>
        <CardMedia
          role='media-image'
          className={classes.media}
          image= {content.sprites.front_default}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h6" role='card-heading'>
            { content.name }
          </Typography>          
          {
            content.types && content.types.length > 0 && content.types.map((dt, index) => {
                return <span key={index} style={{ paddingRight : 5 }} role='card-footer-text'>{dt.name}</span>
            })
          }
        </CardContent>      
      </CardActionArea>
      
    </Card>
  );
}