import {Creators} from "./creators.js";
import {Users} from "./users.js";


let creator= new Creators();
let newUser1=new Users();
let newUser2=new Users();
let newUser3=new Users();
let newUser4=new Users();

creator.subscribe(newUser1);
creator.subscribe(newUser2);
creator.subscribe(newUser3);
creator.subscribe(newUser4);

let newVideo="lalala";
creator.addVideo(newVideo);


class ApplicationState{
    constructor(){
      this.appState=false;
    }

    //פונקציה לכיבוי והדלקת האפליקציה
    toggleState(){
        if(this.appState==true){
            this.appState=false;
        }else{
            this.appState=true;
        }
    }
}

class ApplicationStateSingleton{
    constructor(){
    if(!ApplicationStateSingleton.myState){
        ApplicationStateSingleton.myState=new ApplicationState();
      }
    }
// פונקציה שנותנת את מצב האפליקציה, האם טרו או פולס
    getAppState(){
        return ApplicationStateSingleton.myState.appState;
    }


    // פונקציה לשינוי מצב האפליקציה מכבוי למופעל וכן להיפך
    updateAppState(){
        return ApplicationStateSingleton.myState.toggleState();
    }
}

    let newAppState=new ApplicationStateSingleton();
    if(newAppState.getAppState()==true){
        console.log("the application working😀!!!");
    }else{
        console.log("the application is not working😪");
        newAppState.updateAppState();
    }