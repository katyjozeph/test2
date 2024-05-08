const savetolocal=(governorateID)=>
{
    localStorage.setItem("governorateID",governorateID);
}
// savetolocal(governorateID);
console.log(localStorage.getItem('governorateID'));