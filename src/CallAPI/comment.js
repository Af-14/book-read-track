import axios from "axios";
const baseUrl = "https://www.googleapis.com/books/v1";
//https://www.googleapis.com/books/v1/volumes?q=search-terms&key=AIzaSyAWDokeMSsEd_OjRFwr3xHYiNOmR4dd1po
//https://www.googleapis.com/books/v1/volumes?q=harrypotter:keyes&key=AIzaSyAWDokeMSsEd_OjRFwr3xHYiNOmR4dd1po
//https://www.googleapis.com/books/v1/volumes?q=harry+intitle:keyes&key=AIzaSyAWDokeMSsEd_OjRFwr3xHYiNOmR4dd1po

const getSingleton = (id) => {
  // Create error message if user enters invalid id
  const request = axios.get(
    `${baseUrl}/${id}:keyes&key=AIzaSyAWDokeMSsEd_OjRFwr3xHYiNOmR4dd1po`
  );
  return request.then((response) => response.data);
};

export default { getSingleton };

export async function searchBooks(title) {
  if (!title) return [];
  let res = await fetch(`${baseUrl}/volumes?q=intitle:${title}`);
  if (!res.ok) {
    console.log("Error in fetch");
    console.log(res);
  }
  return await res.json();
}
