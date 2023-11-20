import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

const Header = () => {
  const [data, setData] = useState([]);
  const apiUrl = "https://jsonplaceholder.typicode.com/photos";

  useEffect(() => {
    const fetchImage = async (url) => {
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        const errorMessage = document.getElementById("errorMessage");
        errorMessage.style.display = "block";
        errorMessage.innerHTML = error;
        console.log(error);
      }
    };
    fetchImage(apiUrl);
  }, []);

  return (
    <div className="flex items-center justify-center flex-wrap max-w-[960px] mx-auto">
      {data.map((item) => (
        <Card
          key={item.id}
          className="mx-auto w-[320px] h-[320px]"
        >
          <Card.Img src={item.url} />
        </Card>
      ))}
    </div>
  );
};

export default Header;