import "./App.css";
import { useState, useEffect } from "react";
import { useRef } from "react";
import ProductDisplay from "./ProductDisplay/ProductDisplay";
import CategoryDisplay from "./CategoryDisplay/CategoryDisplay";
import categoryArray from "./CategoryDisplay/categories";
import filterArray from "./controllerFunctions";
import productArray from "./productTest";
import Header from "./Header/Header";

function App() {
  const [data, setData] = useState(null);
  const [displayData, setDisplayData] = useState(data);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userSelect, setUserSelect] = useState();
  const [filterText, setFilterText] = useState("");
  const categories = useRef(categoryArray);
  const localData = useRef([]);

  /*
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        //const response = await fetch("https://fakestoreapi.com/products");
        //const result = await response.json();
        //setData(result);
        setData(productArray)
        //localData.current = [...result];
        setDisplayData(productArray);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();

  }, []);
*/
  useEffect(() => {
    setTimeout(() => {
      setData(productArray);
      setDisplayData(productArray);
      setIsLoading(false);
    }, 1000); // 1000 milliseconds = 1 second
  }, []);

  const handleUpdateState = (newValue) => {
    setUserSelect(newValue);
    if (newValue === "all products") {
      setDisplayData(data);
    } else {
      setDisplayData(filterArray(data, newValue));
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className="appContain">
        <Header onFilterTextChange={setFilterText} />
        <CategoryDisplay value={categories.current} onUpdateState={handleUpdateState}/>
        <ProductDisplay data={displayData} filterText={filterText} />
      </div>
    </>
  );
}

export default App;
