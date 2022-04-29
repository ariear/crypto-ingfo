import { useCoinContext } from "../context/coin-context";

function SearchCoin() {
    const context = useCoinContext()

    return (
        <div className="mb-4 md:mb-0">
        <input type="text" 
            className="py-2 px-3 rounded-lg border-2 border-gray-500 md:w-max w-[80vw]" 
            placeholder="Search coin"
            onChange={(e) => {
                context.setinputCoin(e.target.value)
            }} />
        </div>
    )
}

export default SearchCoin;