const APP_THEME_ENGINE = {
  MuiIconButton: {
    root: {
      color: "var(--theme-primary-color)",     
      '&:hover': {
        backgroundColor: 'transparent'
      }
    },
    edgeStart: {
      marginLeft: -4
    }
  },  
  MuiAppBar : {
    colorPrimary : {
      background : 'linear-gradient(45deg, var(--theme-primary-color), var(--theme-secondary-color)) !important'
    }
  },
  MuiCardMedia : {
    root : {
      backgroundSize : 'contain'
    }
  }

}
export default APP_THEME_ENGINE;