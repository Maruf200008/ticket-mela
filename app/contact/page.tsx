import AboutContact from "./components/AboutContact";
import ContactWithUs from "./components/ContactWithUs";
import Map from "./components/Map";

export default function page() {
  return (
    <div>
      <ContactWithUs />
      <AboutContact />
      <Map />
    </div>
  );
}
