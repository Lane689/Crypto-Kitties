
//Random color
function getColor() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor
}

function genColors(){
    var colors = []
    for(var i = 10; i < 99; i ++){
      var color = getColor()
      colors[i] = color
    }
    return colors
}

//This function code needs to modified so that it works with Your cat code.
function headColor(color,code) {
    $('.cat__head, .cat__chest').css('background', '#' + color)  //This changes the color of the cat
    $('#headcode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnabody').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function earColor(color,code) {
    $('.cat__ear--left, .cat__ear--right').css('background', '#' + color)  //This changes the color of the cat ear
    $('#earcode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnaears').html(code) //This updates the ear color part of the DNA that is displayed below the cat
}

function mouth_contour_Color(color,code) {
    $('.cat__mouth-contour, .cat__tail').css('background', '#' + color)  //This changes the color of the cat mouth and tail
    $('#mouth_contour_code').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnamouth').html(code) //This updates the mouth and tail color part of the DNA that is displayed below the cat
}

function eyeColor(color,code) {
    $('.cat__eye span').css('background', '#' + color)  //This changes the color of the cat eye
    $('#eyecode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnaeyes').html(code) //This updates the eye color part of the DNA that is displayed below the cat
}

// Mid colors
function midDecorColor(color,code) {
    $('.cat__head-dots').css('background', '#' + color)  //This changes the color of the cat mid decoration color
    $('#midDecorName').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnadecorationMid').html(code) //This updates the mid decoration color part of the DNA that is displayed below the cat
}

// Left-right colors
function LeftRightDecorColor(color,code) {
    $('.cat__head-dots_first, .cat__head-dots_second').css('background', '#' + color)  //This changes the color of the cat left and right decoration color
    $('#leftRightDecorName').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnadecorationSides').html(code) //This updates the left and right decoration color part of the DNA that is displayed below the cat
}

//###################################################
//Functions below will be used later on in the project
//###################################################
function eyeVariation(num) {

    $('#dnashape').html(num)
    switch (num) {
        case 1:
            normalEyes()
            $('#eyeName').html('Basic')
            break;
        case 2:
            normalEyes()
            $('#eyeName').html('Squeez')
            eye_squeez_type()
            break;
        case 3:
            normalEyes()
            $('#eyeName').html('Reptile eye')
            eye_reptile_type()
            break;
        case 4:
            normalEyes()
            $('#eyeName').html('Left')
            eye_left_type()
            break;
        case 5:
            normalEyes()
            $('#eyeName').html('Right')
            eye_right_type()
            break;
    }
}

// Mid right left, all 3
function decorationVariation(num) {

    $('#dnadecoration').html(num)
    switch (num) {
        case 1:
            $('#decorationName').html('Basic')
            normaldecoration()
            break;
        case 2: 
            normaldecoration()
            $('#decorationName').html('Up')
            up_decor()
            break;
        case 3:
            normaldecoration()
            $('#decorationName').html('Hair')
            Hair_decor()
            break;
        case 4:
            normaldecoration()
            $('#decorationName').html('angle')
            deg_decor()
            break;
    }
}

//Animation
function animationFun(num){
    $('#dnadanimation').html(num)
    switch(num){
        case 1:
            $('#animationName').html('No animation')
            removeAnimation()
            break;
        case 2: 
            $('#animationName').html('Moving Head')
            animationType1()
            break;
        case 3:
            $('#animationName').html('Moving Tail')
            animationType2()
            break;
        case 4:
            $('#animationName').html('Closing eyes')
            animationType3()
            break;
        case 5:
            $('#animationName').html('Moving ears')
            animationType4()
            break;
    }
}

async function animationType1(){
    removeAnimation()
    $('#head').addClass('movingHead')
}

async function animationType2(){
    removeAnimation()
    $('#tail').addClass('movingTail')
}

async function animationType3(){
    removeAnimation()
    $('.pupil-left, .pupil-right').addClass('closingEyes')
}

async function animationType4(){
    removeAnimation()
    $('.cat__ear--left').addClass('movingLeftEar')
    $('.cat__ear--right').addClass('movingRightEar')
}

async function removeAnimation(){
    $("#head").removeClass("movingHead")
    $('#tail').removeClass('movingTail')
    $('.pupil-left, .pupil-right').removeClass('closingEyes')
    $('.cat__ear--left').removeClass('movingLeftEar')
    $('.cat__ear--right').removeClass('movingRightEar')
}

async function normalEyes() {
    await $('.cat__eye').find('span').css('border', 'none')
}

async function eye_squeez_type() {
    await $('.cat__eye').find('span').css('border-top', '15px solid')
    await $('.cat__eye').find('span').css('border-bottom', '15px solid')
}

async function eye_reptile_type() {
    await $('.cat__eye').find('span').css('border-right', '15px solid')
    await $('.cat__eye').find('span').css('border-left', '15px solid')
}

async function eye_left_type() {
    await $('.cat__eye').find('span').css('border-right', '15px solid')
}

async function eye_right_type() {
    await $('.cat__eye').find('span').css('border-left', '15px solid')
}

async function normaldecoration() {
    $('.cat__head-dots').css({ "transform": "rotate(0deg)", "height": "48px", "width": "14px", "top": "1px", "border-radius": "0 0 50% 50%" })
    $('.cat__head-dots_first').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.cat__head-dots_second').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })
}

async function up_decor() {
    $('.cat__head-dots').css({ "transform": "rotate(180deg)", "height": "48px", "width": "14px", "top": "1px", "border-radius": "0 0 50% 50%" })
    $('.cat__head-dots_first').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.cat__head-dots_second').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })
}

async function deg_decor() {
    $('.cat__head-dots').css({ "transform": "rotate(135deg)", "height": "48px", "width": "14px", "top": "1", "border-radius": "0 0 50% 50%" })
    $('.cat__head-dots_first').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.cat__head-dots_second').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })
}

async function Hair_decor() {
    $('.cat__head-dots').css({ "transform": "rotate(180deg)", "height": "48px", "width": "14px", "top": "-50px", "border-radius": "0 0 50% 50%" })
    $('.cat__head-dots_first').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.cat__head-dots_second').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })
}






