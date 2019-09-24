// you work for a manufacturer, and have been asked to calculate
// the profit made on the sales of a product. You are given an
// object containing the cost price per unit(in dollars), sell
// price per unit(in dollar), and the starting inventory. Return
// the total profit made, rounded to the nearest dollar. Assume
// all the inventory has been sold.

function profit(info){
    let profit = (info.sellPrice - info.costPrice) * info.inventory;
    console.log(Math.round(profit));
}


profit({costPrice: 32.67, sellPrice: 45.00, inventory: 1200})