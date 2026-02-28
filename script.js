function openTab(tabId) {
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');

    // Highlight active button
    document.querySelectorAll('.bottom-nav button').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tabId);
    });
}

// Tab 4
function showNotification() {
    document.getElementById('notification').style.display = 'block';
}

function closeNotification() {
    document.getElementById('notification').style.display = 'none';
}

// Tab 5
function showChoice() {
    const radio = document.querySelector('input[name="choice"]:checked');
    const dropdown = document.getElementById('dropdown').value;
    let text = '';
    if (radio) text += `Radio: ${radio.value} `;
    text += `Dropdown: ${dropdown}`;
    document.getElementById('choiceDisplay').innerText = text;
}

// Tab 6
function addItem() {
    const input = document.getElementById('newItem');
    if (input.value === '') return;
    const li = document.createElement('li');
    li.innerText = input.value;
    li.onclick = () => li.classList.toggle('crossed');

    const delBtn = document.createElement('button');
    delBtn.innerText = 'Delete';
    delBtn.onclick = (e) => {
        e.stopPropagation();
        li.remove();
    };
    li.appendChild(delBtn);

    document.getElementById('todoList').appendChild(li);
    input.value = '';
}

// Tab 3
const canvas = document.getElementById('pieChart');
if (canvas) {
    const ctx = canvas.getContext('2d');
    const colors = ['red', 'blue', 'green', 'orange', 'purple'];
    let start = 0;
    const slices = [30, 50, 20, 40, 60];
    const total = slices.reduce((a, b) => a + b, 0);
    slices.forEach((val, i) => {
        const angle = (val / total) * 2 * Math.PI;
        ctx.beginPath();
        ctx.moveTo(150, 100);
        ctx.arc(150, 100, 100, start, start + angle);
        ctx.fillStyle = colors[i % colors.length];
        ctx.fill();
        start += angle;
    });
}

// Initialize tab
openTab('tab1');
