
import { FaFlag, FaUser } from "react-icons/fa";
import type { Iplayer } from "../../types/player";
import { useState } from "react";
import { Bounce, toast } from "react-toastify";

interface IPlayerCardprops{
    player:Iplayer,
    coin: number,
    setCoin:  React.Dispatch<React.SetStateAction<number>>;
    selectedPlayers: Iplayer[];
    setSelectedPlayers: React.Dispatch<React.SetStateAction<Iplayer[]>>;
}

const PlayerCard = ({ player , coin,setCoin, selectedPlayers,setSelectedPlayers}: IPlayerCardprops) => {
    const [isSelected, setIsSelected] = useState(false);
    // console.log(coin , setCoin,"from card")
    const handleSelectPlayer=()=>{
        const newCoinPrice= coin-player.price;
        if(newCoinPrice>= 0){
            setIsSelected(true)
            setCoin(newCoinPrice);
            
        //Select Player logic
        setSelectedPlayers([...selectedPlayers, player]);
       toast.success(`${player.playerName} kinna laisos`, {
 position: "top-right",
 autoClose: 5000,
 hideProgressBar: false,
 closeOnClick: false,
 pauseOnHover: true,
 draggable: true,
 progress: undefined,
 theme: "colored",
 transition: Bounce,
});
        }
        else{

            toast.error("Teka Seshhhh!!")
        }


    };
    return (
        <div className="card bg-base-100 shadow-md border border-base-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

            {/* Player Image */}
            <figure className="px-4 pt-4">
                <img
                    src={player.playerImg}
                    alt={player.playerName}
                    className="w-full h-60 object-cover rounded-xl"
                />
            </figure>

            {/* Card Body */}
            <div className="card-body p-5 space-y-4">

                {/* Player Name */}
                <h2 className="card-title text-xl font-bold flex items-center gap-2">
                    <FaUser className="text-primary" />
                    {player.playerName}
                </h2>

                {/* Country & Role */}
                <div className="flex justify-between items-center">

                    <p className="flex items-center gap-2 font-semibold text-base-content/70">
                        <FaFlag className="text-secondary" />
                        {player.origin}
                    </p>

                    <span className="badge badge-primary badge-outline font-semibold">
                        {player.role}
                    </span>

                </div>

                {/* Divider */}
                <div className="divider my-1"></div>

                {/* Rating */}
                <div className="flex justify-between items-center">
                    <h3 className="font-bold text-lg">
                        Rating
                    </h3>

                    <div className="rating">
                        <input
                            type="radio"
                            name={`rating-${player.id}`}
                            className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                            type="radio"
                            name={`rating-${player.id}`}
                            className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                            type="radio"
                            name={`rating-${player.id}`}
                            className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                            type="radio"
                            name={`rating-${player.id}`}
                            className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                            type="radio"
                            name={`rating-${player.id}`}
                            className="mask mask-star-2 bg-orange-400"
                        />
                    </div>
                </div>

                {/* Playing Hand */}
                <div className="flex justify-between items-center">
                    <p className="font-semibold text-base-content/70">
                        Playing Hand
                    </p>

                    <span className="badge badge-info badge-lg">
                        {player.playingHand}
                    </span>
                </div>

                {/* Price & Button */}
                <div className="card-actions flex justify-between items-center pt-3">

                    <div>
                        <p className="text-sm text-base-content/60">
                            Price
                        </p>

                        <p className="text-xl font-bold text-primary">
                            $ {player.price.toLocaleString()}
                        </p>
                    </div>

                    <button
                        onClick={() => handleSelectPlayer()}
                        className={"btn btn-primary hover:scale-105 transition-transform"}
                        disabled={isSelected}>
                        {isSelected === true ? "Selected" : "Choose Player"}
                    </button>

                </div>

            </div>
        </div>
    );
};

export default PlayerCard;

