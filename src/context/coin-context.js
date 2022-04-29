import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const AppCoin = createContext({})

export function useCoinContext(){
    return useContext(AppCoin)
}

export function AppCoinProvider({children}){
    const [listCoin, setListCoin] = useState('')
    const [currency, setCurrency] = useState('USD')
    const [inputCoin ,setinputCoin] = useState('')
    const [loading, setLoading] = useState(false)

    const getData = (value) => {
        setLoading(true)
        axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${value}&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C7d`)
        .then(response => {
            if (response.status === 200) {
                setListCoin(response.data)
                setLoading(false)
            }
        })
    }

    const getNumberUnit = (num) => {
        let units = ["Million","Billion","Trillion","Quadrillion","Quintillion","Sextillion"]
        let unit = Math.floor((num / 1.0e+1).toFixed(0).toString().length)
        let r = unit%3
        let x =  Math.abs(Number(num))/Number('1.0e+'+(unit-r)).toFixed(2)
        return x.toFixed(2)+ ' ' + units[Math.floor(unit / 3) - 2]
    }

    useEffect(() => {
      getData('USD')
    }, [])
    
    
    const AppCoinValue = {
        listCoin,
        getNumberUnit,
        currency,
        setCurrency,
        getData,
        inputCoin,
        setinputCoin,
        loading
    }

    return <AppCoin.Provider value={AppCoinValue}>{children}</AppCoin.Provider>
}