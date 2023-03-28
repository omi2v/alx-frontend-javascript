export default function updateStudentGradeByCity(student, city, newGrades) {
  const filstu = student.filter((student) => student.location === city);
  for (const stud of filstu) {
    stud.grade = 'N/A';
  }
  const newstu = filstu.map((stud) => {
    const one = stud;
    for (const grade of newGrades) {
      if (one.id === grade.studID) {
	one.grade = grade.grade;
      }
    }
    return one;
  });
  return newstu;
}
