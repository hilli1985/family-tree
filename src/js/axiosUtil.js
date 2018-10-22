import axios from "axios"
// var axios = require('axios')
class axiosUtil {
    // getParestByUserID = (id)=>{
    //    return axios.get('/parent/'+id)
    //     .then(function (response) {
    //         // console.log(response.data.Children);
    //         console.log(response.promiseValue);
    //         return (response);
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });
    // }
    
    getParestByUserID = async (id)=> {
        try {
            let response = await axios.get('/parent/'+id)
            console.log(response.data);
            return(response.data);
        }
        catch (err){
            console.log(err)
        }
    }
    
    getParentByName = async (name)=> {
        try {
            let response = await axios.get('/parent/?Name='+name)
            console.log(response.data);
            return(response.data);
        }
        catch (err){
            console.log(err)
        }
    }
    
    
    getAllUsers = async ()=> {
        try {
            let response = await axios.get('/users/')
            console.log(response.data);
            return(response.data);
        }
        catch (err){
            console.log(err)
        }
    }
    
    addUser = async (name,imgUrl) =>{
        try {
            let response = await axios.post('/user', { userName: name, imgUrl: imgUrl })
            return(response);
        }
        catch (err) {
            console.log(err)
        }
    }
    
    addChildToParent = async (name,imgUrl,parentId) => {
        try {
            let response = await axios.post('/parent', { userName: name, imgUrl: imgUrl, parentId:parentId })
            
        }
        catch (err) {
            console.log(err);
        }
        
    }
    
    
} 
const util = new axiosUtil(); //singletone
export default util;


