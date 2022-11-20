import axios from "axios";


const URL ='https://gmail-backend-deply-kaushik.onrender.com';

export const addSentEmailData = async (data)=>{
    try{
     return await axios.post(`${URL}/add`,data)
    }
    catch (error){
        console.log("error while calling sent maildata",error);
    }

} 

export const getAllMails = async () => {
  try {
  return  await axios.get(`${URL}/`);
  } catch (error) {
    console.log("Error while calling getting emails", error);
  }
};

