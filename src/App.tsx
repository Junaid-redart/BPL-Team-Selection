import Banner from "./components/Banner"
import Nav from "./components/Nav"
import Players from "./components/players/Players";
import { Suspense, useState } from "react";
import type { Iplayer } from "./types/player";

const PlayersFetch= async():Promise<Iplayer[]>=>{
  const res =await fetch('/data.json');
  const data =await res.json();
  return data;
}

function App() {
  // const PlayersPromise = PlayersFetch();
  const [playersPromise] = useState(() => PlayersFetch());
  const[coin,setCoin]=useState(15000);

  return (
    <>
    <Nav coin={coin}></Nav>
    <Banner></Banner>
    <Suspense fallback={<h2>loadoanwggaaa....</h2>}>

    <Players playersPromise={playersPromise} coin={coin} setCoin={setCoin}></Players>
    </Suspense>
    </>
  )
}

export default App
