
var colors = Object.values(allColors())

var defaultDNA = {
    "headcolor" : 10,
    "mouthColor" : 13,
    "eyesColor" : 96,
    "earsColor" : 10,
    //Cattributes
    "eyesShape" : 1,
    "decorationPattern" : 1,
    "decorationMidcolor" : 13,
    "decorationSidescolor" : 13,
    "animation" :  1,
    "lastNum" :  1
    }

// when page load
$( document ).ready(function() {
  $('#dnabody').html(defaultDNA.headColor);
  $('#dnamouth').html(defaultDNA.mouthColor);
  $('#dnaeyes').html(defaultDNA.eyesColor);
  $('#dnaears').html(defaultDNA.earsColor);
    
  $('#dnashape').html(defaultDNA.eyesShape);
  $('#dnadecoration').html(defaultDNA.decorationPattern);
  $('#dnadecorationMid').html(defaultDNA.decorationMidcolor);
  $('#dnadecorationSides').html(defaultDNA.decorationSidescolor);
  $('#dnaanimation').html(defaultDNA.animation);
  $('#dnaspecial').html(defaultDNA.lastNum);

  renderCat(defaultDNA)
})

function getDna(){
    var dna = ''
    dna += $('#dnabody').html()
    dna += $('#dnamouth').html()
    dna += $('#dnaeyes').html()
    dna += $('#dnaears').html()
    dna += $('#dnashape').html()
    dna += $('#dnadecoration').html()
    dna += $('#dnadecorationMid').html()
    dna += $('#dnadecorationSides').html()
    dna += $('#dnaanimation').html()
    dna += $('#dnaspecial').html()

    return parseInt(dna)
}

function renderCat(dna){
    headColor(colors[dna.headcolor],dna.headcolor)
    $('#bodycolor').val(dna.headcolor)
    earColor(colors[dna.earsColor],dna.earsColor)
    $('#earcolor').val(dna.earsColor)
    mouth_contour_Color(colors[dna.mouthColor],dna.mouthColor)
    $('#mouth_contour_color').val(dna.mouthColor)
    eyeColor(colors[dna.eyesColor],dna.eyesColor)
    $('#eyecolor').val(dna.eyesColor)
    eyeVariation(dna.eyesShape)
    $('#eyeShape').val(dna.eyesShape)
    decorationVariation(dna.decorationPattern)
    $('#decoration').val(dna.decorationPattern)
    midDecorColor(colors[dna.decorationMidcolor], dna.decorationMidcolor)
    $('#midDecor').val(dna.decorationMidcolor)
    LeftRightDecorColor(colors[dna.decorationSidescolor], dna.decorationSidescolor)
    $('#leftRightDecor').val(dna.decorationSidescolor)
    animationFun(dna.animation)
    $('#animations').val(dna.animation)
}

// Changing cat colors
$('#bodycolor').change(()=>{
    var colorVal = $('#bodycolor').val()
    headColor(colors[colorVal],colorVal)
})

$('#earcolor').change(()=>{
  var colorVal = $('#earcolor').val()
  earColor(colors[colorVal],colorVal)
})

$('#mouth_contour_color').change(()=>{
  var colorVal = $('#mouth_contour_color').val()
  mouth_contour_Color(colors[colorVal],colorVal)
})

$('#eyecolor').change(()=>{
  var colorVal = $('#eyecolor').val()
  eyeColor(colors[colorVal],colorVal)
})

$('#eyeShape').change(()=>{
  var shape = parseInt($('#eyeShape').val())
  eyeVariation(shape)
})

$('#decoration').change(()=>{
  var decoration = parseInt($('#decoration').val())
  decorationVariation(decoration)
})

$('#midDecor').change(()=>{
  var decorationMid = $('#midDecor').val()
  midDecorColor(colors[decorationMid],decorationMid)
})

$('#leftRightDecor').change(()=>{
  var decorationLR = $('#leftRightDecor').val()
  LeftRightDecorColor(colors[decorationLR],decorationLR)
})

$('#animations').change(()=>{
  var animationValue = parseInt($('#animations').val())
  animationFun(animationValue)
})

$('#btnColor').click(()=>{
  $('#headGroup').show()
  $('#earGroup').show()
  $('#mouthGroup').show()
  $('#eyeColorGroup').show()

  $('#eyeShapeGroup').hide()
  $('#decorGroup').hide()
  $('#midDecorGroup').hide()
  $('#LRdecorGroup').hide()
  $('#animationGroup').hide()
})

$('#btnAttributes').click(()=>{
  $('#headGroup').hide()
  $('#earGroup').hide()
  $('#mouthGroup').hide()
  $('#eyeColorGroup').hide()

  $('#eyeShapeGroup').show()
  $('#decorGroup').show()
  $('#midDecorGroup').show()
  $('#LRdecorGroup').show()
  $('#animationGroup').show()
})

$('#btnDefault').click(()=>{
  renderCat(defaultDNA);
})

$('#btnRandom').click(()=>{
  var Random = {
    //Cat collors
    "headcolor" : Math.floor(Math.random() * 89) + 10,
    "eyesColor" : Math.floor(Math.random() * 89) + 10,
    "earsColor" : Math.floor(Math.random() * 89) + 10,
    "mouthColor" : Math.floor(Math.random() * 89) + 10,
    //Cat attributes
    "eyesShape" : Math.floor(Math.random() * 5) + 1,
    "decorationPattern" : Math.floor(Math.random() * 4) + 1,
    "decorationMidcolor" : Math.floor(Math.random() * 89) + 10,
    "decorationSidescolor" : Math.floor(Math.random() * 89) + 10,
    "animation" : Math.floor(Math.random() * 4) + 1,
  }
  $('#dnabody').html(Random.headcolor);
  $('#dnaeyes').html(Random.eyesColor);
  $('#dnaears').html(Random.earsColor);
  $('#dnamouth').html(Random.mouthColor);

  $('#dnashape').html(Random.eyesShape);
  $('#dnadecoration').html(Random.decorationPattern);
  $('#dnadecorationMid').html(Random.decorationMidcolor);
  $('#dnadecorationSides').html(Random.decorationSidescolor);
  $('#dnadanimation').html(Random.animation);
  renderCat(Random)
})


