export const cityData = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      id: "01",
      properties: { name: "peshawar", density: 94.65 },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [65.1599, 27.9362],
            [68.1372, 27.9071],
            [68.1592, 26.0864],
            [64.9402, 26.2737],
            [65.1599, 27.9362],
          ],
        ],
      },
    },

    {
      type: "Feature",
      id: "02",
      properties: { name: "Karachi", density: 94.65 },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [71.64935050726595, 33.62229603953832],
            [74.34773793237349, 32.59430407232329],
            [73.59781682300301, 32.361213876259384],
            [71.53469147759044, 32.80973463064933],
            [71.64935050726595, 33.62229603953832],
          ],
        ],
      },
    },
  ],
};
