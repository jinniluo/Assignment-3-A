
//Set up the drawing environment here
var margin = {t:20,r:20,b:20,l:20};
var width = document.getElementById('plot').clientWidth-margin.l-margin.r,
	height = document.getElementById('plot').clientHeight-margin.t-margin.b;

var plot = d3.select('.canvas')
	.append('svg')
	.attr('width',width+margin.l+margin.r)
	.attr('height',height+margin.t+margin.b)
	.append('g')
	.attr('transform','translate('+margin.l+','+margin.t+')')

	//.attr('transform','translate()') --> complete this line here


//Start with 100 symbols
var numOfSymbols = 100;

//Create an array, generate objects to push into the array
var newArray=[]

for(var i=0;i<numOfSymbols;i++) {
	r_random = (Math.random()*100)/2,
	w_random = Math.random()*100,
	h_random = Math.random()*100,
	x_random = Math.random()*width,
	y_random = Math.random()*height,
		type_random = Math.random()
		scale= []
	scale.push(Math.random()*100);

	if (type_random<0.5){type_style='rect'}
	else{type_style='circle'}

	newObj={rect_w: w_random,
	rect_h:h_random,
	x:x_random,
	y:y_random,
	r:r_random,
	type:type_style}

	newArray.push(newObj);
	console.log(newObj);

}


//Attributes of these symbols are
// --> x position: between 0 and width
// --> y position: between 0 and height
// --> size: between 0 and 100x100
// --> type: circle or square
// --> color



//With the array you've created and populated, draw circles to represent these symbols
newArray.forEach(function(obj){
	if(obj.type='rect'){
		plot
			.append('rect')
			.attr('width',obj.rect_w)
			.attr('height',obj.rect_h)
			.attr('x',obj.x)
			.attr('y'.ogj.y)
			.style('fill','red');

	}else{
		plot
			.append('circle')
			.attr('cx',obj.x)
			.attr('cy',obj.y)
			.attr('r',obj.r)
			.style('fill','red');
	}

})
