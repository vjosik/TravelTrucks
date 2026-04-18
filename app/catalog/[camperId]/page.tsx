import { Metadata } from "next";
import { getCampersById } from "../../../lib/api";
import CamperDetailsPage from "./CamperDetailsClient";

type Props = {
  params: { camperId: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const camper = await getCampersById(params.camperId);

    return {
      title: `${camper.name} | TravelTrucks`,
      description: camper.description.slice(0, 160), // Обрезаем для SEO
      openGraph: {
        title: camper.name,
        description: `Rent ${camper.name} in ${camper.location}. Price: €${camper.price}`,
        images: camper.gallery.map((img) => ({ url: img.original })),
      },
    };
  } catch (error) {
    return {
      title: "Camper Details | TravelTrucks",
    };
  }
}

export default function Page({ params }: Props) {
  return <CamperDetailsPage />;
}
