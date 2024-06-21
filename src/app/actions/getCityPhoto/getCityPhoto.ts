export const getCityPhoto = async (country: string): Promise<string | undefined> => {
  const unsplashApiKey = process.env.UNSPLASH_KEY as string;
  const unsplashApiUrl = `${process.env.UNSPLASH_URL}?query=${country}&client_id=${unsplashApiKey}`;

  try {
    const response = await fetch(unsplashApiUrl);

    if (!response.ok) {
      throw new Error();
    }

    const result = await response.json();
    return result.urls.regular;
  } catch (error) {
    return undefined;
  }
};
