import React from 'react'
import { Container, Typography, Radio, Button, FormControl, FormLabel,RadioGroup,FormControlLabel} from '@material-ui/core'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import useStyles from './style'
import TextField from '@material-ui/core/TextField';
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function Create() {

  
  const classes = useStyles()
  const history = useHistory()
  

  const [title, setTitle] = useState('')
  //storing values on given objects
  const [details, setDetails] = useState('')
  const [titleError, setTitleError] = useState(false)
  //set it to false so that it doesn,t show the error 
  const [detailsError, setDetailsError] = useState(false)
  const [category, setCategory] = useState('life')

  //passing a function to the event object
  const handleSubmit = (e) => {
    //prevent the sunbmitting of dafaults values when the browser refreshes
    e.preventDefault()
    setTitleError(false)
    //no error to be shown before we do the checks
    setDetailsError(false)


    if(title === ''){
      setTitleError(true)
      // if title is equal to an empty string then the error should be shown
    }

    if(details === '')
    {
      setDetailsError(true)
    }

    if (title && details){
      //sending it to the same endpoints
      fetch('http://localhost:8000/notes', {
        method: 'POST',
        //posting data into the json server
        headers: {'content-type': "application/json"},
        //what type of content will be sent to json 
        body: JSON.stringify({title,details,category})
        //what we want to send to the server, use stringify to transfer it to json using the json format since we cant send it as a js format

      })
      .then(() => history.push('/'))
      // this is asycnchronous so what we want to do is redirect them back to the front page and view the content posted
    }
    
  }

  return (
      <main>
      <Container >
      <Typography 
      variant="h6"
      component ="h2"
      color = 'textSecondary'
      >
        Create a new Note
      </Typography>

      <form noValidate autoComplete ='off' onSubmit={handleSubmit}>
        <TextField
        onChange={e => setTitle(e.target.value)}
        //you have to pass the event as a parameter (e) for it to be used as an object
        className={classes.field}
        label="Note Title"
        variant="outlined"
        color="secondary"
        fullWidth
        required
        error={titleError}
        //the error above is set to true by default 
        />

      <TextField
      onChange={e => setDetails(e.target.value)}
        className={classes.field}
        label="Details"
        variant="outlined"
        color="secondary"
        fullWidth
        multiline
        rows={3}
        required
        error={detailsError}
        />
        <FormControl className={classes.field}>
        <FormLabel> Note Category </FormLabel>
        <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)} >
        <FormControlLabel value="life" control={<Radio/>} label="Life" />
        <FormControlLabel value="todos" control={<Radio/>} label="Todo's"/>
        <FormControlLabel value="reminders" control={<Radio/>} label="Reminders" />
        <FormControlLabel value="work" control={<Radio/>} label="Work" />
        </RadioGroup>
        </FormControl>

      <Button 
      type="submit"
      color="secondary"
      variant="contained"
      endIcon={< KeyboardArrowRightIcon/>}
      >
        Submit
      </Button>
      </form>

      
    </Container>
    </main>

    
  )
}
