import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Route } from 'react-router';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  link: {
    display: 'flex',
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
}));

export default function BreadCrumb() {
  const classes = useStyles();
  const LinkRouter = (props) => <Link {...props} component={RouterLink}  className={classes.link}/>;

  return (
    <Route>
      {({ location }) => {            
        let path = [];
        const parent = location?.state?.parent;
        const pathname = location.pathname.replace('/','')
        if(parent){
          path.push(parent);
          path.push(pathname)
        }else{
          path.push(pathname)
        }
        return (
          <Breadcrumbs aria-label="breadcrumb" style={{ marginBottom : 20}}>
            <LinkRouter color="inherit" to="/">
              <HomeIcon className={classes.icon}/>
              Home
            </LinkRouter>
            {path.map((value, index) => {
              const last = index === path.length - 1;
              const to = `${value}`;                  
              return last ? (
                <Typography color="textPrimary" key={to}>
                  {to}
                </Typography>
              ) : (
                <LinkRouter color="inherit" to={to} key={to}>
                  {to}
                </LinkRouter>
              );
            })}
          </Breadcrumbs>        
        );
      }}
    </Route>
  );
}