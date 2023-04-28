const KeyGoogle  = '786161790730-dug2vu5em07a2tkj9htaebu9v9sqjhbd.apps.googleusercontent.com'
function handleCredentialResponse(response) {
    const data = jwt_decode(response.credential);
    console.log(data);
    let nome    = data.name;
    let email   = data.email;
    let picture = data.picture;

    location.href = `index.php?googlenome=${nome}&googleemail=${email}`;

   


  }
  window.onload = function () {
    google.accounts.id.initialize({
      client_id: KeyGoogle,
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
 