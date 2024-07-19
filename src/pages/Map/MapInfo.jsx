import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Map from "../../components/Map/Map";
import { getCoordinates } from "../../apis/kakaoApi";

const MapInfo = () => {
  const [initialLocation, setInitialLocation] = useState({
    latitude: 37.4482020408321,
    longitude: 126.651415033662,
  }); // 초기 좌표 인하대
  const [currentLocation, setCurrentLocation] = useState(initialLocation);

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const coordinates = await getCoordinates("인하로 100");
        setInitialLocation(coordinates);
      } catch (error) {
        console.error("Error fetching coordinates:", error);
      }
    };

    fetchCoordinates();
  }, []);

  useEffect(() => {
    setCurrentLocation(initialLocation);
  }, [initialLocation]);

  return (
    <>
      <Header />
      <Map
        latitude={currentLocation.latitude}
        longitude={currentLocation.longitude}
      />
      <Footer />
    </>
  );
};

export default MapInfo;
