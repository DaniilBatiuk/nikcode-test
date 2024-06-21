import { getCityPhoto } from "@/app/actions/getCityPhoto/getCityPhoto";

export const getCityData = async (id: string): Promise<ICity | undefined> => {
  const apiUrl = `${process.env.GEO_URL_CITY}/${id}`;
  const geoApiKey = process.env.GEO_KEY as string;
  try {
    const response = await fetch(apiUrl, {
      headers: {
        "X-RapidAPI-Key": geoApiKey,
        "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error();
    }

    const city = await response.json();
    const photo = await getCityPhoto(city.city);

    return {
      ...city.data,
      photo: photo,
    };
  } catch (error) {
    return undefined;
  }
};
