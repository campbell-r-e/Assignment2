const magic = [
    {
      id: 1,
      color:'Red',
      Magic8:'Yes'
    },
    {   id:2,
        color:'Black',
        Magic8:'Not likely'
    },
    { id:3,
      color:'Blue',
      Magic8:'No'
    },{
        id:4,
        color:'Green',
      Magic8:'Maybe'
    },
    {   id:5,
        color:'Purple',
      Magic8:'Unlikely'
    },
    {   id:6,
        color:'Gray',
      Magic8:'No'
    }
    


];
function magic8(){
  var random=Math.floor(Math.random(1) * 6);
for(id in magic.id){
  if(random == id){
    var fourtune_Display= $('#Fourtune_Display');
    fourtune_Display.innerHTML = magic.Magic8
   
  }

}
}



