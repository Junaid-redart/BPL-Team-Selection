import React, { use, useState } from 'react';
import type { Iplayer } from '../../types/player';
import AvailiablePlayers from './AvailablePlayers';
import SelectedPlayers from './SelectedPlayers';

interface Playersprops{
    playersPromise: Promise<Iplayer[]>;
    coin: number,
    setCoin:  React.Dispatch<React.SetStateAction<number>>;
}
const Players = ({playersPromise , coin,setCoin}:Playersprops) => {
    // console.log({playersPromise})
    const players= use (playersPromise);
    // console.log(players,"players");
    const [buttonType, setButtonType]=useState<"available" | "selected">("available");
    const [selectedPlayers,setSelectedPlayers]= useState<Iplayer[]>([]);

    console.log(buttonType);

    const handleUpdatebtntype=(type: "available"|"selected") =>{
        setButtonType(type);
    };
    return (
        <>
        <div className='container mx-auto'>
             <div className='flex justify-between gap-4 my-2'>
                <h2 className='font-bold text-xl'>{buttonType ==="available"? "Available Players":"Selected Players"}</h2>
                <div>
    <button
    onClick={()=>handleUpdatebtntype("available")}
        className={`btn ${
            buttonType === "available" ? "btn-success" : ""
        } rounded-r-none`}
    >
        Available
    </button>

    <button
     onClick={()=>handleUpdatebtntype("selected")}
        className={`btn ${
            buttonType === "selected" ? "btn-success" : ""
        } rounded-l-none`}
    >
        Selected
    </button>
</div>
            </div>

            <div>
        </div>
               {buttonType ==="available"? (<AvailiablePlayers players={players} coin={coin} setCoin={setCoin} 
               selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}/>):
               (<SelectedPlayers selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}
               coin={coin} setCoin={setCoin}>
                </SelectedPlayers>)}
            </div>
        </>
    );
};

export default Players;