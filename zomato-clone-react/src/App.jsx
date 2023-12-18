import Navbar from "./components/Navbar";
import Container from "./components/Container";
import ZomatoSection from "./components/ZomatoSection";
import LocationHeading from "./components/LocationHeading";
import Locations from "./components/Locations";


function App() {
  let locations = ['Kolkata','Agra','Ahmedabad','Ajmer','Allahabad','Bangalore','Bhopal','Chandigar','Chennai','Cuttak','Delhi','Darjiling','Goa','Hydrabad','Haridwar','Mumbai','Noida','Gurgaon']
  return (
    <>
      <Container>
          <Navbar />
          <ZomatoSection />
          <LocationHeading/>
          <Locations locations={locations}/>
      </Container>
    </>
  );
}

export default App;
