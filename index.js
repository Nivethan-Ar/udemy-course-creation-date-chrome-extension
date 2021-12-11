const courseCreationDate = async () => {
  const courseId = document.body.getAttribute('data-clp-course-id');
  const courseInfo = await getData(courseId);
  const date = courseInfo.created;
  const data = formatDate(date)
  const insertingContainer = document.querySelector('.clp-lead__element-meta');

  const dateDiv = document.createElement('div');
  dateDiv.style.cssText = `
    margin-bottom:0.8rem;
    margin-right:1rem;
  `
  dateDiv.innerHTML += `<span>🗓 Created On ${data}</span> <br>`
  insertingContainer.prepend(dateDiv);
}

const getData = async (id) => {
  const data = await fetch(`https://www.udemy.com/api-2.0/courses/${id}/?fields[course]=created`).then(response => response.json())
  return data;
}

const formatDate = (dateString) => {
  const parsedDate = new Date(dateString)
  if (!parsedDate) return ''
  const day = parsedDate.getDate();
  const month = parsedDate.getMonth() + 1;
  const year = parsedDate.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate

}
courseCreationDate();