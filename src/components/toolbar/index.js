import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Icon from '@material-ui/core/Icon'
import Grid from '@material-ui/core/Grid';

function ToolBar(props) {  
  const performAction = (  actionType , actionOn ) => {
    props.onClick( actionType , actionOn );
  }
  
  return (
    <React.Fragment>
      <Grid container direction="row" justifyContent='flex-end' className='primary_header' id='gulabi_teeto'>
        <Grid item>
          {props
          .customToolBar
          .map((data,index) => {            
            return (                
              <IconButton key={index} onClick={(event) => performAction(  data.actionType , data.actionOn ) }>
                <Tooltip title={data.tooltip}>
                  <Icon className= { data.is_disable ? 'disabled-app-icon' : 'app-icon' }   >{data.icon}</Icon>
                </Tooltip>                
              </IconButton>              
            )
          })}
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
ToolBar.prototype = {
  customToolBar: PropTypes.array,
  onClick : PropTypes.func
}
export default React.memo(ToolBar)