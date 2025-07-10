const clothes = [
  { type: "חולצה", size: "M", price: 59.90, color: "כחול" },
  { type: "מכנסיים", size: "L", price: 129.90, color: "שחור" },
  { type: "שמלה", size: "S", price: 199.90, color: "אדום" },
  { type: "ז'קט", size: "XL", price: 249.90, color: "אפור" },
  { type: "חצאית", size: "M", price: 89.90, color: "ירוק" }
];
for (const item of clothes) 
  for (const key in item) {
    console.log(key + ": " + item[key]);
  }
  console.log("פריט לבוש");