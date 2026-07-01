// The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

let students = ["Riku" , "Sanjukth" ,"Ritesh" ,"Benogopal" ,"siti" ,"Abhilash" , "Ssgar" , "Gayetri" ,"Raman" ,"Soumya" ,"Dustin" ,"Mike" ,"El" ,"Nency" ]

let Houses = []

for(const student of students){
    if(student.length < 6){
        Houses.push("Aravali")
    }
    else if(student.length < 8){
        Houses.push("Nilgiri")
    }
    else if(student.length < 12){
        Houses.push("Sivalik")
    }
    else{
        Houses.push("Udayagiri")
    }
}
console.log(Houses)