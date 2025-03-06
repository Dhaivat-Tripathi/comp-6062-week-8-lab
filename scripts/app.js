//Create a new Vue app
const app = Vue.createApp({
    //Define the data for the app
    data(){
        return{
            mainHeading:'Welcome to the Vue.js!',
            message:'This message is displayed based on a boolean property.',
            showMessage: true
        };
    }
});

// Mount the app to the #app element
app.mount ('#app');
