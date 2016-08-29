# ShowcaseView.js
ShowcaseView.js brings the awesome feature of Android in HTML. It's current state is not completely bug-free and does not always bring the perfect position of the showcase, so feel free to make the code better!

##Installation and requirements
Just include the JavaScript and CSS file and you're done! Additionally, you need jQuery and Materialize.

##Basic usage
It's very simple. [Want to play around with the demo?](https://krmax44.de/showcaseview/)

    <a href="#" class="btn">Cool feature!</a>
    <script>
      $(".btn").showcaseview({
        text: "Click this awesome button", //required
        buttonOnly: true, //only a click of a button closes the ShowcaseView (default: false)
        btntext: "Hide", //text of the button (default: "OK")
        circle: true, //defines if the shape is a circle instead of an ellipse (default: false)
        scroll: false //scroll to the element 
      }, function(){
        alert("ShowcaseView closed!");
      });
    </script>

##Changelog
Check out the Changelog over [here](https://github.com/krmax44/ShowcaseView.js/blob/master/CHANGELOG.md).

##License
[The MIT License](https://github.com/krmax44/ShowcaseView.js/blob/master/LICENSE)