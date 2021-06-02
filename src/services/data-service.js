
export const getCustomerTransaction = () => {
    return new Promise((resolve, reject) => {
        fetch('https://jmerlosrepo.github.io/customer-rewards/data/customer-rewards.json',{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      })
    .then(response => response.json())
    .then(data => resolve(data.customerRewards))
    .catch(error => reject(error));
    });
    
}