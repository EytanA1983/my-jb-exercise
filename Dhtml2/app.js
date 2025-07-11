const students = [];

function addStudent(event) {
  event.preventDefault();

  const fields = [
    { input: document.getElementById('firstName'), name: 'First name' },
    { input: document.getElementById('lastName'), name: 'Last name' },
    { input: document.getElementById('grade'), name: 'Grade' }
  ];

  for (const field of fields) {
    if (field.input.value === '') {
      alert(`${field.name} is required.`);
      return;
    }
  }

  const firstName = fields[0].input.value;
  const lastName = fields[1].input.value;
  const grade = fields[2].input.valueAsNumber;


  students.push({ firstName, lastName, grade });

  const tableBody = document.getElementById('tableBody');
  const row = tableBody.insertRow();
  row.insertCell(0).innerText = firstName;
  row.insertCell(1).innerText = lastName;
  row.insertCell(2).innerText = grade;

  updateAverage();

  document.getElementById('studentForm').reset();
}

function updateAverage() {
  if (students.length === 0) {
    document.getElementById('average').innerText = `Average Grade: N/A`;
    return;
  }

  const sum = students.reduce((acc, curr) => acc + curr.grade, 0);
  const avg = (sum / students.length).toFixed(2);
  document.getElementById('average').innerText = `Average Grade: ${avg}`;
}

