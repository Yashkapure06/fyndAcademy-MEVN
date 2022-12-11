# Fynd Academy - _MEVN Stack_

<center>

<div style="padding:25px 0 25px 0 ;background: linear-gradient(25deg, #000000, #5d0ce4);background-size: 400% 400%;color:#fff;border-radius:5px;box-shadow: 10px 10px 5px lightblue;">

<img style="background:transparent" src="../assets/6037ed523cde7f1958341705_logo-removebg-preview.png" height="200"/>


</div>
</center>
<br/>

        Day-7 9/12/2022

### Introduction to CSS 

* Pseudo-Class: 
  A CSS **pseudo-class** is a keyword added to a selector that specifies a special state of the selected element(s). For example, the pseudo-class `:hover` can be used to select a button when a user's pointer hovers over the button and this selected button can then be styled. 

    <br>


    * Pseudo-Class: Inshort it shows some special view or effect using pseudoclasses

    * syntax: 
    ```
        selector:pseudo-class{
            property: value;
        }
    ```
    * nth-child
    * given as >> `:nth-child()`
    * for example: select:
    ```
        div:nth-child(2){
            property:value;
        }
        /* Will select every 2nd child of every parent element*/
    ```
    * we can do same for tables as well
    * for example: 
    ```
        tr:nth-child(odd)
        tr:nth-child(odd):hover
        tr:nth-child(even)
        tr:nth-child(even):hover
    ```
    * we can add an equation as well
    ```
        p:nth-child(3n+0);
    ```
* Nextly we learnt about **Linear Gradiant**

1. `linear-gradient: (color1, color2, color3....)`
2. `repeating-linear-gradient: (color1, color2, color3....)`
3. `radial-gradient:(red, green, blue)`
4. `repeating-radial-gradient:(red, green, blue)`