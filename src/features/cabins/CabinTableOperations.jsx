import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="filter"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No Discount" },
          { value: "with-discount", label: "With Discount" },
        ]}
      />
      <SortBy
        options={[
          { value: "name-asc", label: "Sort by name (A-Z)" },
          { value: "name-desc", label: "Sort by name (Z-A)" },
          {
            value: "regularPrice-asc",
            label: "Sort by price (lower to higher)",
          },
          {
            value: "regularPrice-desc",
            label: "Sort by price (higher to lower)",
          },
          {
            value: "maxCapacity-asc",
            label: "Sort by capacity (lower to higher)",
          },
          {
            value: "maxCapacity-desc",
            label: "Sort by capacity (higher to lower)",
          },
        ]}
      />
    </TableOperations>
  );
}
export default CabinTableOperations;
