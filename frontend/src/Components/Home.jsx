import { useContext, useEffect, useState } from "react";
// import { Container } from "../App";
import { getData } from "../Api/CRUD";

const HomePage = async () => {
  //   const gather = useContext(Container);
  //   const { loading, setLoading } = gather;

  const [items, setItems] = useState([]);

  async function fetchItems() {
    const data = await getData();
    setItems(data);
  }

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <h1>Home!</h1>
      {/*  <p>{loading ? "Loading..." : "Display!!!"}</p>* */}
      <p>{JSON.stringify(items)}</p>
    </div>
  );
};

export default HomePage;
