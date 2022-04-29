import SearchCoin from "../components/SearchCoin";
import SelectCurrency from "../components/SelectCurrency";
import Table from "../components/Table";
import { AppCoinProvider } from "../context/coin-context";

function Home() {
    return (
        <div className="font-pupylinux py-10">
            <AppCoinProvider>
            <div className="flex md:flex-row flex-col justify-center items-center md:justify-between px-7 mb-9">
            <SearchCoin />
            <SelectCurrency />
            </div>
            <p className="md:ml-7 mx-3 mb-3 text-xl font-medium">Top 100 Cryptocurrency Live Statistics</p>
            <Table /> 
            </AppCoinProvider>
        </div>
    )
}

export default Home;