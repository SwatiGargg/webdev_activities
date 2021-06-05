const puppeteer = require("puppeteer");
const id ="vagoxox352@revutap.com";
const pw = "1234567";
let tab ;
let browseropenpromise = puppeteer.launch({headless:false, defaultViewport:null, args:["--start-maximized--"]});
browseropenpromise.then(function(browser){
    console.log("open");
    return browser.pages();
})
.then(function(pages){
    tab = pages[0];
    return tab.goto("https://letsintern.com/student/login");
  }).then(function(){
      return tab.type("#Email",id);
 }).then(function(){
     return tab.type("#Password",pw);
 }).then(function(){
    return tab.click("#login_submit");
 }).then(function(){
    return tab.waitForSelector('.form-control.search-query',{visible:true})
 })
 .then(function(){
      return tab.type(".form-control.search-query","web development");
     
  }).then(function(){
    return tab.click("#search-button.btn.btn-primary.search-button")
  })
  
  .then(function(){
    return tab.waitForSelector(".col-sm-4>ul>li >a[title~=Delhi]",{Delay:5000});
  })
//      .then(function(){
//   return tab.click(".col-sm-4>ul>li >a[title~=Delhi]");
// })
 .then(function(){

  })