export async function getData(
  url: string,
  request: RequestInit = { method: "GET" }
) {
  const res = await fetch(url, request);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    console.log("Failed to fetch data information", url, request, res);
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
