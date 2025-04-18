import js from "@eslint/js";

const getStoredBook=()=>{
    const storeBookSTR=localStorage.getItem('readlist');
     if(storeBookSTR){
         const storeBookData=JSON.parse(storeBookSTR);
         return storeBookData;
     }else{
         return [];
     }
}

const addToStoreDB=(id)=>{
   
    const storeBookedData=getStoredBook();
     if(storeBookedData.includes(id)){
         alert('bhai ei id already exit');
     }else
     {
        storeBookedData.push(id);
         const data=JSON.stringify(storeBookedData);
         localStorage.setItem('readlist',data);
        console.log(storeBookedData);
     }
}

export {addToStoreDB,getStoredBook}