import React from 'react';
import { coffeeType } from '../types/CoffeeTypes';

type CoffeePropsType = { coffee: coffeeType };

const Coffee = (props: CoffeePropsType) => {
  // const coffee = props.coffee; // Older syntax
  const { coffee } = props; // Newer sytax: *Destructuring* (ES15 => Year: 2015)
  // console.log('typeof ingredients?', typeof coffee.ingredients);
  return (
    <>
      <div
        className='border border-primary my-5 p-4 rounded-start-5'
        key={coffee.id}
      >
        <div className='row'>
          <div className='col-md-5 '>
            <img
              src={coffee.image}
              style={{
                width: '100%',
                aspectRatio: 1.8, // width:height
              }}
              className='rounded-5 rounded-end-0 object-fit-cover'
            />
          </div>
          <div className='col-md-7 border border-2  rounded-start-5'>
            <div>
              <h1 className='text-warning-emphasis fw-bold '>
                Item:-{'   '} {coffee.title}
              </h1>
            </div>
            <div>
              <h3 className='text-warning-emphasis '>Description:</h3>

              <br />
              <h5>{coffee.description}</h5>
            </div>
            <div className='fst-italic'>
              <h3 className='text-warning-emphasis' key={coffee.id}>
                Ingredients:
              </h3>{' '}
              {coffee?.ingredients?.map((ingredient: any) => (
                <li>
                  <h5>{ingredient}</h5>
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Coffee;
