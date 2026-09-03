export function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(
        new Error(
          "Geolocation is not supported by this browser."
        )
      );
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        reject(error);
      }
    );
  });
}

export async function getLocationName(latitude, longitude) {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
  );

  if (!response.ok) {
    throw new Error("Unable to find location name.");
  }

  return response.json();
}