export const fetchSpatialData = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        points: [
          { id: 1, lat: 12.971598, lng: 77.594566, name: "MG Road" },
          { id: 2, lat: 12.927923, lng: 77.627108, name: "Koramangala" },
          { id: 3, lat: 12.975226, lng: 77.605248, name: "Cubbon Park" },
          { id: 4, lat: 12.938219, lng: 77.622712, name: "BTM Layout" },
          {
            id: 5,
            lat: 12.929223,
            lng: 77.591667,
            name: "Lalbagh Botanical Garden",
          },
          { id: 6, lat: 13.08268, lng: 77.58918, name: "Hebbal Lake" },
          { id: 7, lat: 12.984497, lng: 77.605085, name: "Vidhana Soudha" },
          { id: 8, lat: 13.006752, lng: 77.564321, name: "Orion Mall" },
          { id: 9, lat: 12.916578, lng: 77.610116, name: "JP Nagar 4th Phase" },
          { id: 10, lat: 13.030965, lng: 77.647607, name: "Manyata Tech Park" },
        ],
        polygons: [
          {
            id: 1,
            coordinates: [
              [12.961, 77.582],
              [12.962, 77.585],
              [12.96, 77.588],
              [12.958, 77.585],
              [12.959, 77.582],
            ],
            name: "Irregular Area - Commercial Street",
          },
          {
            id: 2,
            coordinates: [
              [12.92, 77.618],
              [12.922, 77.62],
              [12.923, 77.622],
              [12.921, 77.624],
              [12.919, 77.622],
              [12.918, 77.62],
            ],
            name: "Oval Zone - Hosur Road",
          },
          {
            id: 3,
            coordinates: [
              [12.98, 77.598],
              [12.982, 77.6],
              [12.981, 77.603],
              [12.979, 77.605],
              [12.977, 77.603],
              [12.978, 77.6],
            ],
            name: "Contour - Mahatma Gandhi Statue Area",
          },
          {
            id: 4,
            coordinates: [
              [12.933, 77.615],
              [12.934, 77.617],
              [12.932, 77.619],
              [12.93, 77.618],
              [12.929, 77.615],
              [12.931, 77.614],
            ],
            name: "BTM Layout Contour",
          },
          {
            id: 5,
            coordinates: [
              [12.935, 77.585],
              [12.937, 77.588],
              [12.934, 77.59],
              [12.932, 77.588],
              [12.933, 77.586],
            ],
            name: "Irregular Shape - Jayanagar",
          },
          {
            id: 6,
            coordinates: [
              [13.09, 77.58],
              [13.092, 77.583],
              [13.091, 77.586],
              [13.089, 77.584],
              [13.088, 77.582],
            ],
            name: "Hebbal Lake Contour",
          },
          {
            id: 7,
            coordinates: [
              [12.99, 77.6],
              [12.993, 77.605],
              [12.991, 77.607],
              [12.989, 77.606],
              [12.987, 77.602],
            ],
            name: "Oval - Raj Bhavan Road",
          },
          {
            id: 8,
            coordinates: [
              [13.012, 77.55],
              [13.014, 77.555],
              [13.013, 77.558],
              [13.011, 77.556],
              [13.009, 77.552],
            ],
            name: "Malleshwaram Irregular Zone",
          },
          {
            id: 9,
            coordinates: [
              [12.91, 77.603],
              [12.912, 77.607],
              [12.909, 77.61],
              [12.907, 77.608],
              [12.906, 77.604],
            ],
            name: "Arekere Layout Oval",
          },
          {
            id: 10,
            coordinates: [
              [13.04, 77.635],
              [13.043, 77.64],
              [13.041, 77.645],
              [13.038, 77.643],
              [13.037, 77.638],
            ],
            name: "Nagawara Junction Irregular Contour",
          },
        ],
      });
    }, 1000);
  });
