export default function getListStudentIds(student) {
  if (!Array.isArray(student)) {
    return [];
  }
  return student.map((obj) => obj.id);
}
