
function fetchStudents(){
    // $.get('https://intellifyflask-api.ap-south-1.elasticbeanstalk.com/api/GetAllResult/5121073' , (data) => {
    //  console.log(data)   
    //  return data
    // })
    return new Promise(function (resolve,reject){
         $.get('https://intellifyflask-api.ap-south-1.elasticbeanstalk.com/api/GetAllResult/5121073',
          (data) => {
                resolve(data)
            
        })
    })
}

function createCard(student){
    return (`
    <div class="row">
    <div class="items">
        <div class="key">Total Score</div>
        <div class="value">${student["total_score"]}</div>
    </div>
    <div class="items">
            <div class="key">correct</div>
            <div class="value">${student["correctly_answered"]}</div>
    </div>
    <div class="items">
            <div class="key">Incorrect</div>
            <div class="value">${student["incorrectly_answered"]}</div>
    </div>
    <div class="items">
            <div class="key">Rank</div>
            <div class="value">${student["score_rank"]}</div>
    </div>
    <div class="items">
            <div class="key">Proficiency</div>
            <div class="value">${Math.round(student["score_proficiency"])}</div>
    </div>
 </div>
 `)
}

$(function(){
    let btn = $('.btn');
    let record = $('.record')
    btn.click(async() => {
         const data = await fetchStudents();
        //  const studentLength = Object.keys(data).length;;
         
         for (var key in data) {
            if (data.hasOwnProperty(key)) {
                record.append(createCard(data[key]));
            }
        }
    })

})
