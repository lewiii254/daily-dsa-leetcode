/**
 * SOCIAL IMPACT PROBLEMS
 */

// Healthcare: Allocate supplies to clinics by need score (greedy)
function allocateSupplies(clinics, totalSupplies) {
  clinics.sort((a, b) => b.needScore - a.needScore); // highest need first
  let remaining = totalSupplies;
  return clinics.map(clinic => {
    const allocated = Math.min(clinic.requested, remaining);
    remaining -= allocated;
    return { ...clinic, allocated };
  });
}

// School Enrollment: Stable matching (simplified Gale-Shapley)
function matchStudentsToSchools(students, schools) {
  const assignments = new Map(); // schoolId -> [studentIds]
  const schoolMap = new Map(schools.map(s => [s.id, s])); // O(1) lookup
  schools.forEach(s => assignments.set(s.id, []));

  for (const student of students) {
    for (const schoolId of student.preferences) {
      const school = schoolMap.get(schoolId);
      const enrolled = assignments.get(schoolId);
      if (enrolled.length < school.capacity) {
        enrolled.push(student.id);
        break;
      }
    }
  }
  return assignments;
}

const clinics = [
  { name: 'Rural Clinic A', needScore: 9, requested: 100 },
  { name: 'Urban Clinic B', needScore: 5, requested: 80 },
  { name: 'Rural Clinic C', needScore: 7, requested: 60 },
];
console.log('Supply allocation:', allocateSupplies(clinics, 150));

const students = [{id:'S1',preferences:['SchA','SchB']},{id:'S2',preferences:['SchA','SchC']},{id:'S3',preferences:['SchB','SchC']}];
const schools  = [{id:'SchA',capacity:1},{id:'SchB',capacity:1},{id:'SchC',capacity:2}];
console.log('School assignments:', Object.fromEntries(matchStudentsToSchools(students, schools)));
