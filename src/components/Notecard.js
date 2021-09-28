import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { IconButton, Typography,Avatar } from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';
import {makeStyles} from '@material-ui/core';  
import {blue, red, purple, green} from '@material-ui/core/colors';

const useStyles = makeStyles({
    avatar: {
        backgroundColor: (note) => {
            if (note.category === 'work'){
                return red[700]
            }
            if (note.category === 'todos'){
                return blue[700]
            }
            if (note.category === 'reminders'){
                return purple[700]
            }
            return green [500]
}
    }})

export default function Notecard ({ note, handleDelete }) {
    const classes = useStyles(note)
    return (
        <div>
            <Card elevation={2}>
                <CardHeader
                avatar={
                    <Avatar className={classes.avatar}>
                        {note.category[0].toUpperCase()}
                    </Avatar>
                }
                action = {
                    <IconButton onClick={() => handleDelete(note.id)}>
                        <DeleteOutlined />
                    </IconButton>
                }
                title={note.title}
                subheader={note.category}
                />

            <CardContent>
                <Typography 
                variant='body2' color='textSecondary'>
                    {note.details}   
                </Typography>
                </CardContent>                  
                        
            </Card>
        </div>
    )
}



