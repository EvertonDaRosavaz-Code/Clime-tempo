function handleCredentialResponse(response) {
    const data = jwt_decode(response.credential);
    console.log(data);
  }
  window.onload = function () {
    google.accounts.id.initialize({
      client_id: "786161790730-dug2vu5em07a2tkj9htaebu9v9sqjhbd.apps.googleusercontent.com",
      callback: handleCredentialResponse
    });
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      {
         theme: "standard",
        size: "large",
        type : "standard",
        shape :"pill",
        text :"continue_with.",
        logo_alignment : "left"
        
        }  
    );
    google.accounts.id.prompt(); 
  }