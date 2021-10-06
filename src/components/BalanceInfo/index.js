import React from 'react';
import {useSelector} from "react-redux";

const BalanceInfo = () => {
    const balance = useSelector(s=>s.task)
    return (
        <div className='container py-8 justify-center'>
          <p className='text-6xl'>Ваш лист расходов</p>
            <div className="card-money mt-12 flex flex-wrap	">
                <div className=" w-1/3 px-2">
                   <div className="card-balance">
                       <div className='p-10'>
                           <p className='card-money text-5xl'>{balance.initialAmount},00$</p>
                       </div>
                       <div className='bg-green-500 p-8 initial-amount'>
                           <p>Начальная сумма</p>
                       </div>
                   </div>
                </div>
                <div className="w-1/3 px-2">
                  <div className="card-balance">
                      <div className='p-10'>
                          <p className='card-money text-5xl'>{balance.costs},00$</p>
                      </div>
                      <div className='bg-red-600 bg-opacity-50 p-8 initial-amount'>
                          <p>Потратил</p>
                      </div>
                  </div>
                </div>
                <div className="w-1/3 px-2">
                   <div className="card-balance">
                       <div className='p-10'>
                           <p className='card-money text-5xl'>{balance.currentBalance},00$</p>
                       </div>
                       <div className='bg-purple-600 bg-opacity-50	 p-8 initial-amount'>
                           <p>Осталось</p>
                       </div>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default BalanceInfo;