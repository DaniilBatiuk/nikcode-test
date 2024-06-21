import { getCityPhoto } from "../getCityPhoto/getCityPhoto";

export const getCitiesList = async (): Promise<ICity[] | undefined> => {
  const apiUrl = process.env.GEO_URL as string;
  const geoApiKey = process.env.GEO_KEY as string;
  try {
    const response = await fetch(apiUrl, {
      headers: {
        "X-RapidAPI-Key": geoApiKey,
        "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
      },
    });

    if (!response.ok) {
      throw new Error();
    }

    const cities = await response.json();

    const result = await Promise.all(
      (cities.data as ICity[]).map(async city => {
        const photo = await getCityPhoto(city.city);
        return {
          ...city,
          photo: photo,
        };
      }),
    );

    return result;
  } catch (error) {
    return undefined;
  }
};
