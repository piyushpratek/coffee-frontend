import React, { useEffect, useState } from 'react';
import { getCoffeesData } from '../requests/coffeeRequests';
import Coffee from '../components/Coffee';
import { coffeesType } from '../types/CoffeeTypes';

const Coffeesforin = () => {
  const [coffeeData, setCoffeeData] = useState<coffeesType>([]);

  useEffect(() => {
    async function main() {
      const coffees = await getCoffeesData();
      let coffeesNumbered: coffeesType = [];
      for (let index in coffees) {
        // NOTE: We're converting index to number type becoz index is string type and we dont' want to
        // concatenate 1 to it. Instead we want to add 1 to it becoz index starts at 0 and we want our
        // serial to start from 1 and not 0.
        let item: any = coffees[index];
        const serial = Number(index) + 1;
        coffeesNumbered.push({ ...item, title: `${serial}.${item.title}` });
      }
      // console.log(coffeesNumbered);
      setCoffeeData(coffeesNumbered);
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

export default Coffeesforin;
