let beers = 99
while (beers != 0) {
    if (beers > 1) {
        console.log(`${beers} bottles of beer on the wall, ${beers} bottles of beer`);
    } else {
        console.log(`${beers} bottle of beer on the wall, ${beers} bottle of beer`);
    }
    beers--;
    if (beers === 1) {
        console.log(`Take one down and pass it around, ${beers} bottle of beer on  the wall.`);
    }
    else if (beers > 0) {
        console.log(`Take one down and pass it around, ${beers} bottles of beer on  the wall.`);
    }
    else {
        console.log("No more bottles of beer on the wall, no more bottles of beer.")
        console.log("Go to the store and buy some more, 99 bottles of beer on the wall.")
    }
}