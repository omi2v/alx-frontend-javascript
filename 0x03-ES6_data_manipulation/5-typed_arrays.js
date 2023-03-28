export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const int8Array = new Int8Array(buffer);
  try {
	int8Array.setInt8(position, value);
  }
	catch (e) {
		throw Error('position outside range');
	}
	return int8Array;
}
