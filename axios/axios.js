import axios from "axios";
const url = "/api/issues";
export const createNewIssue = async (issueObj) => {
  const { data } = await axios.post(url, issueObj);
  return data;
};
