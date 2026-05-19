//Gizli Giriş İstifadəçidən giriş:
//İstifadəçi. "admin" yazsanız:
//sonra parol soruşulun. 
//Şifrə "12345" olsa: 
//Admin panelə daxil edildi 
//Əks halda: Şifrə səhvdir 
//Əgər giriş səhvdirsə: Belə hesab yoxdur


let user = prompt("İstifadəçi adını daxil edin");
if(user === "admin"){
  let password = prompt ("Şifrəni daxil edin");
  
    if (password == "12345") {
        alert("Admin panelə daxil edildi");
    } else {
        alert("Şifrə səhvdir");
    }

} else {
    alert("Belə hesab yoxdur");
}