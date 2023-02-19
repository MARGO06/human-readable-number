module.exports = function toReadable (number) {
  
  let str=String(number)  
 let arr1=['zero','one','two','three','four','five','six','seven','eight','nine']
 let arr2=['','ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']
 let arr3=['','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
 let arr4=['','one hundred','two hundred','three hundred','four hundred','five hundred','six hundred','seven hundred','eight hundred','nine hundred']
 for(let i=0; i<arr1.length;i++){
 if(str.length==1&&str==i){
     arr1[i]==str  
     return arr1[i]       
 }
 for(let j=0; j<arr2.length;j++){
 if(str.length==2&&str[0]==j&&str[1]==0){
    arr2[j]==str[0] 
    return arr2[j]      
}else if(str.length==2&&str[0]==1&&str[1]==0){
  arr2[1]==str 
  return arr2[1]      
}
  else if(str.length==2&&str[0]==j&&str[1]==i){
         arr2[j]==str[0] 
         arr1[i]==str[1]  
         return arr2[j]+' '+arr1[i]       
     }
for(let k=0; k<arr3.length;k++){
      if(str.length==2&&str[0]==1&&str[1]==k){
      arr3[k]==str[1]
      return arr3[k]}
for(let l=0;l<arr4.length;l++){
  if(str.length==3&&str[0]==l&&str[1]==0&&str[2]==0){
    arr4[l]==str[0]  
    return arr4[l]} 
    else if(str.length==3&&str[0]==l&&str[1]==1&&str[2]==0){
      arr4[l]==str[0] 
      arr2[1]==str[1]  
      return arr4[l]+' '+arr2[1] }
  else if(str.length==3&&str[0]==l&&str[1]==1&&str[2]==k){
    arr4[l]==str[0]
    arr3[k]==str[2]
    return arr4[l]+' '+arr3[k]
  }  
 else if(str.length==3&&str[0]==l&&str[1]==j&&str[2]==0){
    arr4[l]==str[0] 
    arr2[j]==str[1]  
    return arr4[l]+' '+arr2[j]            
} else if(str.length==3&&str[0]==l&&str[1]==0&&str[2]==i){
  arr4[l]==str[0] 
  arr1[i]==str[2]  
  return arr4[l]+' '+arr1[i] 
}
else if(str.length==3&&str[0]==l&&str[1]==j&&str[2]==i){
  arr4[l]==str[0] 
  arr2[j]==str[1]
  arr1[i]==str[2]  
  return arr4[l]+' '+arr2[j]+' '+arr1[i]       
}
 }}}}}
 






