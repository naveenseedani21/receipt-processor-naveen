function calculatePoints(receipt) {
  let points = 0;

  points += (receipt.retailer.match(/[a-z0-9]/gi) || []).length;

  if (/^\d+\.00$/.test(receipt.total)) points += 50;

  if (parseFloat(receipt.total) % 0.25 === 0) points += 25;

  points += Math.floor(receipt.items.length / 2) * 5;

  for (const item of receipt.items) {
    const len = item.shortDescription.trim().length;
    if (len % 3 === 0) {
      points += Math.ceil(parseFloat(item.price) * 0.2);
    }
  }

  const day = parseInt(receipt.purchaseDate.split('-')[2]);
  if (day % 2 !== 0) points += 6;

  const [hour] = receipt.purchaseTime.split(':').map(Number);
  if (hour === 14) points += 10;

  return points;
}

module.exports = calculatePoints;
