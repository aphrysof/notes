import React from 'react'
import useStyles from '../pages/style'
import { Drawer, Typography, List, ListItem, ListItemIcon, ListItemText, AppBar,Toolbar } from '@material-ui/core'
import { SubjectOutlined,AddCircleOutlined } from '@material-ui/icons'
import { useHistory, useLocation } from 'react-router-dom'
import { InputBase } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import { format } from 'date-fns'
import { styled, alpha } from '@mui/material/styles'


export default function Layout({children}) {
    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()
    
    //Create a list function array that we'll map through
    const menuItems = [
        {
            text:'My Notes',
            icon: <SubjectOutlined color="secondary"/>,
            path:'/'
        }, 
        {
            text:'Create Note',
            icon: <AddCircleOutlined color="secondary"/>,
            path:'/create'
        }, 

    ]
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      }));
      
      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));
      
      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
              width: '20ch',
            },
          },
        },
      }));
    
    return (
        <div className={classes.root}>

             <AppBar
             className={classes.appbar}>
                 <Toolbar>
                    <Typography className={classes.date}>
                        Today is the {format(new Date(),'do MMMM Y')}
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                        <SearchIcon/>
                        </SearchIconWrapper>
                            <StyledInputBase
                            placeholder="Search..."
                            inputProps={{'aria-label': 'search'}}
                            />
                        
                            
                    </Search>
                 </Toolbar>

             </AppBar>
            <Drawer
            className={classes.drawer}
            variant = "permanent"
            anchor ="left"
            classes={{ paper:classes.drawerPaper }}
            >
                <div>
                    <Typography variant="h5" className={classes.title}>
                        My Notes
                    </Typography>
                </div>
                
                <List>
                    {menuItems.map(item => (
                        <ListItem
                        button
                        key={item.text}
                        onClick={() => history.push(item.path)}
                        className={location.pathname === item.path ? classes.active: null}
                        >
                            <ListItemIcon>
                                {item.icon}
                                </ListItemIcon>   
                                <ListItemText primary={item.text} />     
                        </ListItem>
                        ))}
                </List>
                
            </Drawer>
            <div className={classes.pages}>
            <div className={classes.toolbar}>
            </div>
            {children}  
            </div>
          
        </div>
    )
}
