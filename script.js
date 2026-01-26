const transactions = [
    { id: 1, user: "Ali", type: "deposit", amount: 200 },
    { id: 2, user: "Ali", type: "withdraw", amount: 50 },
    { id: 3, user: "Leyla", type: "deposit", amount: 500 },
    { id: 4, user: "Ali", type: "deposit", amount: 100 },
    { id: 5, user: "Leyla", type: "withdraw", amount: 200 },
    { id: 6, user: "Murad", type: "deposit", amount: 300 }
  ];

  const getUserSummary = (transactions) => {
    return Object.values(
      transactions.reduce((acc, { user, type, amount }) => {
        if (!acc[user]) {
          acc[user] = {
            user,
            balance: 0,
            transactionsCount: 0
          };
        }
        
        acc[user].balance += type === "deposit" ? amount : -amount;
        acc[user].transactionsCount++;
        
        return acc;
      }, {})
    );
  };

  const result = getUserSummary(transactions);
  console.log(result);