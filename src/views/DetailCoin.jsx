import axios from "axios";
import { useParams } from "react-router-dom";

function DetailCoint() {
    const params = useParams()
    
    const getDataChart = async () => {
        await axios.get(`https://api.coingecko.com/api/v3/coins/${params.coin}?sparkline=true&localization=false&tickers=false&community_data=false&developer_data=false`)
                    .then(response => console.log(response.data.market_data.sparkline_7d.price))
    }

    getDataChart()
    

    return (
        <div>
            <p>Ini Detail Coin</p>
        </div>
    )
}

export default DetailCoint;

// response.data.market_data.sparkline_7d.price