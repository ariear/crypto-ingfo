import { useCoinContext } from "../context/coin-context";

function SearchCoin() {
    const context = useCoinContext()

    return (
        <>
        <input type="text" 
            className="py-2 px-3 rounded-lg border" 
            placeholder="Search coin"
            onChange={(e) => {
                context.setinputCoin(e.target.value)
            }} />
        </>
    )
}

export default SearchCoin;