function handleError(error) {
  console.warn(error);
  return null;
}

export async function fetchColors() {
  let URI = "http://www.colr.org/json/color/random";

  const response = await fetch(URI).catch(handleError);
  let colors = await response.json();

  return colors;
}
