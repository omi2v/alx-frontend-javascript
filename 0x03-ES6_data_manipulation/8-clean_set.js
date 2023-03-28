export default function cleanSet(set, startString) {
  return array.every((value) => set.has(value));
}
