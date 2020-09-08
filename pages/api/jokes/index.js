// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export async function getRandomJoke() {
  const res = await fetch('https://api.chucknorris.io/jokes/random');
  return await res.json();
}

export async function getJoke(pid) {
  const res = await fetch(`https://api.chucknorris.io/jokes/${pid}`);
  return await res.json();
}