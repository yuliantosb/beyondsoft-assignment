import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { GoogleMap, Marker } from "@react-google-maps/api";
import PlacesAutoComplete from "./PlacesAutoComplete";

function Map() {
  const { selected } = useSelector((state) => ({
    selected: state.map.selected,
  }));

  const center = useMemo(() => ({ lat: 43.45, lng: -80.49 }), []);
  //   const [selected, setSelected] = useState(null);
  return (
    <>
      <div className="places-container">
        <PlacesAutoComplete />
      </div>

      <GoogleMap
        zoom={10}
        center={selected ? selected : center}
        mapContainerClassName="map-container"
      >
        {selected && <Marker position={selected} />}
      </GoogleMap>
    </>
  );
}

export default Map;
