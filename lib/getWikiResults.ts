export default async function getWikiResults(searchTerm: string) {
  const searchParams = new URLSearchParams({
    action: 'query',
    generator: 'search',
    gsrsearch: searchTerm,
    gsrlimit: '20',
    prop: 'pageimages|extracts',
    exchars: '100',
    exintro: 'true',
    explaintext: 'true',
    format: 'json',
    origin: '*',
    exlimit: 'max',
  });

  const response = await fetch(
    `https://en.wikipedia.org/w/api.php?${searchParams}`
  );

  return await response.json();
}
