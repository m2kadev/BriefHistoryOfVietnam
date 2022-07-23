var navbar = document.querySelectorAll(".navbar li a");

var historyChilds = document.getElementById("historyChilds");

var homePage = document.getElementById("homePage");
var pricePage = document.getElementById("pricePage");
var layer = document.getElementById("layer"); 
var historyTimeline = document.getElementById("historyTimeline");


var home = document.getElementById("home");
var precis = document.getElementById("precis");
var histories = document.getElementById("history");

function goHome() {

    /*
    if (homePage.style.display == "block" && pricePage.style.display == "block") {
        homePage.style.display = "none";
    }else {
        homePage.style.display = "block";
        pricePage.style.display = "none";
    }

    if (homePage.style.display == "block" && pricePage.style.display == "none") {
        layer.classList.add("layer1");
    }else {
        layer.classList.remove("layer1");
    } */

    homePage.style.display = "block";
    pricePage.style.display = "none";
    historyTimeline.style.display = "none";
    layer.classList.add("layer1");
    layer.classList.remove("layer2");
    layer.classList.remove("layer3");

    if (homePage.style.display == "block") {
        home.classList.add('active');
        precis.classList.remove('active');
        histories.classList.remove('active');
    }

    for (var i = 0; i < navbar.length; i++) {
        navbar[i].style.color = "#121212";
    }

}

function goPrice() {
    /*

    if (pricePage.style.display == "block" && homePage.style.display == "block") {
        pricePage.style.display = "none";
    } else {
        pricePage.style.display = "block";
        homePage.style.display = "none";
    }

    if (pricePage.style.display == "block" && homePage.style.display == "none") {
        layer.classList.add("layer2");
    }else {
        layer.classList.remove("layer2");
    } */

    pricePage.style.display = "block";
    homePage.style.display = "none";
    historyTimeline.style.display = "none";
    layer.classList.add("layer2");
    layer.classList.remove("layer1");
    layer.classList.remove("layer3");

    if (pricePage.style.display == "block") {
        precis.classList.add('active');
        home.classList.remove('active');
        histories.classList.remove('active');
    }

    for (var i = 0; i < navbar.length; i++) {
        navbar[i].style.color = "#121212";
    }

}



function goHistory() {

    historyTimeline.style.display = "block";
    homePage.style.display = "none";
    pricePage.style.display = "none";
    layer.classList.add("layer3");
    layer.classList.remove("layer1");
    layer.classList.remove("layer2");

    if (historyTimeline.style.display == "block") {
        histories.classList.add('active');
        home.classList.remove('active');
        precis.classList.remove('active');
    }

    for (var  i = 0; i < navbar.length; i++) {
        navbar[i].style.color = "#a6a488";
    }

    //historyChilds.classList.toggle("showHistoryChilds");

    if (historyChilds.classList.contains("hideAnimation")){
        historyChilds.classList.remove("hideAnimation");
        historyChilds.classList.add("showAnimation");
    }else {
        historyChilds.classList.add("hideAnimation");
        historyChilds.classList.remove("showAnimation");
    } 
    
}

/*
histories.addEventListener('mouseover', function(){
    historyChilds.classList.remove("hideAnimation");
    historyChilds.classList.add("showAnimation");
    //this.classList.add("showAnimation");
    //this.classList.remove("hideAnimation");
})

histories.addEventListener("mouseout", function(){
    historyChilds.classList.add("hideAnimation");
    historyChilds.classList.remove("showAnimation");
    //this.classList.add("hideAnimation");
    //this.classList.remove("showAnimation");
}) */

function showModelOne(){
    var bigBox = document.getElementById("bigBox1");

    bigBox.style.transform = "scale(1)";
}

function  closeModelOne() {
    var bigBox = document.getElementById("bigBox1");
    bigBox.style.transform = "scale(0)";
}

function showModelTwo() {
    var bigBox = document.getElementById("bigBox2");
    bigBox.style.transform = "scale(1)";
}

function closeModelTwo() {
    var bigBox = document.getElementById("bigBox2");
    bigBox.style.transform = "scale(0)";
}

function showModelThree() {
    var bigBox = document.getElementById("bigBox3");
    bigBox.style.transform = "scale(1)";
}

function closeModelThree() {
    var bigBox = document.getElementById("bigBox3");
    bigBox.style.transform = "scale(0)";
}