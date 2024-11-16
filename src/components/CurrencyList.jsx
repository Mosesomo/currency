import CurrencyItem from "./CurrencyItem";

// Currency List Component
const CurrencyList = ({ currencies = [], searchTerm = "" }) => {
  // Ensure searchTerm is handled safely
  const lowerCaseSearchTerm = searchTerm.toLowerCase();

  // Filter currencies based on search term
  const filteredCurrencies = currencies.filter((currency) => {
    const nameI18N = currency?.nameI18N?.toLowerCase() || ""; // Handle undefined values
    const currencyCode = currency?.currency?.toLowerCase() || ""; // Handle undefined values
    return (
      nameI18N.includes(lowerCaseSearchTerm) ||
      currencyCode.includes(lowerCaseSearchTerm)
    );
  });

  return (
    <div className="space-y-4 mt-5">
      {filteredCurrencies.map((currency) => (
        <CurrencyItem key={currency.currency} currency={currency} />
      ))}
    </div>
  );
};

export default CurrencyList;
