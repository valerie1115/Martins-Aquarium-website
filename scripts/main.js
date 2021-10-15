
import { useFish } from './fish/FishDataProvider.js'
import { FishList } from './fish/fishlist.js'
const allTheFish = useFish()

for (const fish of allTheFish) {
    console.log(fish)
}
FishList ()
