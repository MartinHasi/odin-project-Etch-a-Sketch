const containerDiv = document.querySelector('#container');
const gridSizeBtn = document.querySelector('#getGridSize');
let gridCreated = 0;

function createDivGrid(rows)
{
    for (let i = 0; i < rows; i++)
        for(let j = 0; j < rows; j++)
        {
            const gridDiv = document.createElement('div');
            gridDiv.classList.add('gridBox');
            gridDiv.style.width = 100 / rows - .5+ '%';

            if (rows <= 20)
            {
                gridDiv.style.height = rows * 3 + 'px';
            }
            else if (rows > 21)
            {
                gridDiv.style.height = rows / 3 + 'px';
            }
            else if (rows > 40)
            {
                gridDiv.style.height = rows * 4 + 'px';
            }
            else if ( rows > 60)
            {
                gridDiv.style.height = rows * 5 + 'px';
            }
            console.log(`Row: ${i}`);
            containerDiv.appendChild(gridDiv);
        }
}

function getGridSize()
{
    const gridSize = parseInt(prompt('How big should the Grid be? Max-Gridsize(100)'));
    alert(gridSize);
    if(gridSize >100)
    {
        alert('Grid Size is to big');   
    }
    else
    {
        containerDiv.innerText = '';
        createDivGrid(gridSize);
    }
}
gridSizeBtn.addEventListener('click', getGridSize);
//createDivGrid(16);