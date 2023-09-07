import { useState } from "react";

export default function Team() {
  const [team, setTeam] = useState(11);

  const handleAdd =()=>{
    const newTeam = team + 1;
    setTeam(newTeam);
  }

  const handleRemove =()=>{
    const newTeam = team - 1;
    setTeam(newTeam);
  }
  
  const teamStyle = {
    border: "2px solid purple",
    margin: "15px",
    padding: "15px",
    borderRadius: "15px",
  };
  return (
    <div style={teamStyle}>
      <h3>Players: {team}</h3>
      <button style={{margin:'10px'}} onClick={handleAdd}>Add</button>
      <button style={{margin:'10px'}} onClick={handleRemove}>Remove</button>
    </div>
  );
}
