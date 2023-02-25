const initialData={
    list : []
}
const Todoreducer=(state=initialData,action)=>{
    switch(action.type){
        case  "ADD_TODO":
            const {id,data}=action.payload;
            if(data.length >2){
                 return {
               ...state,
               list : [
                   ...state.list,
                   {
                      id :id,
                      data :data,
                   }
                 ]
              } 
            }
          
              

           case  "DELETE_TODO":
           
           const newlist=state.list.filter((elem)=>elem.id !== action.id)
            
           return {
               ...state,
               list : newlist
           } 

           case  "REMOVE_TODO":
           
           const newlistS=[];
            
           return {
               
               list : newlistS
           } 

           default : return state;

    }

}

export default Todoreducer;