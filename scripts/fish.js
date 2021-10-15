
 export const Fish = (fish) => {
    return `
        <section class="fish card">
            <div><img  class="fish__image image--card" src="${fish.image}" /></div>
            <div class="fish__name">${fish.name}</div>
            <div class="fish__diet">${fish.food}</div>
            <div class="fish__lengthSize">${fish.size}</div>
            <div class="fish__breed">${fish.breed}</div>
            <div class="fish__location">${fish.locationHarvested}</div>
            
        </section>
    `
}
