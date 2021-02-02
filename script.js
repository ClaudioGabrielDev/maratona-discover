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
]

const transaction = {
    income(){
      //Semar as entradas  
    },
    expanse(){
        //Somar as Saídas
    },
    total(){
        //income - expanse
    }
}

const DOM = {
    
    addTransaction(transaction, index){
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction()
        
    },
    innerHTMLTransaction(){
        const html = `
        <tr>
                        <td class="description">Luz</td>
                        <td class="expense">- R$ 500,00</td>
                        <td class="date">23/01/2021</td>
                        <td><img src="./assets/minus.svg" alt="icon menos"></td>
                    </tr>
        `
    }
}