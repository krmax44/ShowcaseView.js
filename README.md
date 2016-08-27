# ShowcaseView.js
ShowcaseView.js brings the awesome feature of Android in HTML. Feel free to use it in your projects or to contribute!

##Installation and requirements
Just include the JavaScript and CSS file and you're done! Additionally, you need jQuery and Materialize.

##Usage
It's very simple.

    <a href="#" class="btn">Cool feature!</a>
    <script>
      showcaseview.highlightElement({
        element: ".btn", //required
        text: "Click this awesome button", //required
        buttonOnly: true, //only a click of a button closes the ShowcaseView (default: false)
        btntext: "Hide", //text of the button (default: "OK")
        circle: true, //defines if the shape is a circle instead of an ellipse (default: false)
        scroll: false //scroll to the element 
      });
    </script>
    
##Changelog
Check out the Changelog over [here](https://github.com/krmax44/ShowcaseView.js/blob/master/CHANGELOG.md).

##License
[The MIT License](https://github.com/krmax44/ShowcaseView.js/blob/master/LICENSE)
