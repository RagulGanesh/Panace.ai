import { Paper } from "@mui/material";
import { motion } from "framer-motion";
const Table = ({ data }) => {

  

    return (
      <div className="grid grid-cols-3 bg-purple-300  gap-6 m-4">
        

          { data.map((item) => (
            
             <motion.div
             
               >
              <Paper className="p-3 text-center" elevation={24}>

              {item}
              </Paper>
             </motion.div>
            
          ))}
      </div>
      
    );
  };
  
  export default Table;
  