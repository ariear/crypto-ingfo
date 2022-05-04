import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetailCoint() {
    const [historiChart, setHistoriChart] = useState(null)
    const params = useParams()
    
    
    useEffect(() => {
        const getDataChart = async () => {
            await axios.get(`https://api.coingecko.com/api/v3/coins/${params.coin}/market_chart?vs_currency=usd&days=365`)
                        .then(response => {
                            if (response.status === 200) {
                                setHistoriChart(response.data.prices)
                            }
                        })
        }
        getDataChart()
    }, [params])
    
    return (
        <div>
            <p>Ini Detail Coin</p>
            {console.log(historiChart)}
        </div>
    )
}

export default DetailCoint;