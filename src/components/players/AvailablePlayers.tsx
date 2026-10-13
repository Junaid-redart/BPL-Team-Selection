import React from 'react';
import type { Iplayer } from '../../types/player';
import PlayerCard from './PlayerCard';
interface IAvailableprops{
    players:Iplayer[],
    coin: number,
    setCoin:  React.Dispatch<React.SetStateAction<number>>;
    selectedPlayers: Iplayer[];
    setSelectedPlayers: React.Dispatch<React.SetStateAction<Iplayer[]>>;
}
const AvailablePlayers = ({ players ,coin, setCoin,selectedPlayers,setSelectedPlayers}: IAvailableprops) => {
    // console.log(players, 'players from availaible players')
    console.log(coin,setCoin,"from available players")
    return (
        <div className="grid grid-cols-3 gap-7 mr-4">
            {

                players.map((player: Iplayer ,ind:number) => {
                    return (
                        <PlayerCard key={ind} player={player} coin={coin}
                         setCoin={setCoin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}
                        ></PlayerCard>
                    
                    );
                })
            }
        </div>
    );
};

export default AvailablePlayers;