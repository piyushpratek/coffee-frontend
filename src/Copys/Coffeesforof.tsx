import React, { useEffect, useState } from 'react';
import { getCoffeesData } from '../requests/coffeeRequests';
import Coffee from '../components/Coffee';
import { coffeesType } from '../types/CoffeeTypes';

const Coffeesforof = () => {
  // NOTE: We could have type as `any` instead of `coffeesType` but with a given type we get autocomplete and type error facility thanks to typescript.
  const [coffeeData, setCoffeeData] = useState<coffeesType>([]);

  useEffect(() => {
    async function main() {
      const coffees = await getCoffeesData();
       // NOTE: We could have type as `any` instead of `coffeesType` but with a given type we get autocomplete and type error facility thanks to typescript.
      let coffeesEmojied: coffeesType = [];
      for (let item of coffees) {
        coffeesEmojied.push({ ...item, title: `❤${item.title}` });

        console.log(coffeesEmojied);
      }
      setCoffeeData(coffeesEmojied);
    }
    main();
  }, []);
  //16px=1rem
  return (
    <div className='p-5  border-dark m-2 '>
      {coffeeData

        .filter((corruptData: any) => corruptData.id !== 23)
        .map((coffee: any) => (
          <Coffee coffee={coffee} />
        ))}
    </div>
  );
};

export default Coffeesforof;
