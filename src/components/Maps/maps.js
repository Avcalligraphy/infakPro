import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import * as React from "react";
import Map, { Marker, NavigationControl } from "react-map-gl";
// import "./maps.css";

function MapsReact() {
  const [height, setHeight] = React.useState("calc(100vh - 100px)");

  // React.useEffect(() => {
  //   const handleWindowResize = () => {
  //     if (window.matchMedia("(max-width: 400px)").matches) {
  //       setHeight("100%");
  //     } else {
  //       setHeight("100%");
  //     }
  //   };

  //   window.addEventListener("resize", handleWindowResize);
  //   return () => window.removeEventListener("resize", handleWindowResize);
  // }, []);
  return (
    <div className="map-wrap">
      <Map
        mapLib={maplibregl}
        initialViewState={{
          longitude: 107.774261,
          latitude: -6.9292511,
          zoom: 14,
        }}
        style={{
          width: "100%",
          margin: "auto",
          height: "calc(100vh - 0px)",
          // borderRadius: "33px",
        }}
        mapStyle="https://api.maptiler.com/maps/streets/style.json?key=sVLnYoaj7y0PsT1a4jsL"
      >
        <NavigationControl position="top-left" />
        <Marker
          longitude={107.774261}
          latitude={-6.9292511}
          color="#000000"
        />
      </Map>
    </div>
  );
}

export default MapsReact;
