export async function deleteTransaction(
  request: any,
  transactionId: number
) {
  return await request.delete(
    `http://localhost:8080/api/v1/transactions/${transactionId}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`,
        Accept: 'application/json',
      },
    }
  );
}
export async function deleteRule(
  request: any,
  ruleId: number
) {
  return await request.delete(
    `http://localhost:8080/rules/delete/${ruleId}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`,
        Accept: 'application/json',
      },
    }
  );
}

export async function deleteBuget(
  request: any,
  bugetId: number
) {
  return await request.delete(
    `http://localhost:8080/api/v1/budgets/${bugetId}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`,
        Accept: 'application/json',

        
      },
    }
  );
}

