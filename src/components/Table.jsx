import getSymbolFromCurrency from "currency-symbol-map";
import { useCoinContext } from "../context/coin-context";
import numeral from "numeral";

function Table() {
    const context = useCoinContext()

    return (
        <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-white border">
                  <tr>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      No
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Coin
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 md:px-6 py-4 text-left">
                      Price
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Market Cup
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      1h
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      24h
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      7d
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    !context.loading ?
                    context.listCoin ?
                    context.listCoin.filter(e => {
                      if (context.inputCoin === '') {
                        return e
                      }else if (e.name.toLowerCase().includes(context.inputCoin.toLowerCase())) {
                        return e
                      }
                    }).map((e, index) =>                       
                  <tr className="bg-white odd:bg-gray-100 hover:bg-gray-200 transition-all border-b" key={e.name}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                    <td className=" text-gray-900 text-sm md:text-base md:px-6 py-4 whitespace-nowrap flex items-center">
                      <img src={e.image} className="w-[30px] mr-4" alt="" />
                      <div>
                        <p>{e.name}</p>
                        <p className="uppercase">{e.symbol}</p>
                      </div>
                    </td>
                    <td className=" text-gray-900 text-sm md:text-base md:px-6 py-4 whitespace-nowrap">
                      {getSymbolFromCurrency(context.currency)} {e.current_price.toLocaleString()}
                    </td>
                    <td className=" text-gray-900 px-4 md:px-6 py-4 whitespace-nowrap">
                    {getSymbolFromCurrency(context.currency)} {context.getNumberUnit(e.market_cap)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    <p className={e.price_change_percentage_1h_in_currency < 0 ? 'text-red-400' : 'text-green-500'}>{e.price_change_percentage_1h_in_currency < 0 ? '' : '+'}{numeral(e.price_change_percentage_1h_in_currency).format('0.0')}%</p>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    <p className={e.price_change_percentage_24h < 0 ? 'text-red-400' : 'text-green-500'}>{e.price_change_percentage_24h < 0 ? '' : '+'}{numeral(e.price_change_percentage_24h).format('0.0')}%</p>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    <p className={e.price_change_percentage_7d_in_currency < 0 ? 'text-red-400' : 'text-green-500'}>{e.price_change_percentage_7d_in_currency < 0 ? '' : '+'}{numeral(e.price_change_percentage_7d_in_currency).format('0.0')}%</p>
                    </td>
                  </tr>
                    )
                    :
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td><img src="asset/loading.svg" className="w-[100px]" alt="" /></td>
                    </tr>
                    :
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td><img src="asset/loading.svg" className="w-[100px]" alt="" /></td>
                    </tr>
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Table;