# ShowcaseView.js
ShowcaseView.js brings the awesome feature of Android in HTML. It's current state is not completely bug-free and does not always bring the perfect position of the showcase, so feel free to make the code better!

##Installation and requirements
###CDN
    
    <link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/krmax44/ShowcaseView.js/master/css/showcaseview.min.css">
    <script type="text/javascript" src="https://cdn.rawgit.com/krmax44/ShowcaseView.js/master/js/showcaseview.min.js"></script>
    
###Self-hosted
Just include `showcaseview.min.js` and `showcaseview.min.css` and you're done! (But make sure that the CSS file and the `showcaseview.png` file are in the same directory!)

###Dependencies
For now, you need jQuery and Materialize.

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
