'use strict';

(function(){ 

var data = [
	{
		id: 'box1',
		title: 'First box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['highlighted', 'special-header', 'important']
	},
	{
		id: 'box2',
		title: 'Second box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['special-header', 'important']
	},
	{
		id: 'box3',
		title: 'Third box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['highlighted', 'important']
	},
	{
		id: 'box4',
		title: 'Fourth box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['highlighted']
	},
	{
		id: 'box5',
		title: 'Fifth box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: []
	},
];


for (var i = 0; i < data.length; i++) {

	var box = '<div class="box" id="' + data[i].id + '">' + 
			'<header>' + data[i].title + '</header>' +
        	data[i].content +
    		'</div>';

	document.write(box);
}

for (var i = 0; i < data.length; i++) {

	var box = document.getElementById(data[i].id);

	for (var j = 0; j < data[i].categories.length; j++) {

		if(data[i].categories[j] == 'special-header') {
			var boxHeader = box.querySelector('header');
			boxHeader.classList.toggle('special-header');
		} else {
			box.classList.toggle(data[i].categories[j]);
		}
	}
}

 

})(); 