// After the HTML finishes loading, everything inside of this callback function is run.
$(document).ready(function(){

  /* 
    For the element that has an id of 'the-foods-list', add this string of text after
    the closing tag of the last element inside of said element. In our case, it would be added 
    after the closing tag of the 'h3'

    <ul id="the-foods-list">
      <h3>Foods list: </h3>
      * everything is added here... *
    </ul>

    TURNS INTO

    <ul id="the-foods-list">
      <h3>Foods list: </h3>
      <li>Pizza</li>
      <li>Beer</li>
      <li>Cake</li>
    </ul>

  */
  $('#the-foods-list').append("<li>Pizza</li><li>Beer</li><li>Cake</li>");
});