# ShowcaseView.js
ShowcaseView.js brings the awesome feature of Android in HTML. It's current state is not completely bug-free and does not always bring the perfect position of the showcase, so feel free to make the code better!

##Installation and requirements
Just include the JavaScript and CSS file and you're done! Additionally, you need jQuery and Materialize.

##Usage
It's very simple.

    <a href="#" class="btn">Cool feature!</a>
    <script>
      showcaseview.highlightElement({
        element: ".btn", //required
        text: "Click this awesome button", //required
        buttonOnly: true, //only a click of a button closes the ShowcaseView (default: false),
        btntext: "Hide" //text of the button (default: "OK")
      });
    </script>
