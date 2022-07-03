   class Creators{
    constructor(){
        this.videoBank=[];
        this.subscribers=[];
    }

    subscribe(user){
      this.subscribers.push(user);
    }

    addVideo(video){
      this.videoBank.push(video);
      this.subscribers.forEach(user=>user.printAddVideo(video));
    }
}

module.export={Creators};