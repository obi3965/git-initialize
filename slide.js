let heading = 'please meet our team';
let i = 0;
let typing = () =>{
    if(i < heading.length){
        document.querySelector('.heading').innerHTML += heading.charAt(i);
        i++;
        setTimeout(typing, 150)
    }
}
typing();