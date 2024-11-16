const CurrencyItem = ({ currency }) => {
  const name = currency?.nameI18N || "Unknown Currency";
  const code = currency?.currency || "N/A";
  const flagCode = code.slice(0, 2).toLowerCase(); // Slice to get the flag code
  const exchangeRateBuy = currency?.exchangeRate?.buy ?? "Not Available";
  const exchangeRateSell = currency?.exchangeRate?.sell ?? "Not Available";

  return (
    <div className="flex items-center justify-center text-gray-700">
      <div className="w-[472px] md:w-[698px] p-2 md:p-2 ">
        <div className="flex items-center bg-white p-2 rounded shadow-md">
          {/* Flag */}
          <img
            src={`src/assets/flags/${flagCode}.png`}
            alt={name}
            className="w-12 h-12 mr-4"
          />
          {/* Currency Information */}
          <div className="flex-1">
            <h2 className="font-semibold">{name}</h2>
            <p>{code.toUpperCase()}</p> {/* Display currency code in uppercase */}
            <p className="text-sm text-gray-600">
              Exchange Rate (Buy): {exchangeRateBuy} KES
            </p>
            <p className="text-sm text-gray-600">
              Exchange Rate (Sell): {exchangeRateSell} KES
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyItem;
