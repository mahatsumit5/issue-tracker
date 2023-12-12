import axios from "axios";
const url = "http://localhost:3000/api/issues";
export const createNewIssue = async (issueObj) => {
  const { data } = axios.post(url, issueObj);
  console.log(data);
  return data;
};
