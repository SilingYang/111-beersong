function beerSong(num) {
    let result = "";
    for (let i = num; i >= 0; i--) {
        if(i===1)
        {
            result="1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.";
        }
        else if(i<=99&&i>=2)
        {
            result=i.toString()+" bottles of beer on the wall, "+i.toString()+" bottles of beer.\nTake one down, pass it around, "+(i-1).toString()+" bottles of beer on the wall."
        }
        else if(i===0)
        {
            result="No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall."
        }
        
    return result;
}
}

module.exports = beerSong;