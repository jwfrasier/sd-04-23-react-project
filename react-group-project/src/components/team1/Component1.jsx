import { useEffect, useState } from "react";

import supabase from "../../supabase";

const Component1 = () => {
  console.log("Hello");

  const [esports, setEsports] = useState([]);

  useEffect(() => {
    const fetchEsportsData = async () => {
      const { data, error } = await supabase.from("esports").select();
      if (error) {
        console.error("Error fetching esports:", error.message);
      } else {
        setEsports(data);
      }
    };

    fetchEsportsData();
  }, []);

  console.log(esports);

  return (
    <>
      <div>Component1</div>
      <div>
        {esports?.map((esport) => (
          <div key={esport.UUID}>{esport.Username}</div>
        ))}
      </div>
      <div>Component1</div>
    </>
  );
};

export default Component1;
