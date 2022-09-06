const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      email:null,
      userName: null,
      is_active: null,
      userId: null,
      msg:"Esperando respuesta del servidor",
      token:null,
      is_admin:null,
      modalLogin:false



    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
      getPeople: (url) => {
        fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            console.log(response);
            return response.json();
          })
          .then((data) => {
            setStore({ people: data });
          })
          .catch((error) => {
            console.log(error);
          });
      },
      changeUserName:(data)=>{
        setStore({ userName: data });
      },
      changeEmail:(data)=>{
        setStore({ email: data });
      },
      changeIsActive:(data)=>{
        setStore({ is_active: data });
      },
      changeIsAdmin:(data)=>{
        setStore({ is_admin: data });
      },
      changeUserId:(data)=>{
        setStore({ userId: data });
      },    
      changeMsg:(data)=>{
        setStore({ msg: data });
      },      
      changeToken:(data)=>{
        setStore({ token: data });
      }, 
      handleOpenModalLogin:(data)=>{
        setStore({ modalLogin: data });

      },
      handleCloseModalLogin:(data)=>{
        setStore({ modalLogin: data });

      }     
    },
  };
};

export default getState;
