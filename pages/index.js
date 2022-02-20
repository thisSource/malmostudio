import Head from "next/head";
import Image from "next/image";
import ServiceCard from "../components/services/ServiceCard";

const service = [
  {
    id: "1",
    company: "Studio and Equiptment",
    offer: "Our 4 meters wide and 5 meters tall studio allow for a range of productions. We also offer quality equipment for you needs.",
    image: "/images/studioAsset 3.png",
  },
  {
    id: "2",
    company: "Team facilities",
    offer: "Facilities for everyone in the team from officespace to dressing rooms and shower.",
    image: "/images/studioAsset 4.png",
  },
  {
    id: "3",
    company: "Relax and reflect",
    offer: "Facilities for inbetween shoots. We know what waiting is like. PS5, music and magazines.",
    image: "/images/studioAsset 1.png",
  },
  {
    id: "4",
    company: "Bar",
    offer: "Yes, we have a bar with everything from coffee to the best bloody mary in Malmö.",
    image: "/images/studioAsset 2.png",
  },
];


export default function Home() {
  return (
    <div className="font-Josefin">
      <Head>
        <title>Malmö Studios</title>
        <meta name="description" content="Malmo-studio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-row ">
        <Image
          src="/images/studio1.jpg"
          alt="Picture of studio"
          width={1300}
          height={1500}
        />
        <Image
          src="/images/studio2.jpg"
          alt="Picture of studio"
          width={1000}
          height={1500}
        />
      </div>
      <p className="absolute lg:top-56 top-36 left-2/4 transform -translate-x-1/2 -translate-y-1/2 lg:text-15xl text-7xl font-semi-bold text-white">MALMÖ</p>
      <p className="absolute bg-gray-500 p-2 lg:top-3/4 top-80 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:text-2xl text-sm whitespace-normal font-semi-bold text-white text-center">Professional studio for photography and film in the heart of Malmö industrial harbour</p>
      <div className="grid lg:grid-cols-2 gap-5 ml-10 mr-10 mt-10 mb-10">
          {service.map((campaign) => (
            <ServiceCard
              key={campaign.id}
              name={campaign.company}
              offer={campaign.offer}
              image={campaign.image}
            />
          ))}
        </div>
    </div>
  );
}
