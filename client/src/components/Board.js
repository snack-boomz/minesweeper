import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from "../AppContext";

export const Board = () => {

    const { dimensions, squares, blockStates, setBlockStates, totalMines, mineMapping, currentIndex, setCurrentIndex  } = useContext(AppContext);

    let tempIndex = 0;

    useEffect(() => {
        const blockStatesCopy = blockStates.slice();
        for (let iterator = 0; iterator < blockStates.length; iterator++) {
            console.log(`currentIndex: ${currentIndex}, blockStates[${iterator}]: ${blockStates[iterator]}`);
            if (iterator === currentIndex) {
                blockStatesCopy[iterator].uncovered = true;
                console.log("blockStatesCopy[iterator].uncovered: ", blockStatesCopy[iterator].uncovered);
            }
        }

        setBlockStates(blockStatesCopy);

    }, [currentIndex])


    const playHandler = (index) => {
        setCurrentIndex(index);
        console.log("currentIndex: ", currentIndex);
    }



   
    return (
        <section id="wrapper" className="h-full">
            <section id="board" className="border border-4 border-double border-gray w-5/6 h-[80%] my-8 mx-auto">
                <ul className="flex flex-wrap flex-row gap-0 h-full">
                {/* {console.log(dimensions)}
                {console.log(Array(dimensions))}
                {console.log(Array(dimensions).map(square => 0))} */}
                
                {/* Below initializes array of length of 100 (squares), all are empty values though
                , so .map fills all the empty values with 0s currently, then maps over them and
                creates a viewable element inside the minesweeper board */}
                {/* It's key that we find a way to dynamically iterate through each element and create
                each square in the minesweeper based on a height and width that are determined
                by the squares variable (which is the determined amount of squares based on dimensions) */}
                {/* Height and width of each square determined by: 100 / dimension of height or width
                Example: 100 / 10 width (from 10width x 10height = total squares) = 10% width, 10% height
                2nd Example: 100 / 30 width (from 30width x 30height = total squares) = 0.33% width, 0.33% height  */}
                {/* It's key that the height and width below are rounded, or else tailwinds css won't be able
                to interpret a huge decimal width of 3.3333333333333333% */}
                {/* https://medium.com/swlh/how-to-round-to-a-certain-number-of-decimal-places-in-javascript-ed74c471c1b8 */}
                {blockStates.map((square, index) => {
                    return <li 
                    // className={`block w-[${Math.round((100 / dimensions) * 100)/ 100}%] border border-black hover:bg-slate-400 transition duration 200`}
                    className={square.uncovered === false ? `block w-1/5 border border-black hover:bg-slate-400 transition duration 200 text-white` : `block w-1/5 border border-black hover:bg-slate-400 transition duration 200 text-white bg-red-100`}
                    onClick={() => { playHandler(index);  } }
                    key={ index }>
                        { index }
                    </li>
                    // return <li className={`block h-[%] w-[20%] border border-black`}></li>
                })}
                </ul>
                { console.log("blockStates: ", blockStates ) }
            </section>
        </section>
    )


}