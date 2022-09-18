import React from 'react'

const crypto = [
  { Assets:"Bitcon",  UpdatePrice:602740.4, Changes:-1.46 },
  { Assets:"ETHereum",  UpdatePrice:3496, Changes:-0.02},
  { Assets:"Binance coin",  UpdatePrice:389.29, Changes: +1.16},
  { Assets:"LTC litecoin",  UpdatePrice:199.16, Changes:-0.11}
]

console.log(crypto);

const Cryptocurrency = () => {
  return (
    <section className='Cryptocurrency'>
      <div>
          <h2> Popular Cryptocurrencies</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>
     <div>
      <table>
        <tbody>
        <tr>
          <th>Assets</th>
          <th>Updated price</th>
          <th>Changes</th>
        </tr>
          {crypto.map((data,index) =>(
            <tr key={index}>
              <td><i class="uil uil-bitcoin-circle"></i>{data.Assets}</td>
              <td>{data.UpdatePrice}</td>
              <td>{data.Changes}</td>
              <td><button id='Trade-btn'>Trade</button></td>
            </tr>
      ))
      }
        </tbody>

      </table>
     </div>
    </section>
  )
}

export default Cryptocurrency
