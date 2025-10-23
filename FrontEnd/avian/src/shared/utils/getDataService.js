export const getDataService = async (url) => {
  const data = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await data.json();   

  return json;
};
