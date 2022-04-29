import axios from "axios";
import { useEffect, useState } from "react";
import numeral from "numeral";
import getSymbolFromCurrency from 'currency-symbol-map'
import datacurrency from '../data/currency.json' 

function Home() {
    const [currency,setCurrency] = useState('USD')
    const [coin,setCoin] = useState([])

    useEffect(() => {
        getData('USD')
    }, [])

        const getData = (value) => {
            axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${value}&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C7d`)
            .then(response => {
                setCoin(response.data)
            })
        }

        const getNumberUnit = (num) => {
            let units = ["Million","Billion","Trillion","Quadrillion","Quintillion","Sextillion"]
            let unit = Math.floor((num / 1.0e+1).toFixed(0).toString().length)
            let r = unit%3
            let x =  Math.abs(Number(num))/Number('1.0e+'+(unit-r)).toFixed(2)
            return x.toFixed(2)+ ' ' + units[Math.floor(unit / 3) - 2]
        }
    
    return (
        <div className="font-pupylinux pt-20">
            <div>
                <select onChange={(e) => {
                    setCurrency(e.target.value)
                    getData(e.target.value)
                    }}>
                        {
                            datacurrency.map(e =>
                                e.curren === 'USD' ? 
                                <option value="USD" key="USD" selected>USD</option>
                                            : 
                                <option value={e.curren} key={e.curren}>{e.curren}</option>
                            )
                        }
                </select>
            </div>

            <div className="px-10">
            <div className="grid grid-cols-8 text-lg border-b-2 border-black pb-2 font-semibold">
                <p>No</p>
                <p className="col-span-2">Coin</p>
                <p>Price</p>
                <p>Market Cup</p>
                <p>1h</p>
                <p>24h</p>
                <p>7d</p>
            </div>
            {
                coin.map(e =>                     
            <div className="grid grid-cols-8 border-b border-black py-4 font-medium" key={e.name}>
                <p>1</p>
                <div className="flex items-center">
                    <img src={e.image} className="w-[35px] mr-3" alt="" />
                <div>
                <p className="col-span-2 font-semibold">{e.name}</p>
                <p className="uppercase ">{e.symbol}</p>
                </div>
                </div>
                <p>{getSymbolFromCurrency(currency)} {e.current_price.toLocaleString()}</p>
                <p>{getSymbolFromCurrency(currency)} {getNumberUnit(e.market_cap)}</p>
                <p className={e.price_change_percentage_1h_in_currency < 0 ? 'text-red-400' : 'text-green-400'}>{e.price_change_percentage_1h_in_currency < 0 ? '' : '+'}{numeral(e.price_change_percentage_1h_in_currency).format('0.0')}%</p>
                <p className={e.price_change_percentage_24h < 0 ? 'text-red-400' : 'text-green-400'}>{e.price_change_percentage_24h < 0 ? '' : '+'}{numeral(e.price_change_percentage_24h).format('0.0')}%</p>
                <p className={e.price_change_percentage_7d_in_currency < 0 ? 'text-red-400' : 'text-green-400'}>{e.price_change_percentage_7d_in_currency < 0 ? '' : '+'}{numeral(e.price_change_percentage_7d_in_currency).format('0.0')}%</p>
            </div>
                )
            }
            </div>
        </div>
    )
}

export default Home;