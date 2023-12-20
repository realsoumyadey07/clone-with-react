import './index.css'
import Container from "./components/Container";
import ZomatoSection from "./components/ZomatoSection";
import LocationHeading from "./components/LocationHeading";
import Locations from "./components/Locations";



function App() {
  let locations = ['Kolkata','Agra','Ahmedabad','Ajmer','Allahabad','Bangalore','Bhopal','Chandigar','Chennai','Cuttak','Delhi','Darjiling','Goa','Hydrabad','Haridwar','Mumbai','Noida','Gurgaon','Udaypure','Srinagar','Salem','Raipur','Siliguri','Shimla','Ranchi','Mirat','Mysore','Dharamsala','Gangtok','Guawahati','Aurangabad','Amritsar','Ludhiana']
  return (
    <>
      <ZomatoSection />
      <Container>
          <LocationHeading/>
          <Locations locations={locations}/>
          
      </Container>
    </>
  );
}

export default App;
