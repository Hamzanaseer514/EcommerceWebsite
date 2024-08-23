import React,{useState,useEffect} from "react";
import Items from "../Items/Items";

const Popular = () => {
  
    const [popularWomen, setpopularWomen] = useState([])
  
  const fetchdata =  async() => {
    const response = await fetch('https://hopifyecommerce.onrender.com/popularwomen')
   const data = await response.json()
   const popwomen = data.popularWomen
   setpopularWomen(popwomen)
  }
  
  useEffect(() => {
    fetchdata()
  }, [])
  
  return (
    <section className="">
      <div className="flex py-5 flex-col items-center gap-5 mt-10">
        <h1 className="text-[#171717] text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase  font-bold xl:text-6xl ">
          Popular In Women
        </h1>
        <hr className=" w-[20%] sm:w-[10%] h-2  sm:h-3 bg-[#252525] rounded-md" />
      </div>
      <div className="flex flex-wrap gap-5 justify-center my-24">
        {popularWomen.map((item, i) => (
          <Items
            key={i}
            id={item.id}
            title={item.name}
            newprice={item.new_price}
            oldprice={item.old_price}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Popular;
