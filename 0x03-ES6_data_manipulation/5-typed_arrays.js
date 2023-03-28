export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const val = new DataView(buffer);

  try {
    val.setInt8(position, value);
  } catch (e) {
    throw Error('position outside range');
  }
  return val;
}
