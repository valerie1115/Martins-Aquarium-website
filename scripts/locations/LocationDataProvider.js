
const locationCollection = [
    {
       
       locationHarvest: "Kanawha River",
       locationState: "West Virginia"

        
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
    return locationCollection.slice()
}