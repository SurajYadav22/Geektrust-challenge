import axios from "axios";
import { processUsersResponse } from "../utilities/UsersUtility";

const API_URL =
  "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";

const getUsers = (setUsers) => {
  axios
    .get(API_URL)
    .then((res) => {
      setUsers(processUsersResponse(res.data));
    })
    .catch((err) => console.log(err));
};

export { getUsers };
