{
   function hoge(): never {
    throw new Error('error is occured.');
   } 

   function eternal(): never {
    while(true) {

    }
   }
}