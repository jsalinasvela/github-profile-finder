//init Github
const github = new GitHub;

//init UI
const ui = new UI;

//Search Input
const searchUser = document.querySelector('#searchUser');

//Search Input event Listener
//
searchUser.addEventListener('keyup', (e)=> {
   //Get input text
   const userText = e.target.value;

   if(userText !== ''){
       console.log(userText);
       //Make http call
       github.getUser(userText)
       	.then(data =>{
       		if (data.profile.message ==='Not Found') {
       			console.log("Error");
       			ui.showAlert('User not found', 'alert alert-danger');
       			ui.clearProfile();
       		}else{
       			console.log(data);
            ui.clearAlert();
       			ui.showProfile(data.profile);
            ui.showRepos(data.repos);
       		}
       	})
   }else{
   	//clear profile
   		ui.clearProfile();
   }
});