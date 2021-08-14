var student={
    name:'MADEEHA MOAZZAM',
    age:19,
    contact:9008702801,
    address:
    {
        city:'Ramanagara',
        state:'karnataka',
        pin:562159,
    },

    hobbies:['painting','drawing','Cricket','badminton'],

}

console.log(student);
console.log(student.hobbies[4])


for(i=0;i<=student.hobbies.length-1;i++)
{
    console.log(student.hobbies[i]);
}
