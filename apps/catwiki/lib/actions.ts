'use server';

const headers = {
  'Content-Type': 'application/json',
  'x-api-key': process.env.THE_CAT_API_KEY ?? 'fake',
};

export const getBreeds = async () => {
  const response = await fetch('https://api.thecatapi.com/v1/breeds?limit=4', {
    headers,
    next: {
      revalidate: 1800,
    },
  });

  return response.json();
};

export const searchBreed = async (query: string) => {
  const response = await fetch(
    `https://api.thecatapi.com/v1/breeds/search?q=${query}`,
    {
      headers,
      next: { revalidate: 1800 },
    },
  );

  return response.json();
};
