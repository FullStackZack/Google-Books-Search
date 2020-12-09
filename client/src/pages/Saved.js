import React from 'react';
import Jumbotron from '../components/Jumbotron';
import Navbar from '../components/Navbar/Navbar';
import SavedBooks from "../components/saved"

function Saved () {
  return (
    <div>
        <Navbar />
        <Jumbotron />
        <SavedBooks />
    </div>
  )
}

export default Saved;