
import { useFish } from './FishDataProvider.js'
import { FishList } from './fishlist.js'
const allTheFish = useFish()

for (const fish of allTheFish) {
    console.log(fish)
}
FishList ()
