import React from 'react'
import ltc from '../../images/LTC.png'
import binance from '../../images/BINANCECOIN.png'
import etherem from '../../images/ETHEREM.png'
import bitcoin from '../../images/BITCOIN.png'


const crypto = [
  { logo:bitcoin ,Assets:"Bitcon",  UpdatePrice:602740.4, Changes:-1.46 },
  {logo:etherem , Assets:"ETHereum",  UpdatePrice:3496, Changes:-0.02},
  { logo:binance, Assets:"Binance coin",  UpdatePrice:389.29, Changes: +1.16},
  { logo:ltc, Assets: 'LTC litecoin',  UpdatePrice:199.16, Changes:-0.11}
]

console.log(crypto);

const Cryptocurrency = () => {
  return (
    <section className='Cryptocurrency'>
      <div className='top' style={{marginBottom:40}}>
          <h2> Popular Cryptocurrencies</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>
     <div className='bottom'>
      <table>
        <tbody>
        <tr style={{borderBottom:"1px solid red"}}>
          <th>Assets</th>
          <th>Updated price</th>
          <th>Changes</th>
        </tr>
          {crypto.map((data,index) =>(
            <tr key={index}>
              <td><img src={data.logo} alt="logo" width='20px'/>{data.Assets}</td>
              <td>{data.UpdatePrice}</td>
              <td>{data.Changes}</td>
              <td ><button id='Trade-btn'>Trade</button></td>
            </tr>
      ))
      }
      <tr>
        <td ><button id='view-btn'>View All Cryptocurrencies</button></td>
      </tr>
        </tbody>

      </table>
     </div>
    </section>
  )
}

export default Cryptocurrency
