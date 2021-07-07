let mypiclogo = document.querySelector('img');
mypiclogo.onclick = function(){
   let mySrc = mypiclogo.getAttribute('src');
   if(mySrc === 'https://i.postimg.cc/k27T2wHZ/logo-1.jpg')
   {
       mypiclogo.setAttribute('src','https://i.postimg.cc/CZQ760KT/logo-2.jpg');
   }
   else if(mySrc === 'https://i.postimg.cc/CZQ760KT/logo-2.jpg')
   {
       mypiclogo.setAttribute('src','https://i.postimg.cc/WdSXggL4/logo-3.jpg');
   }

   else if (mySrc === 'https://i.postimg.cc/WdSXggL4/logo-3.jpg')
   {
       mypiclogo.setAttribute('src','https://i.postimg.cc/k27T2wHZ/logo-1.jpg');
   }
  else{
      mypiclogo.setAttribute('src','https://i.postimg.cc/k27T2wHZ/logo-1.jpg');
  }

};