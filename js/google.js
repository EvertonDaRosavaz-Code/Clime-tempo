function handleCredentialResponse(response) {
    const data = jwt_decode(response.credential);
    

    

  }
  window.onload = function () {
    google.accounts.id.initialize({
      client_id: "",
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