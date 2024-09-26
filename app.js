var domo = window.domo;
var datasets = window.datasets;

let filterList = [];

const emptyFilter = [{
    column: '',
    operator: '',
    values: [],
    dataType: '',
  }];

function clearFilters() {
  console.log('Clear filters button clicked');
  const filters = {filterList}.filterList;
  console.log(filters)

const clearedFilters = filters.map(filter => ({
    column: filter.column,
    operand: filter.operand,
    values: [],
    dataType: filter.dataType
  }));
  
 
  domo.filterContainer(clearedFilters);
}


domo.onFiltersUpdate((filters) => {
  filterList = filters;
  console.log(filterList)
});

document.getElementById('clear-filters-button').addEventListener('click', clearFilters);
