import './index.css'
import Container from "./components/Container";
import ZomatoSection from "./components/ZomatoSection";
import LocationHeading from "./components/LocationHeading";
import Locations from "./components/Locations";
import AllCountryHeading from './components/AllCountryHeading';


function App() {
  let locations = ['Kolkata','Agra','Ahmedabad','Ajmer','Allahabad','Bangalore','Bhopal','Chandigar','Chennai','Cuttak','Delhi','Darjiling','Goa','Hydrabad','Haridwar','Mumbai','Noida','Gurgaon']
  return (
    <>
      <ZomatoSection />
      <Container>
          <LocationHeading/>
          <Locations locations={locations}/>
          <AllCountryHeading/>
      </Container>
    </>
  );
}

export default App;
