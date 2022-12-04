const season = {
    goal: 34,
    assist: 32,
    mOm: 18,
    redCard: 0,
    yellowCard: 2,
    playerOftheMonth: 11,
    marketValue: '$120M'
}

const footballer = {
    name: 'Lionel Messi',
    currentStat: season,
    ballondorYears: [2009, 2010, 2011, 2012, 2015, 2019, 2021],
    currentValue: 'His current Market Value is ' + season.marketValue,
    descriptionEn: () => {
        console.log(footballer.name + ' is world\'s greatest Player,who got 7(' + footballer.ballondorYears + ') times Balllon Dor\nabove you can find some magical statistic of current season:\n' + footballer);
    }
}

const [player, value, year] = [footballer.name, season.marketValue, footballer.ballondorYears[2]];
console.log('name: ', player, '\nMarket Value:', value, '\nseason: ', year);

// const manOftheMatch = `\n\n${footballer.name} got Man of the match for ${footballer.currentStat.mOm} times in the year of ${footballer.ballondorYears[1]}`;
// const output = footballer.descriptionEn();
// console.log(output);

const numbers = [10, 5.5, 7, 95, 33.33, 50, 55.6];
// const task = numbers.forEach(x => ((x / 7).toFixed(2)));
const task = numbers.find(x => x > 10);
// console.log(task);

