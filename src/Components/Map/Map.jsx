import React from "react";

const Map = () => {
  return (
    <React.Fragment>
      <div className="map">
        <iframe
          style={{ marginTop: "25px" }}
          className="Map__data"
          width="600"
          height="400"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=Placa%20Pompeu%20Fabra%204,%2008760%20Martorell,%20Barcelona.%C2%A0%C2%A0SPAIN&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </div>
    </React.Fragment>
  );
};

export default Map;
