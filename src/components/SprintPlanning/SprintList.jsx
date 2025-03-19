import React,{useState} from "react";
import { Button , Input } from "@fluentui/react-components";
import { useDispatch } from "react-redux";
import { updateEpicDates } from "../../redux/epicDatesReducer";



const SprintList = ({ onAddEpic }) =>{
    const [isAdding,setIsAdding] = useState(false);
    const [epicName, setEpicName] = useState("");
    const dispatch = useDispatch();
   
    const handleAddEpic = () => {
        if (epicName.trim()) {
          dispatch(addEpic(epicName));
          setEpicName(""); 
          setIsAdding(false); 
        }
      };

      const handleKeyPress = (e) => {
        if (e.key === "Enter") {
          handleAddEpic();
        }
      };
    

  return(
       <div>
         {isAdding ? (
        <Input
          placeholder="Enter Epic Name"
          value={epicName}
          onChange={(e) => setEpicName(e.target.value)} 
          onKeyDown={handleKeyPress}
          autoFocus
        />
      ) : ( 
        <Button onClick={() => setIsAdding(true)}>
          + Create Epic
        </Button>
      )}
       
      </div>
   
  );
};


  

export default SprintList; 