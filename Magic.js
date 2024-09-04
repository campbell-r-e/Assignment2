const magic = [
    {
      id: 0,
      color:'Red',
      magic8:'Yes'
    },
    { id:1,
      color:'Aqua',
      magic8:'Not likely'
    },
    { id:2,
      color:'Blue',
      magic8:'No'
    },
    {
      id:3,
      color:'Green',
      magic8:'Maybe'
    },
    { id:4,
      color:'Purple',
      magic8:'Unlikely'
    },
    { id:5,
      color:'tan',
      magic8:'No'
    }
    


];
function magic8(){

  
var random=Math.floor(Math.random(1) * 6);

console.log(magic.find(magic => magic.id === random));
var result = magic.find(magic => magic.id === random)

  if(result){
   
    document.getElementById("Fourtune_Display").innerHTML = result.magic8;
    document.getElementById("Fourtune_Display").style.color = result.color;
  }
  


};





