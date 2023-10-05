


let url = 'https://api.tvmaze.com/shows';


let arr = []

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


 function getUrl(){
    axios.get(url).then((res)=> {
      
      const dataa = res.data
       
     dataa.forEach(element => {
        arr.push(element)

     });

     getRating(arr)
   })

}

getUrl()

let ratings = []

function getRating(arr){

   arr.forEach((item)=>{
    ratings.push(item.rating.average)
   })
   
}




function ratingSort(){

    const sorted = ratings.sort((s,b)=>s-b)
    console.log(sorted)
}
ratingSort()