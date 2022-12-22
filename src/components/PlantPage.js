import React,{ useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [searchInput, setSearchInput] = useState("")


useEffect(() => {
fetch('http://localhost:6001/plants')
  .then(resp => resp.json())
  .then(setPlants)
}, [])

const createNewPlant = (newPlant) => {
  setPlants([...plants, newPlant])
}

const searchPlant = (soughtPlant) => {
  setSearchInput(soughtPlant)
}

let filteredPlants = plants.filter(plant => plant.name.toLowerCase().includes(searchInput.toLowerCase()))


  return (
    <main>
      <NewPlantForm createNewPlant={createNewPlant} />
      <Search searchInput={searchInput} searchPlant={searchPlant}/>
      <PlantList plants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
