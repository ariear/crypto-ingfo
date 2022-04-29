import SearchCoin from "../components/SearchCoin";
import SelectCurrency from "../components/SelectCurrency";
import Table from "../components/Table";
import { AppCoinProvider } from "../context/coin-context";

function Home() {
    return (
        <div className="font-pupylinux py-10">
            <AppCoinProvider>
            <div className="flex justify-between px-7 mb-5">
            <SearchCoin />
            <SelectCurrency />
            </div>
            <Table />
            </AppCoinProvider>
        </div>
    )
}

export default Home;