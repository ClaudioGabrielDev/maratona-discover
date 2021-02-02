const model = {
    open(){
        document.querySelector('.modal-overlay')
        .classList.add("active")
    },
    close(){
        document.querySelector('.modal-overlay')
        .classList.remove("active")
    }
}


const transactions = [{
    id: 1,
    description: 'Luz',
    amount: -50000,
    date:'23/01/2020'
},
{
    id: 2,
    description: 'Website',
    amount: 500000,
    date:'23/01/2020'
},
{
    id: 3,
    description: 'Internet',
    amount: -20000,
    date:'23/01/2020'
},
{
    id: 4,
    description: 'App',
    amount: 20000,
    date:'23/01/2020'
}
]

const transaction = {
    income(){
      let income = 0;
      
      transactions.forEach(transaction => {
          if(transaction.amount > 0){
              income += transaction.amount
          }
      })

      return income
    },
    expanse(){
        let expense = 0;
      
        transactions.forEach(transaction => {
          if(transaction.amount < 0){
              expense += transaction.amount
          }
      })
        return expense
    },
    total(){
        return transaction.income() + transaction.expanse()
    }
}

const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),
    
    addTransaction(transaction, index){
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)
        
        DOM.transactionsContainer.appendChild(tr)
        
    },
    innerHTMLTransaction(transaction){
        const CSSClass = transaction.amount > 0 ? "income" : "expense"

        const amount = Utils.formatCurrency(transaction.amount)

        const html = `
                        <td class="description">${transaction.description}</td>
                        <td class="${CSSClass}">${amount}</td>
                        <td class="date">${transaction.date}</td>
                        <td><img src="./assets/minus.svg" alt="icon menos"></td>
        `
        return html
    },
    updateBalance(){
        document.getElementById('incomeDisplay')
            .innerHTML = transaction.income();
        document.getElementById('expenseDisplay')
            .innerHTML = transaction.expanse();
        document.getElementById('totalDisplay')
            .innerHTML = transaction.total();

    }
}

const Utils = {
    formatCurrency(value){
        const signal = Number(value) < 0 ? "- " : ""

        value = String(value).replace(/\D/, "");

        value = Number(value) / 100;

        value = value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })

        return signal + value
    }
}


transactions.forEach(function(transaction){
    DOM.addTransaction(transaction);
})

DOM.updateBalance()