export default function randomInt(min, max) {
  const minimal = Math.ceil(min);
  const maximal = Math.floor(max);
  return Math.floor(Math.random() * (maximal - minimal + 1) + minimal);
}
