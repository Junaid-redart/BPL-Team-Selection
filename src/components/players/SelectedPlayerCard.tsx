import React from 'react';
import type { Iplayer } from '../../types/player';
import { TbTrash } from 'react-icons/tb';

interface IselectedPlayerCardProps{
    player: Iplayer;
    selectedPlayers: Iplayer[];
    setSelectedPlayers: React.Dispatch<React.SetStateAction<Iplayer[]>>;
    coin: number;
    setCoin: React.Dispatch<React.SetStateAction<number>>;
}
const SelectedPlayerCard = ({player ,selectedPlayers ,setSelectedPlayers ,coin ,setCoin}:IselectedPlayerCardProps) => {
     const handleDeletePlayer = (player: Iplayer) => {
            const restPlayers = selectedPlayers.filter(selectedPlayer=> selectedPlayer.playerName != player.playerName);
            console.log(restPlayers,"rest players")
            setSelectedPlayers(restPlayers);
            const newCoinPrice= coin + player.price;
            setCoin(newCoinPrice);
        }
    return (
          <div className="flex gap-2 justify-between items-center border-2 border-gray-200 rounded-3xl py-2 px-4">
                            <div className="flex gap-2 items-center">
                                <img src={player.playerImg} alt="" className="h-[70px] w-[70px]" />
                             <div>
                                <h2 className="font-bold text-2xl">{player.playerName}</h2>
                                <p>{player.playingHand}</p>
                              </div>
                            </div>
                            <span className="text-red-500 font-bold cursor-pointer" onClick={()=>handleDeletePlayer(player)}>
                                <TbTrash>
        
                                </TbTrash>
                            </span>
                         </div>
    );
};

export default SelectedPlayerCard;