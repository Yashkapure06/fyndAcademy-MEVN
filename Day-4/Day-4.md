# Fynd Academy - _MEVN Stack_

<center>

<div style="padding:25px 0 25px 0 ;background: linear-gradient(25deg, #000000, #5d0ce4);background-size: 400% 400%;color:#fff;border-radius:5px;box-shadow: 10px 10px 5px lightblue;">

<img style="background:transparent" src="../assets/6037ed523cde7f1958341705_logo-removebg-preview.png" height="200"/>


</div>
</center>
<br/>

        Day-3 5/12/2022

### Basic HTML Tags


* Form Tags
  * form >> `<form>`
    * Form props: 
      * action
      * target
      * method
        * GET/POST
        `<form action="" method="">...</form>`
  * label >> `<label>`
    * label props: 
      * for
      `<label for="">...</label>`
  * input >> `<input>` 
    * input props: 
      * type
        - ```  
             <input type="button">

             <input type="checkbox">

             <input type="color">

             <input type="date">

             <input type="datetime-local">

             <input type="email">

             <input type="file">

             <input type="hidden">

             <input type="image">

             <input type="month">

             <input type="number">

             <input type="password">

             <input type="radio">

             <input type="range">

             <input type="reset">

             <input type="search">

             <input type="submit">

             <input type="tel">

             <input type="text">

             <input type="time">

             <input type="url">

             <input type="week"> 
             
      * id
      * name
  * select tag
    * select >> `<select>...</select>`
      * select props:
        * name
        * id
        `
        <select name="cars" id="cars">
        ...
        </select>
        `
    * option tag
      * option >> `<option>...</option>`
        * option props:
          * value
          ` <option value="carname">BMW</option>`

    ```   
        <select id="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
        </select>

   * Meta tags
    ```
    <meta charset="UTF-8">
    <meta name="description" content="Free Web tutorials">
    <meta name="keywords" content="HTML, CSS, JavaScript">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta http-equiv="refresh" content="5; url=https://www.google.com">
    and many more....