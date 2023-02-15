
import { findalltasks, createtask, updatetask, deletetask } from "../services/taskservice.js";


export const home =  (req, res) => {

    try {
        
        const tasks = findalltasks();

        res.status(200).json({
            status: 200,
            tasks: tasks
            
        })        

    } catch (error) {
        res.status(500).json({ error: error })

    }

}


export const posttask =  (req, res) => {
       
    try {
        const newProfile = createtask(req.body)

        res.status(200).json({ status: 200, data: newProfile });
        

    } catch (error) {
        res.status(500).json({ error: error })

    }

}

export const taskedit =  (req, res) => {
       
    try {
        
        const profileDetails =  updatetask(req.params.id,req.body);
        
         return res.status(200).json({ status: 200, data: profileDetails});
        
    } catch (error) {
        res.status(500).json({ error: error })

    }

}


export const taskdelete =  (req, res) => {
       
    try {
        deletetask(req.params.id );

            return res.status(200).json({status: 200, message: "User Profile Deleted Successfully"})
         

    } catch (error) {
        res.status(500).json({ error: error })

    }

}







