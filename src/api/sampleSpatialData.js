export const fetchSpatialData = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        points: [
          { id: 1, lat: 12.971598, lng: 77.594566, name: "MG Road" },
          { id: 2, lat: 12.927923, lng: 77.627108, name: "Koramangala" },
          { id: 3, lat: 12.975226, lng: 77.605248, name: "Cubbon Park" },
          { id: 4, lat: 12.938219, lng: 77.622712, name: "BTM Layout" },
          { id: 5, lat: 12.929223, lng: 77.591667, name: "Lalbagh Botanical Garden" },
          { id: 6, lat: 13.082680, lng: 77.589180, name: "Hebbal Lake" },
          { id: 7, lat: 12.984497, lng: 77.605085, name: "Vidhana Soudha" },
          { id: 8, lat: 13.006752, lng: 77.564321, name: "Orion Mall" },
          { id: 9, lat: 12.916578, lng: 77.610116, name: "JP Nagar 4th Phase" },
          { id: 10, lat: 13.030965, lng: 77.647607, name: "Manyata Tech Park" },
        ],
        polygons: [
          {
            id: 1,
            coordinates: [
              [
                [77.593566, 12.972598],
                [77.598000, 12.972598],
                [77.598000, 12.968598],
                [77.593566, 12.968598],
              ],
            ],
            name: "MG Road Area",
          },
          {
            id: 2,
            coordinates: [
              [
                [77.624000, 12.928000],
                [77.629000, 12.928000],
                [77.629000, 12.924000],
                [77.624000, 12.924000],
              ],
            ],
            name: "Koramangala 6th Block",
          },
          {
            id: 3,
            coordinates: [
              [
                [77.603000, 12.976000],
                [77.608000, 12.976000],
                [77.608000, 12.973000],
                [77.603000, 12.973000],
              ],
            ],
            name: "Cubbon Park Zone",
          },
          {
            id: 4,
            coordinates: [
              [
                [77.620000, 12.939000],
                [77.625000, 12.939000],
                [77.625000, 12.936000],
                [77.620000, 12.936000],
              ],
            ],
            name: "BTM Layout 2nd Stage",
          },
        ],
      });
    }, 1000); // Simulated network delay
  });

