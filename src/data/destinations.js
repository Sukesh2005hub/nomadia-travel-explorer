const destinations = [
  {
    id: 1,
    name: "Paris",
    country: "France",
    region: "Europe",
    description:
      "A timeless city of art, architecture, cafés and unforgettable evenings along the Seine.",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
    latitude: 48.8566,
    longitude: 2.3522,
    famousPlaces: [
      {
        name: "Eiffel Tower",
        description:
          "Paris's iconic landmark offering panoramic views across the city.",
        image:
          "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Louvre Museum",
        description:
          "One of the world's most famous museums, home to an extraordinary art collection.",
        image:
          "https://images.unsplash.com/photo-1564399579883-451a5d44ec08?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },

  {
    id: 2,
    name: "Tokyo",
    country: "Japan",
    region: "Asia",
    description:
      "A fascinating blend of futuristic streets, ancient traditions, incredible food and vibrant neighbourhoods.",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80",
    latitude: 35.6762,
    longitude: 139.6503,
    famousPlaces: [
      {
        name: "Shibuya Crossing",
        description:
          "One of Tokyo's most recognizable intersections surrounded by the energy of the city.",
        image:
          "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Senso-ji Temple",
        description:
          "Tokyo's oldest temple and a beautiful introduction to traditional Japanese culture.",
        image:
          "https://images.unsplash.com/photo-1584448141569-69f342da535c?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },

  {
    id: 3,
    name: "Bali",
    country: "Indonesia",
    region: "Asia",
    description:
      "A tropical escape known for beaches, temples, rice terraces and peaceful landscapes.",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
    latitude: -8.4095,
    longitude: 115.1889,
    famousPlaces: [
      {
        name: "Uluwatu Temple",
        description:
          "A dramatic sea temple perched high above the Indian Ocean.",
        image:
          "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Tegallalang Rice Terraces",
        description:
          "Beautiful layered rice fields surrounded by lush Balinese scenery.",
        image:
          "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },

  {
    id: 4,
    name: "Rome",
    country: "Italy",
    region: "Europe",
    description:
      "Walk through thousands of years of history while enjoying Italian food, art and culture.",
    image:
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80",
    latitude: 41.9028,
    longitude: 12.4964,
    famousPlaces: [
      {
        name: "Colosseum",
        description:
          "The ancient Roman amphitheatre and one of Italy's most famous landmarks.",
        image:
          "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Trevi Fountain",
        description:
          "A spectacular Baroque fountain located in the heart of historic Rome.",
        image:
          "https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },

  {
    id: 5,
    name: "Dubai",
    country: "United Arab Emirates",
    region: "Middle East",
    description:
      "A modern destination combining futuristic architecture, luxury experiences and desert adventures.",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
    latitude: 25.2048,
    longitude: 55.2708,
    famousPlaces: [
      {
        name: "Burj Khalifa",
        description:
          "The world's tallest building, rising dramatically above Downtown Dubai.",
        image:
          "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Dubai Desert",
        description:
          "Experience golden dunes, sunsets and traditional desert landscapes.",
        image:
          "https://images.unsplash.com/photo-1470214304380-aadaedcfff1b?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },

  {
    id: 6,
    name: "Goa",
    country: "India",
    region: "Asia",
    description:
      "A relaxed coastal destination known for beaches, Portuguese heritage, food and vibrant sunsets.",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
    latitude: 15.2993,
    longitude: 74.124,
    famousPlaces: [
      {
        name: "Baga Beach",
        description:
          "A lively beach known for its coastline, cafés and evening atmosphere.",
        image:
          "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Basilica of Bom Jesus",
        description:
          "A historic landmark showcasing Goa's Portuguese architectural heritage.",
        image:
          "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },

  {
    id: 7,
    name: "Kyoto",
    country: "Japan",
    region: "Asia",
    description:
      "A peaceful cultural city filled with temples, gardens, traditional streets and seasonal beauty.",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
    latitude: 35.0116,
    longitude: 135.7681,
    famousPlaces: [
      {
        name: "Fushimi Inari Shrine",
        description:
          "Famous for its thousands of vermilion torii gates winding through the forest.",
        image:
          "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Kinkaku-ji",
        description:
          "The Golden Pavilion surrounded by beautiful Japanese gardens.",
        image:
          "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },

  {
    id: 8,
    name: "Jaipur",
    country: "India",
    region: "Asia",
    description:
      "The Pink City offers grand palaces, colourful markets, historic forts and rich Rajasthani culture.",
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80",
    latitude: 26.9124,
    longitude: 75.7873,
    famousPlaces: [
      {
        name: "Amber Fort",
        description:
          "A magnificent hilltop fort showcasing Rajasthan's royal architecture.",
        image:
          "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Hawa Mahal",
        description:
          "The iconic Palace of Winds with its distinctive honeycomb-like façade.",
        image:
          "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },
];

export default destinations;