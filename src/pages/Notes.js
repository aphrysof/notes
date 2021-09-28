import React from 'react'
import { useState, useEffect } from 'react'
import { Container } from '@material-ui/core'
import Masonry from 'react-masonry-css'
import Notecard from '../components/Notecard'
export default function Notes() {
  const [notes, setNotes]= useState([])
 

useEffect(() => {
  fetch('http://localhost:8000/notes/')
    .then(res => res.json())
    .then(data => setNotes(data))

}, [])

//creating a function to delete certain data from the local state and also from the json
//passing the argument id of the note that we want to delete
const handleDelete = async(id)=> {
   await fetch('http://localhost:8000/notes/' + id, {
    method: 'DELETE'
   })
   //using the localhost url as an endpoint and the id for the data that we want to delete


const newNotes = notes.filter(note => note.id !== id)
setNotes(newNotes)
  
}


// this function filters out the deleted ID by evaluating the notes which is set to false so as to update the local state

const breakpointCols = {
  default: 3,
  1100: 2,
  700: 1

}
  return (
    <Container>
    <Masonry
     breakpointCols={3}
     className="my-masonry-grid"
     columnClassName="my-masonry-grid_column">
     {/* array of JSX items */}
    
      {notes.map(note =>(
        <div key={note.id}>
        <Notecard note = {note} handleDelete={handleDelete}/>
       
        </div>
      
      )  //Passing the two function as props
      )}
     </Masonry>
    </Container>
    
  )}    
