import { useState } from "react";

const App = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: "Bob" } });
  };

  return (
    <>
      <p>id: {game.id}</p>
      <p>name: {game.player.name}</p>
      <button onClick={handleClick}>change name</button>
    </>
  );
};

export default App;
