import React from 'react';
import type { Iplayer } from '../../types/player';
import SelectedPlayersCard from './selectedPlayerCard';


interface ISelectedPlayersProps{
    selectedPlayers: Iplayer[];
    setSelectedPlayers: React.Dispatch<React.SetStateAction<Iplayer[]>>;
    coin: number,
    setCoin:  React.Dispatch<React.SetStateAction<number>>;
}
const SelectedPlayers = ({
    selectedPlayers,
    setSelectedPlayers,
    coin,
    setCoin
    }:

     ISelectedPlayersProps) => {

    console.log(selectedPlayers,"from selected players")

    if(selectedPlayers.length === 0){
        return (
            <div className='flex justify-center items-center h-[400px]'>    
            <p className="text-xl font-bold">No players selected</p>
            </div>
        );
    }

    return (
        
         <div className="grid grid-cols-1 gap-7 mr-4">
            {selectedPlayers.map((player: Iplayer)=>{
                return (
                    
                 <SelectedPlayersCard key={player.playerName} player={player} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}
                 coin={coin} setCoin={setCoin}
                 ></SelectedPlayersCard>            

                );
            })}
        </div>
    );
};

export default SelectedPlayers;