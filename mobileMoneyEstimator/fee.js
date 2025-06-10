function estimateTransactionFee(amountToSend) {
  let fee = amountToSend * 0.015;

  if (fee < 10) {
    fee = 10;
  } else if (fee > 70) {
    fee = 70;
  }

  const totalDebited = amountToSend + fee;

  console.log(`Sending KES ${amountToSend}:
Calculated Transaction Fee: KES ${fee}
Total amount to be debited: KES ${totalDebited}

Send Money Securely!`);
}

const amountInput = prompt("Unatuma Ngapi? (KES):");
estimateTransactionFee(Number(amountInput));
