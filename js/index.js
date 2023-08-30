// Fetch All Data From the Url
async function getData(isShowMore) {
    let response = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
    let data = await response.json();
    const allData = data.data.tools;
    // Pass the data as arguments
    showData(allData, isShowMore);
}

// Reive The Data as a parameter and showing them in the display;
const showData = (allData, isShowMore) => {
    // Get the item container
    const itemContainer = document.getElementById('item-container');
    // Show more button
    const showBtn = document.getElementById('show-more');
    // For each element of the array;
    let shortArray = allData.slice(0, 6);
    if (isShowMore) {
        console.log(isShowMore);
        shortArray = allData.slice();
        showBtn.classList.add('hidden')
        itemContainer.innerHTML = "";
    } else {
        showBtn.classList.remove('hidden');
    }

    shortArray.forEach(element => {
        // console.log(element);
        // Create The Div Element for each element;
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `
        <div id="item-container" class="">
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure><img class="h-[226px]" src="${element.image}" alt="Shoes" /></figure>
            <div class="card-body text-left space-y-3">
            <h2 class="card-title">Features</h2>
            <ol class="list-decimal ml-6">
                <li>Natural language processing</li>
                <li>Natural language processing</li>
                <li>Natural language processing</li>
            </ol>
            <hr>
            <div class="flex items-center justify-between">
                <div>
                    <h2 class="card-title">${element.name}</h2>
                    <p class="space-x-4"><i class="fa-solid fa-calendar-days"
                            style="color: #383838;"></i><span>11/01/2022</span>
                    </p>
                </div>
                <div class="card-actions justify-end">
                    <a href="" class="bg-red-300 rounded-full w-11 h-11 flex items-center justify-center"><i
                            class="fa-solid fa-arrow-right" style="color: #ea3d2a;"></i></a>
                </div>
            </div>
        </div>
        </div>
    </div>
        `;
        // Append for each element;
        itemContainer.appendChild(itemDiv);
    });
}



function showMoreButton() {
    const i = true;
    getData(i)
}

getData()