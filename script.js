let totalIncome = 0;
let totalExpense = 0;

function addItem() {
    let description = document.getElementById('description').value;
    let amount = parseFloat(document.getElementById('amount').value);
    let type = document.getElementById('type').value;

    // ভ্যালিডেশন: ইনপুট খালি থাকলে বা টাকা ০ এর কম হলে কাজ করবে না
    if (description === '' || isNaN(amount) || amount <= 0) {
        alert("সঠিক বিবরণ এবং টাকার পরিমাণ লিখুন!");
        return;
    }

    let itemList = document.getElementById('item-list');
    let li = document.createElement('li');

    if (type === 'income') {
        totalIncome += amount;
        li.classList.add('income-item');
        li.innerHTML = `${description} <span>+৳${amount}</span>`;
    } else {
        totalExpense += amount;
        li.classList.add('expense-item');
        li.innerHTML = `${description} <span>-৳${amount}</span>`;
    }

    // লিস্টে যোগ করা
    itemList.appendChild(li);

    // ডিসপ্লে আপডেট করা
    updateDisplay();

    // ইনপুট বক্স খালি করা
    document.getElementById('description').value = '';
    document.getElementById('amount').value = '';
}

function updateDisplay() {
    document.getElementById('total-income').innerText = `৳${totalIncome}`;
    document.getElementById('total-expense').innerText = `৳${totalExpense}`;
}