
const fishCollection = [
    {
        name: "Bart",
        food: "crustaceans",
        size: "1.5 inches",
        breed: "carp",
        locationHarvested: "Kanawha River",
        
    },

 
{
    name: "Betty",
    food: "bananas",
    size: "3 inches",
    breed: "clown",
    locationHarvested: "Mon River"
},
{
    name: "Warren",
    food: "plants",
    size: "4 inches",
    breed: "cod",
    locationHarvested: "Hudson River"
},
]

export const useFish = () => {
    return fishCollection.slice()
}