import { createStore } from 'vuex'
import axios from "axios";
import setAuthHeader from "@/utils/setAuthHeader";

export default createStore({
  state: {
    mobile_navigator_show: true,
    containerShow: '',
    form_avtorization: false,
    email:'',
    password:'',
    modalTransfer:false,
    modalShow:false,
    user_password:false,
    user_cardid:false
  },
  getters: {

  },
  mutations: {
    mobile_navigator_func:state=>{
      if(state.mobile_navigator_show==false){
        state.mobile_navigator_show=true;
        document.getElementById("overlay").style.display = "block";
      }else{
        state.mobile_navigator_show=false;
        document.getElementById("overlay").style.display = "none";
      }
    },
    avtorization_func:state=>{
      if(state.form_avtorization==false){
        state.form_avtorization = true;
        document.getElementById("overlay").style.display = "block";
      }else{
        state.form_avtorization = false;
        document.getElementById("overlay").style.display = "none";
      }
    },
    UserPassword_func:state=>{
      state.user_password=true;
      state.user_cardid=false;
    },
    UserCardId_func:state=>{
      state.user_cardid=true;
      state.user_password=false;
    },
    transferModal_func:state=>{
      if(state.modalTransfer==false){
        state.modalTransfer=true;
        document.getElementById("overlay").style.display = "block";
      }else{
        state.modalTransfer=false;
        document.getElementById("overlay").style.display = "none";
      }
    },
    close_form_avtorization_func:state=>{
      state.form_avtorization = false;
      document.getElementById("overlay").style.display = "none";
    },
    submit_form_avtorization_func:(state, form)=>{
      const login = {
        email: form.email,
        password: form.password
      }
      console.log(login)
      axios.post('http://agrobankapi/api/login', login)
          .then((response)=>{
            console.log(response.data.token)
            localStorage.setItem('token', response.data.token);
            setAuthHeader(response.data.token);
          })
          .catch((err)=>console.log(err));
      state.form_avtorization = false;
      document.getElementById("overlay").style.display = "none";
    },
    getUsers_func:state=>{
      axios.get('http://agrobankapi/api/users')
          .then((response) => console.log(response.data))
          .catch((err) => console.log(err.response));
    },
    modalForm_func:state=>{
      state.modalShow=true;
      document.getElementById("overlay").style.display = "block";
    },
    modalHide_func:state=>{
      state.modalShow=false;
      document.getElementById("overlay").style.display = "none";
    },
    formSubmit_func:state=>{
      state.modalShow=false;
      document.getElementById("overlay").style.display = "none";
    },

  },
  actions: {

  },
  modules: {

  }
})
