export const getCharacters = async (page = 1, limit = 10) => {
  try {
    const url = `https://dragonball-api.com/api/characters?page=${page}&limit=${limit}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return error
  }
};