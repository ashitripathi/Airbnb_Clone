import { Property } from '../types/property';

const mockProperties: Property[] = [
  {
    _id: '1',
    title: 'Luxury Beach Villa with Infinity Pool',
    description: 'Experience the ultimate beachfront luxury in this stunning villa with an infinity pool overlooking the ocean. This spacious property features 3 bedrooms, a fully equipped modern kitchen, and direct beach access. Perfect for families or groups looking for a premium vacation experience with breathtaking views and top-notch amenities.',
    type: 'house',
    location: 'Malibu, California',
    price: 350,
    images: [
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1438834/pexels-photo-1438834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    bedrooms: 3,
    beds: 4,
    bathrooms: 2,
    maxGuests: 6,
    amenities: ['Wi-Fi', 'Kitchen', 'Free parking', 'Pool', 'TV', 'Air conditioning'],
    rating: 4.9,
    reviews: [
      {
        _id: '101',
        user: {
          _id: '201',
          name: 'Michael Johnson',
          avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
        },
        rating: 5,
        text: 'Amazing place! The views are incredible and the house is beautifully furnished. We will definitely come back.',
        date: '2024-04-15'
      },
      {
        _id: '102',
        user: {
          _id: '202',
          name: 'Sarah Miller',
          avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
        },
        rating: 4.8,
        text: 'Loved our stay here. The infinity pool is even better than in the pictures. The host was very responsive and helpful.',
        date: '2024-03-22'
      }
    ],
    host: {
      _id: '301',
      name: 'David Wilson',
      email: 'david@example.com',
      avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
      isSuperhost: true,
      responseRate: 99,
      responseTime: 'within an hour',
      joinedDate: '2018-05-12'
    },
    availableFrom: '2025-01-10',
    availableTo: '2025-12-31',
    isBooked: false
  },
  {
    _id: '2',
    title: 'Modern Downtown Apartment',
    description: 'Contemporary apartment in the heart of downtown with stunning city views. This sleek, modern space features high ceilings, large windows, and premium furnishings throughout. Perfectly situated for both business and leisure travelers who want to experience urban living at its finest. Walking distance to restaurants, shopping, and public transportation.',
    type: 'apartment',
    location: 'New York, New York',
    price: 180,
    images: [
      'https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/271734/pexels-photo-271734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/2227960/pexels-photo-2227960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    maxGuests: 2,
    amenities: ['Wi-Fi', 'Kitchen', 'Washer', 'Dryer', 'TV', 'Elevator'],
    rating: 4.7,
    reviews: [
      {
        _id: '103',
        user: {
          _id: '203',
          name: 'Emma Davis',
          avatar: 'https://randomuser.me/api/portraits/women/33.jpg'
        },
        rating: 4.5,
        text: 'Great location and very clean apartment. Perfect base for exploring the city.',
        date: '2024-04-02'
      },
      {
        _id: '104',
        user: {
          _id: '204',
          name: 'James Brown',
          avatar: 'https://randomuser.me/api/portraits/men/22.jpg'
        },
        rating: 5,
        text: 'The views from this apartment are spectacular, especially at night. Very comfortable bed and great shower.',
        date: '2024-03-15'
      }
    ],
    host: {
      _id: '302',
      name: 'Jennifer Lopez',
      email: 'jennifer@example.com',
      avatar: 'https://randomuser.me/api/portraits/women/29.jpg',
      isSuperhost: true,
      responseRate: 97,
      responseTime: 'within a few hours',
      joinedDate: '2019-11-23'
    },
    availableFrom: '2025-01-01',
    availableTo: '2025-11-30',
    isBooked: false
  },
  {
    _id: '3',
    title: 'Charming Mountain Cabin with Hot Tub',
    description: 'Escape to this cozy mountain cabin nestled among the trees. This rustic yet comfortable retreat features a private hot tub on the deck, a wood-burning fireplace, and beautiful forest views. Perfect for romantic getaways or small family vacations, with hiking trails just steps from your door and skiing only a short drive away.',
    type: 'cabin',
    location: 'Aspen, Colorado',
    price: 225,
    images: [
      'https://images.pexels.com/photos/803975/pexels-photo-803975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
      'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/145038/pexels-photo-145038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/129494/pexels-photo-129494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    bedrooms: 2,
    beds: 3,
    bathrooms: 1,
    maxGuests: 4,
    amenities: ['Wi-Fi', 'Kitchen', 'Free parking', 'Hot tub', 'Fireplace', 'Heating'],
    rating: 4.8,
    reviews: [
      {
        _id: '105',
        user: {
          _id: '205',
          name: 'Robert Clark',
          avatar: 'https://randomuser.me/api/portraits/men/52.jpg'
        },
        rating: 5,
        text: 'This cabin is a perfect mountain getaway. The hot tub under the stars was magical!',
        date: '2024-03-28'
      },
      {
        _id: '106',
        user: {
          _id: '206',
          name: 'Lisa Martinez',
          avatar: 'https://randomuser.me/api/portraits/women/67.jpg'
        },
        rating: 4.7,
        text: 'Very cozy and clean. We loved the fireplace and the surrounding nature. Will definitely come back in the summer.',
        date: '2024-02-10'
      }
    ],
    host: {
      _id: '303',
      name: 'Thomas Green',
      email: 'thomas@example.com',
      avatar: 'https://randomuser.me/api/portraits/men/33.jpg',
      isSuperhost: false,
      responseRate: 95,
      responseTime: 'within a day',
      joinedDate: '2020-06-18'
    },
    availableFrom: '2025-01-05',
    availableTo: '2025-12-15',
    isBooked: false
  },
  {
    _id: '4',
    title: 'Beachfront Condo with Spectacular Ocean Views',
    description: 'Wake up to the sound of waves in this beautiful beachfront condo. Floor-to-ceiling windows showcase panoramic ocean views from almost every room. This recently renovated space features modern furnishings, a fully equipped kitchen, and a large balcony perfect for watching sunsets. Steps away from the beach and a short walk to local restaurants and shops.',
    type: 'apartment',
    location: 'Miami Beach, Florida',
    price: 195,
    images: [
      'https://images.pexels.com/photos/2507010/pexels-photo-2507010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/2249955/pexels-photo-2249955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/210604/pexels-photo-210604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    bedrooms: 2,
    beds: 2,
    bathrooms: 2,
    maxGuests: 4,
    amenities: ['Wi-Fi', 'Kitchen', 'Pool', 'Gym', 'Air conditioning', 'TV'],
    rating: 4.9,
    reviews: [
      {
        _id: '107',
        user: {
          _id: '207',
          name: 'Daniel White',
          avatar: 'https://randomuser.me/api/portraits/men/18.jpg'
        },
        rating: 5,
        text: 'Incredible location and beautiful condo. We spent hours on the balcony just watching the ocean.',
        date: '2024-04-05'
      },
      {
        _id: '108',
        user: {
          _id: '208',
          name: 'Rachel Thompson',
          avatar: 'https://randomuser.me/api/portraits/women/23.jpg'
        },
        rating: 4.8,
        text: 'Very clean and well-maintained. The beach access was perfect and the ocean views are even better than in the photos.',
        date: '2024-03-01'
      }
    ],
    host: {
      _id: '304',
      name: 'Maria Rodriguez',
      email: 'maria@example.com',
      avatar: 'https://randomuser.me/api/portraits/women/85.jpg',
      isSuperhost: true,
      responseRate: 100,
      responseTime: 'within an hour',
      joinedDate: '2017-09-05'
    },
    availableFrom: '2025-01-15',
    availableTo: '2025-12-20',
    isBooked: false
  },
  {
    _id: '5',
    title: 'Stylish Loft in Historic District',
    description: 'Experience authentic city living in this charming converted loft in the historic district. Featuring exposed brick walls, high ceilings, and original hardwood floors that showcase its industrial past while modern amenities provide all the comfort you need. Located in a vibrant neighborhood filled with boutiques, cafes, and galleries all just steps from your door.',
    type: 'apartment',
    location: 'Chicago, Illinois',
    price: 165,
    images: [
      'https://images.pexels.com/photos/3038424/pexels-photo-3038424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3038425/pexels-photo-3038425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3016430/pexels-photo-3016430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1036371/pexels-photo-1036371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    maxGuests: 2,
    amenities: ['Wi-Fi', 'Kitchen', 'Washer', 'Dryer', 'TV', 'Heating'],
    rating: 4.8,
    reviews: [
      {
        _id: '109',
        user: {
          _id: '209',
          name: 'Benjamin Taylor',
          avatar: 'https://randomuser.me/api/portraits/men/62.jpg'
        },
        rating: 5,
        text: 'The loft exceeded our expectations. So much character and the location is perfect for exploring the city.',
        date: '2024-04-10'
      },
      {
        _id: '110',
        user: {
          _id: '210',
          name: 'Olivia Wilson',
          avatar: 'https://randomuser.me/api/portraits/women/39.jpg'
        },
        rating: 4.7,
        text: 'Beautiful space with great attention to detail. We loved the neighborhood and all the nearby restaurants.',
        date: '2024-03-08'
      }
    ],
    host: {
      _id: '305',
      name: 'Alex Johnson',
      email: 'alex@example.com',
      avatar: 'https://randomuser.me/api/portraits/men/77.jpg',
      isSuperhost: true,
      responseRate: 98,
      responseTime: 'within a few hours',
      joinedDate: '2019-02-14'
    },
    availableFrom: '2025-01-03',
    availableTo: '2025-12-10',
    isBooked: false
  },
  {
    _id: '6',
    title: 'Tropical Villa with Private Pool',
    description: 'Escape to paradise in this luxurious tropical villa surrounded by lush gardens. The highlight is the private pool and outdoor entertainment area, perfect for relaxing days in the sun. Inside, the spacious open-plan design creates a seamless indoor-outdoor living experience. Just a short drive to beautiful beaches and local attractions.',
    type: 'house',
    location: 'Kihei, Hawaii',
    price: 275,
    images: [
      'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/2098639/pexels-photo-2098639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/90317/pexels-photo-90317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/5490931/pexels-photo-5490931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    bedrooms: 3,
    beds: 4,
    bathrooms: 2,
    maxGuests: 6,
    amenities: ['Wi-Fi', 'Kitchen', 'Free parking', 'Pool', 'Air conditioning', 'BBQ grill'],
    rating: 4.9,
    reviews: [
      {
        _id: '111',
        user: {
          _id: '211',
          name: 'Christopher Lee',
          avatar: 'https://randomuser.me/api/portraits/men/36.jpg'
        },
        rating: 5,
        text: 'This villa is a slice of paradise! The private pool was the highlight of our stay.',
        date: '2024-03-25'
      },
      {
        _id: '112',
        user: {
          _id: '212',
          name: 'Sophia Garcia',
          avatar: 'https://randomuser.me/api/portraits/women/53.jpg'
        },
        rating: 4.8,
        text: 'Beautiful home with everything we needed for a relaxing vacation. The garden is stunning and so peaceful.',
        date: '2024-02-18'
      }
    ],
    host: {
      _id: '306',
      name: 'Samantha Chen',
      email: 'samantha@example.com',
      avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
      isSuperhost: true,
      responseRate: 99,
      responseTime: 'within an hour',
      joinedDate: '2018-11-30'
    },
    availableFrom: '2025-01-08',
    availableTo: '2025-12-22',
    isBooked: false
  },
  {
    _id: '7',
    title: 'Rustic Farmhouse with Mountain Views',
    description: 'Experience country living in this beautifully restored 19th-century farmhouse set on 5 acres of private land. Featuring authentic details like original beams and stonework alongside modern comforts. Wake up to breathtaking mountain views and enjoy peaceful evenings on the wraparound porch. The perfect base for exploring nearby hiking trails, wineries, and charming small towns.',
    type: 'house',
    location: 'Woodstock, Vermont',
    price: 220,
    images: [
      'https://images.pexels.com/photos/2440471/pexels-photo-2440471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1559825/pexels-photo-1559825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/631411/pexels-photo-631411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/265004/pexels-photo-265004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    bedrooms: 3,
    beds: 5,
    bathrooms: 2,
    maxGuests: 8,
    amenities: ['Wi-Fi', 'Kitchen', 'Free parking', 'Fireplace', 'Heating', 'Washer'],
    rating: 4.8,
    reviews: [
      {
        _id: '113',
        user: {
          _id: '213',
          name: 'William Harris',
          avatar: 'https://randomuser.me/api/portraits/men/41.jpg'
        },
        rating: 5,
        text: 'This farmhouse is absolutely gorgeous. We loved the peaceful setting and the thoughtful restoration work.',
        date: '2024-04-01'
      },
      {
        _id: '114',
        user: {
          _id: '214',
          name: 'Emily Phillips',
          avatar: 'https://randomuser.me/api/portraits/women/15.jpg'
        },
        rating: 4.7,
        text: 'A perfect place to disconnect and enjoy nature. The house is comfortable and full of character.',
        date: '2024-02-25'
      }
    ],
    host: {
      _id: '307',
      name: 'Jonathan Parker',
      email: 'jonathan@example.com',
      avatar: 'https://randomuser.me/api/portraits/men/19.jpg',
      isSuperhost: false,
      responseRate: 92,
      responseTime: 'within a day',
      joinedDate: '2020-03-10'
    },
    availableFrom: '2025-01-15',
    availableTo: '2025-11-30',
    isBooked: false
  },
  {
    _id: '8',
    title: 'Urban Treehouse Retreat',
    description: 'A unique stay in this architectural gem nestled among the trees yet minutes from downtown. This modern "treehouse" features walls of glass that bring nature inside, creating a peaceful sanctuary in the heart of the city. The custom-built interior showcases sustainable materials and thoughtful design, with a private deck perfect for morning coffee surrounded by birdsong.',
    type: 'apartment',
    location: 'Portland, Oregon',
    price: 175,
    images: [
      'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    maxGuests: 2,
    amenities: ['Wi-Fi', 'Kitchen', 'Free parking', 'Workspace', 'TV', 'Heating'],
    rating: 4.9,
    reviews: [
      {
        _id: '115',
        user: {
          _id: '215',
          name: 'David Anderson',
          avatar: 'https://randomuser.me/api/portraits/men/9.jpg'
        },
        rating: 5,
        text: 'One of the most unique places we\'ve ever stayed. Waking up surrounded by trees while being in the city was magical.',
        date: '2024-04-12'
      },
      {
        _id: '116',
        user: {
          _id: '216',
          name: 'Jessica Robinson',
          avatar: 'https://randomuser.me/api/portraits/women/35.jpg'
        },
        rating: 4.9,
        text: 'The architecture of this place is stunning. So thoughtfully designed and peaceful. We didn\'t want to leave!',
        date: '2024-03-17'
      }
    ],
    host: {
      _id: '308',
      name: 'Olivia Kim',
      email: 'olivia@example.com',
      avatar: 'https://randomuser.me/api/portraits/women/71.jpg',
      isSuperhost: true,
      responseRate: 100,
      responseTime: 'within a few hours',
      joinedDate: '2019-07-22'
    },
    availableFrom: '2025-01-05',
    availableTo: '2025-12-15',
    isBooked: false
  }
];

export const getProperties = async (): Promise<Property[]> => {
  await new Promise(resolve => setTimeout(resolve, 800));
  
  return mockProperties;
};

export const getPropertyById = async (id: string): Promise<Property> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const property = mockProperties.find(property => property._id === id);
  
  if (!property) {
    throw new Error('Property not found');
  }
  
  return property;
};

export const searchProperties = async (
  location: string,
  checkIn?: string,
  checkOut?: string,
  guests?: number
): Promise<Property[]> => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  let filteredProperties = [...mockProperties];
  
  if (location) {
    filteredProperties = filteredProperties.filter(property => 
      property.location.toLowerCase().includes(location.toLowerCase())
    );
  }
  
  return filteredProperties;
};