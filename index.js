const side = document.querySelector('aside');
const men = document.getElementById('menu-btn');
const close = document.getElementById('close-btn');

const dark = document.querySelector('.dark-mode');

men.addEventListener('click', () => {
 side.style.display = 'block';
}); 

close.addEventListener('click', () => {
 side.style.display = 'none';
});


dark.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variables');
    dark.querySelector('span:nth-child(1)').classList.toggle('active');
    dark.querySelector('span:nth-child(2)').classList.toggle('active');
})

Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = ` 
    <td>${order.productName}</td>
    <td>${order.productNumber}</td>
    <td>${order.paymentStatus}</td>
    <td class="${order.status === 'Declined' ? 'danger' : order.status === 'Pending' ? 'warning' : 'primary'}">${order.status}</td>
    <td class="primary">Details</td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});