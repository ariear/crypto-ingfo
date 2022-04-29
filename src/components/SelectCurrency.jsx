import { useCoinContext } from '../context/coin-context';
import datacurrency from '../data/currency.json'

function SelectCurrency() {
    const context = useCoinContext()

    return (
        <div>
            <select onChange={(e) => {
                context.setCurrency(e.target.value)
                context.getData(e.target.value)
            }} className="px-7 border focus:border-gray-500 focus:border-2 py-1 rounded">
                {datacurrency.map(e =>
                    e.curren === 'USD' ?
                    <option value={e.curren} key={e.curren} selected>{e.curren}</option>
                                       : 
                    <option value={e.curren} key={e.curren}>{e.curren}</option>    
                )}
            </select>
        </div>
    )
}

export default SelectCurrency;