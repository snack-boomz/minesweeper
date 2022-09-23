import './App.css';
import React from 'react';
import { useState, useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import { AppContext } from "./AppContext";
import { Home } from "./components/Home";
import { Profile } from "./components/Profile";
import { Navbar } from "./components/Navbar";
import { Board } from "./components/Board";

function App() {

  let [ dimensions, setDimensions ] = useState(4);
  let [ squares, setSquares ] = useState((dimensions * dimensions))
  

  let [ totalMines, setTotalMines ] = useState(6);

  const mineMappingHelper = () => {
    let uniqueMineMappingSet = new Set();
    while (uniqueMineMappingSet.size !== totalMines) {
     
      uniqueMineMappingSet.add(Math.floor(Math.random() * squares));
      // console.log("uniqueMineMappingSet.size: ", uniqueMineMappingSet.size);
      // console.log("totalmines: ", totalMines);
    }
    
    // [...Array(totalMines)].map((mineLocation, index) => {
    //   return Math.floor(Math.random() * 100)
    // });

    return uniqueMineMappingSet;
  }

  let [ mineMapping, setMineMapping ] = useState(Array.from(mineMappingHelper()));

  const blockStateHelper = (currentBlock) => {
    // console.log("blockStateHelper called. Currentblock is: ", currentBlock);
    // console.log(mineMapping);
    for (let iterator = 0; iterator < mineMapping.length; iterator++) {
      //console.log(`currentBlock: ${currentBlock}, mineMapping[${iterator}]: ${mineMapping[iterator]}`);
        if (mineMapping[iterator] === currentBlock) {
            // console.log('mine!');
            return "mine";
        }
    }

}

  let [ blockStates, setBlockStates ] = useState([...Array(squares)].map((square, index) => {

    return { squareNumber: index + 1, state: blockStateHelper(index + 1) == "mine" ? "mine" : "blank", uncovered: false };

  }));

  let [ currentIndex, setCurrentIndex ] = useState(0);

  const gettersSetters = {
    dimensions,
    setDimensions,
    squares,
    setSquares,
    blockStates,
    setBlockStates,
    totalMines,
    setTotalMines,
    mineMapping,
    setMineMapping,
    currentIndex,
    setCurrentIndex
  }
  

  return (
    
    <AppContext.Provider value={ gettersSetters }>
      <Router>
        <Navbar/>
        <h1 className="text-center m-8 text-6xl font-extrabold">Minesweeper</h1>
        {/* { console.log("mineMapping: ", mineMapping) } */}
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="Profile" element={<Profile/>}></Route>
        </Routes>
      </Router>
    </AppContext.Provider>
    
  )
}

export default App;
