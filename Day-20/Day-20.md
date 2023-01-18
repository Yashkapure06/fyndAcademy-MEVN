# Fynd Academy - _MEVN Stack_

<center>

<div style="padding:25px 0 25px 0 ;background: linear-gradient(25deg, #000000, #5d0ce4);background-size: 400% 400%;color:#fff;border-radius:5px;box-shadow: 10px 10px 5px lightblue;">

<img style="background:transparent" src="../assets/6037ed523cde7f1958341705_logo-removebg-preview.png" height="200"/>


</div>
</center>
<br/>

        Day-20 27/12/2022


### Introduction to JavaScript 

* combine key events
* events

* combine key events:
        
        * keydown
        * keyup
        * keypress

* events:
        
        * keydown
        * keyup
        * keypress

* **keydown**:
         The keydown event is fired when a key is pressed down. The event is sent to the element that has the focus, or if the element does not handle the event, to its parent, and so on up through the document's element hierarchy. The keydown event is sent before the input method processes the key, so the event can be canceled to prevent any default action the browser might have for that key.

* **keyup**:
         The keyup event is fired when a key is released. The event is sent to the element that has the focus, or if the element does not handle the event, to its parent, and so on up through the document's element hierarchy. The keyup event is sent before the input method processes the key, so the event can be canceled to prevent any default action the browser might have for that key.

* **keypress**:
         The keypress event is fired when a key is pressed down and that key normally produces a character value (use input instead). The event is sent to the element that has the focus, or if the element does not handle the event, to its parent, and so on up through the document's element hierarchy. The keypress event is sent before the input method processes the key, so the event can be canceled to prevent any default action the browser might have for that key.


* An event is a signal that something has happened. Every DOM node contains a set of events which are triggered by user actions (such as mouse clicks, form submissions, etc.) or browser actions (such as page loading). You can register a function to be called whenever a particular event is triggered. This is called an event listener.