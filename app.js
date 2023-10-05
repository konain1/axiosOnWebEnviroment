


let url = 'https://api.tvmaze.com/shows';


// let arr = []

// function getRate() {
//     fetch(url)
//         .then((res) => {
//             return res.json(); 
//         })
//         .then((data) => {
//            data.forEach(element => {
//             arr.push(element)
//            });
//         }); 
// }


// getRate();

// console.log(arr)


async function getaxiosRate(){
    let newData = await axios.get(url)
    let myArr = await newData.data;

    console.log(myArr)
}

getaxiosRate()