<!DOCTYPE html>
<html>
<title>Laura and Eliran's wedding reservations</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<style>
html{font-family: "Snell Roundhand", cursive, sans-serif}
.home {font-family: "Snell Roundhand", cursive, sans-serif}
body, html {height: 100%}
p {line-height: 2}
.bgimg{
    min-height: 130%;
    background-position: center;
    background-size: cover;
}
.bgimg {background-image: url("pics/blackandwhite.jpg")}
</style>

<head>
  <!-- Css -->
  <link rel="stylesheet" href="css.css">
  <link rel="stylesheet" href="w3.css">
  <!-- Libraries -->
  <script src="lib/angular.js"></script>
  <script src="lib/angular-ui-router.js"></script>
  <!-- Scripts -->
  <script src="app.js"></script>
  <script src="services.js"></script>
  <script src="homepage/homecontroller.js"></script>
  <script src="adminpage/admincontroller.js"></script>
  <script src="loginpage/logincontroller.js"></script>
</head>

<!-- Header / Home-->
<header class="w3-display-container w3-wide bgimg w3-grayscale-min" id="home">
  <div class="w3-display-middle w3-text-white w3-center">
    <h1>Laura & Eliran</h1>
    <h2></h2>
    <h2>08.10.2018</h2>
  </div>
</header>

<body ng-app="routerApp">
<!-- Wedding information -->
<div class="w3-container w3-padding-64 w3-pale-red w3-grayscale-min w3-center" id="wedding">
  <div class="w3-content">
    <h1 class="w3-text-grey"><b>THE WEDDING</b></h1>
     <div class="w3-half">
        <h2>When</h2>
        <p>October 8th 2018</p>
        <p>Cocktail - 5:00 pm</p>
        <p>Huppa - 7:00 pm</p>
      </div>
      <div class="w3-half">
        <h2>Where</h2>
        <p>Congregation Spanish and Portuguese</p>
        <p>4894 Avenue St-Kevin, Montreal</p>
        <p>Valet service</p>
      </div>
    </div>
  </div>

<!-- RSVP section -->
<div class="w3-container w3-padding-64 w3-pale-red w3-center w3-wide" id="rsvp">
  <h1>HOPE YOU CAN MAKE IT!</h1>
  <p class="w3-large">Kindly Respond By September 8th, 2018</p>
  <p class="w3-xlarge">
    <!-- RSVP button -->
    <button onclick="document.getElementById('id01').style.display='block'" class="w3-button w3-round w3-red w3-opacity w3-hover-opacity-off" style="padding:8px 60px">
      RSVP
    </button>
  </p>
</div>

<!-- RSVP modal -->
<div id="id01" class="w3-modal" ng-controller="homectrl">
  <div class="w3-modal-content w3-card-4 w3-animate-zoom" style="padding:32px;max-width:600px">
    <div class="w3-container w3-white w3-center">
      <h1 class="w3-wide">CAN YOU COME?</h1>
      <p>We really hope you can make it.</p>

      <p>How many people are coming? Check the checkbox if it's a child</p>
      <input type="number"
             placeholder="Select number"
             ng-model="number">


        <div ng-repeat="x in num() track by $index">
          
            <input class="w3-input w3-border"
               type="text"
               placeholder="Full Name"
               ng-model="namelist[$index].name"></td>
            <input type="checkbox"
                 ng-model="namelist[$index].ischild"></td>
          

          <!-- x -->
          <span class="w3-padding-16"
                class="w3-right w3-margin-right"
                style="cursor: pointer;"
                ng-click="remove($index)">&emsp; &#10060
            </span>
          <p></p>
        </div>


      
      <p><i>Sincerely, Laura & Eliran</i></p>
      <div class="w3-row">
        <div class="w3-half">
          <button onclick="document.getElementById('id01').style.display='none';"
                  ng-click="coming()"
                  type="button"
                  class="w3-button w3-block w3-green" >Going </button>
        </div>

        <div class="w3-half">
          <button onclick="document.getElementById('id01').style.display='none';"
                  ng-click="notcoming()"
                  type="button"
                  class="w3-button w3-block w3-red">Can't come</button>
        </div>
        </div>
    </div>
  </div>
</div>
</body>



</html>