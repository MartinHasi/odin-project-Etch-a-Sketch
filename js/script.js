const containerDiv = document.querySelector('#container');


function createDivs(rows, cols)
{
    for (let i = 0; i < rows; i++)
        for(let j = 0; j < rows; j++)
        {
            const gridDiv = document.createElement('div');
            gridDiv.classList.add('gridBox');
            gridDiv.style.width = 100 / rows - .5+ '%';
            gridDiv.style.height = rows * 3 + 'px';
            console.log(`Row: ${i} | Col: ${cols}`);
            containerDiv.appendChild(gridDiv);
        }
}


createDivs(16, 16);