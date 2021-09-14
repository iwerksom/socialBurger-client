import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { MOCK_MAP_DATA } from "../mockData";

import { GoogleMap, LoadScript, Marker, InfoBox } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 55.667927,
  lng: 12.558015,
};

class SocialMapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: null };
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
  }
  handleMarkerClick(id) {
    this.setState((prevState) => ({
      isOpen: prevState.isOpen === id ? null : id,
    }));
  }
  render() {
    return (
      <LoadScript googleMapsApiKey="YOUR_KEY_HERE">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
          {MOCK_MAP_DATA.map((mapData) => (
            <Marker
              key={mapData.id}
              position={mapData.coordinates}
              onClick={() => this.handleMarkerClick(mapData.id)}
            >
              {this.state.isOpen === mapData.id && (
                <InfoBox anchor={mapData.coordinates}>
                  <Card style={{ width: "262px" }}>
                    <CardMedia
                      image={mapData.src}
                      title="Burger Joint image"
                      style={{ width: "262px", height: "104px" }}
                    />
                    <CardContent>
                      <Typography variant="h6" color="textSecondary">
                        {mapData.title}
                      </Typography>
                      <Typography variant="body1" color="textSecondary">
                        {mapData.location}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {mapData.openHours[new Date().getDay()]}
                      </Typography>
                    </CardContent>
                  </Card>
                </InfoBox>
              )}
            </Marker>
          ))}
        </GoogleMap>
      </LoadScript>
    );
  }
}
export default SocialMapComponent;
