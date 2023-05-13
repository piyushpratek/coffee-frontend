import React, { useEffect, useState } from 'react';
import { getCoffeesData } from '../requests/coffeeRequests';
import Coffee from '../components/Coffee';
import { coffeesType } from '../types/CoffeeTypes';

const Coffeesforeach = () => {
  const [coffeeData, setCoffeeData] = useState<coffeesType>([]);

  useEffect(() => {
    async function main() {
      const coffees = await getCoffeesData();
      // console.log(coffees);
      //useforeach/forof/forin logic here
      let coffeesUpperCased: coffeesType = [];
      coffees.forEach((item: any) => {
        coffeesUpperCased.push({ ...item, title: item.title.toUpperCase() });
        // console.log('hey', coffeesUpperCased);
      });
      setCoffeeData(coffeesUpperCased);
      // console.log(coffeesUpperCased);
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

export default Coffeesforeach;
