async function acceptRequest(){
    let invites = document.querySelectorAll('.artdeco-button.artdeco-button--2.artdeco-button--secondary.ember-view.invitation-card__action-btn');
    // accept here
    invites.forEach(invite => {invite.click()});
}
async function execute(){
    if(confirm("Do you want to accept the requests visible here?")) {
        await acceptRequest();
        await alert('Request Accepted');
        location.reload();
    } else {
        /* do nothing */
    }
    
}
execute();
