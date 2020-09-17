$(document).ready(function(){

    var recipe_box = $('#recipe_textbox');
    var add_btn = $('#add_btn');
    var cart = $('.cart');
    var delete_list = $('#delete_list');
    var fname = $('#fname');
    var lname = $('#lname');
    var form = $('#form');

    add_btn.on('click' ,function(){

        if(recipe_box.val().length > 0){
            cart.append(`<div>Item List <p>Recipe : ${recipe_box.val()} <button class="delete_btn">Delete</button></p></div>`);
            recipe_box.val('');
    
            $('.delete_btn').click(function(){
    
                 $(this).parentsUntil(".cart").remove();
        
            });
        }else{
            alert('Required')
        }
        
    });

    delete_list.on('click', function(){

        //$('#check-list').children().css({"color" : "red", ""});
        //$('#check-list').find(".unq").css({"color" : "red", "font-size": "32px"});
        $('#check-list > ul > li').not(".unq").css({"color" : "red", "font-size": "32px"});
        
    });


    $('#load_btn').on('click', function(){

        //$('#main-container').load('sample.txt #data');

        $.get("https://www.pinoyfreecoder.com/api/users/10", function(data, status){

                data.forEach(element => {
                    $('#main-container').append(`<p>${element.first_name}</p>`);
                    
                });

        });
    });


    form.on('submit', function(e){

        e.preventDefault();
       
        $.ajax({
            type: 'POST',
            url: 'process.php',
            data: {firstname : fname.val(), lastname: lname.val()},
            success: function(response){
                var data = JSON.parse(response);
                console.log(data);
                $('#main-container').append(`<p>${data.firstname} ${data.lastname}</p>`)
            }
        })

    });
   

});