import { makeStyles } from "@material-ui/core";

const drawerWidth = 240 

const useStyles = makeStyles ((theme) =>({
    field:{
        marginTop: 20,
        marginBottom: 20,
        display: 'block'
    },
    pages:{
        background: '#ede7f6',
        width: '100%',
        padding: theme.spacing(3)
        },
    drawer:{
        width: drawerWidth,
        padding: theme.spacing(3)
    },
    drawerPaper: {
        width: drawerWidth
    },

    root:{
        display: 'flex'
    },
    active:{
        background: 'ede7f6'
    },
    title: {
        padding: theme.spacing(3)
    },
    appbar: {
        width: `calc(100% - ${drawerWidth}px)`
    },
    toolbar: theme.mixins.toolbar,
    date:{
        flexGrow: 1

    }
   
}));

export default useStyles;
