import { observable, action } from "mobx";
import util from '../axiosUtil';

class FamilyTreeStroe {
    @observable currentUser = {};
    
    constructor (){    
    }
    
    @action setUser = (result) => {
        this.currentUser = result;
    }
    
    @action getUserByName = async (name) => {
        try {
            let result = await util.getParentByName(name);
            this.setUser(result);
        }
        catch (err) {
            console.log('err: '+err);
        }
    }
    
    addUser = async (name, imgUrl) => {
        
        try {
            let result = await util.addUser(name, imgUrl);
            alert(result.data)
            this.getUserByName(name);
        }
        catch (err) {
            console.log('err: '+err);
        }
    }

    addChildToParent = async (name, imgUrl, parentId) => {
        await console.log(name+imgUrl+parentId);
        await util.addChildToParent(name,imgUrl,parentId);
    }
}
const store = new FamilyTreeStroe();
export default store;
