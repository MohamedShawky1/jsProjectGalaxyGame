///<reference path="./typings/globals/jquery/index.d.ts"/>
var done = true;
var target;
var DropTarget;
var dropDivTarget;
var DragDivTarget;
$(function(){
  
    $(".Puzzle_Img_Div" ).draggable({
        start : function (event , ui){
            target = document.getElementById(this.id);
            target.style.zIndex=100;
          },
    });

    $(".Pictures_in_Div").droppable({
        drop: function (event, ui) {
            DropTarget = document.getElementById(this.id);
            dropDivTarget= DropTarget.getAttribute('id').replace('Img','');
            DragDivTarget=target.getAttribute('id').split('_')[1]
            if(dropDivTarget==DragDivTarget)
            {
                //$(`#${target.getAttribute('id')}`).effect("shake", {}, 1000, function () {});
                //DropTarget.offsetLeft
                //DropTarget.offsetTop
                //$(`#${target.getAttribute('id')}`)
                $(`#${target.getAttribute('id')}`).offset({ top:DropTarget.offsetTop ,left:DropTarget.offsetLeft-12});
               // $(".sepertaed_Images img").css('padding','0');

               // $(`#${target.getAttribute('id')}`).parent().removeClass('sepertaed_Images img')
               // target.offset(DropTarget.offsetLeft,DropTarget.offsetTop)
                // target.offsetTop=
                //alert('Thank You');
                
            }
            else
            {
                alert('No')
            }
         // $(`#${target.getAttribute('id')}`).effect("shake", {}, 1000, function () {});
        },
      });




  });

