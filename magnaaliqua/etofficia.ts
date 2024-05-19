interface Coordinates {
  lng: string;
}

const coordinates: Coordinates = {
  lng: "-34.4618"
};

function parseLongitude(longitude: string): number | null {
  const parsed = parseFloat(longitude);
  return isNaN(parsed) ? null : parsed;
}

const longitudeValue = parseLongitude(coordinates.lng);

if (longitudeValue !== null) {
  console.log(`The longitude is ${longitudeValue}.`);
} else {
  console.log("Invalid longitude value.");
}
