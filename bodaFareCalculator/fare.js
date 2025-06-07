function calculateBodaFare(distanceInKm) {
  const baseFare = 50;
  const chargePerKm = 15;
  const rideCost = distanceInKm * chargePerKm;
  const total = baseFare + rideCost;

  console.log(`Uko kwote? Io ni ${distanceInKm} km:
Ukikalia Pikipiki: KES ${baseFare}
Mpaka Uko: KES ${rideCost}
Total: KES ${total}

Panda Pikipiki!`);
}

const input = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
calculateBodaFare(Number(input));
