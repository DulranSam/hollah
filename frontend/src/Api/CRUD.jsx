/* eslint-disable no-unused-vars */
import Axios from "axios";

const endPointBase = "";

export const getData = async () => {
  try {
    const data = await Axios.get(`${endPointBase}/main`);
    return data.data;
  } catch (err) {
    console.error(err);
  }
};

export const postData = async (data) => {
  try {
    const data = await Axios.post(`${endPointBase}/`, data);
    return data.data;
  } catch (err) {
    console.error(err);
  }
};

export const updateData = async (data, id) => {
  try {
    const data = await Axios.put(`${endPointBase}/whatever/${id}`, data);
    return data.data;
  } catch (err) {
    console.error(err);
  }
};

export const deleteData = async (id) => {
  try {
    const data = await Axios.delete(`${endPointBase}/whatever/${id}`);
    return data.data;
  } catch (err) {
    console.error(err);
  }
};
