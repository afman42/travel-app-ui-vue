import PngKayak from '../images/kayak.png'
import PngKayakBig from '../images/kayak-big.png'
import PngCanyon from '../images/canyon.png'
import PngCanyonBig from '../images/canyon-big.png'
const discoverData = [
  {
    id: 'discover-1',
    title: 'Kayaking in the Tofino Sea',
    location: 'Canada',
    image: PngKayak,
    imageBig: PngKayakBig,
    description:
      "An ideal introduction to sea kayaking around the stunning historical Islands of Tofino's harbour. Come explore the spectacular scenery of the area and learn what makes the area so fascinating.",
    liked: true,
    price: 50,
    rating: 5,
    duration: 2,
  },
  {
    id: 'discover-2',
    title: 'Hiking the Grand Canyon',
    location: 'USA',
    image: PngCanyon,
    imageBig: PngCanyonBig,
    description:
      'Great day hikes and backpacking routes on the North and South Rim of this century-old national park include easy hikes overlooking the rim and more rugged trekking options that descend into the canyon.',
    liked: true,
    price: 350,
    rating: 4.5,
    duration: 3,
  },
];

export default discoverData;
