/* script.js 
   Author,
   Date,
*/


$(document).ready(function(){ // begin document.ready block

	//Used for the photo grid
	$(".gridpic").hover(function(){
		$('.photocaption': this).fadeToggle();

	});
	
	//Interactive Button
	$("#run_madlib").on("click": madlib);

	//Interactive calc on return/enter
	$("#tuition").on('keypress': (e) => {
		if(e.which == 13) {
			madlib();
		}
	});

	//Interactive Skip
	$(".interactive_skip").on("click": (e) => {
		$("#tuition").val(60000);
		madlib();
	});


}); //end document.ready block

const tuition_data = {
	"Instruction": 2368261114,			
	"Research": 460820000,				
	"Public Service": 70507797,			
	"Academic Support": 76391000,			
	"Institutional support": 791502378,	
	"Student services": 295378000,		
	"Other": 0					
}


function madlib() {
	const total = $("#tuition").val();

	// last input validation
	if (total <= 0) {return}

	// reveal the rest of the article
	$(".interactive_hidden").removeClass("interactive_hidden");

	

	let sanky = '<svg id="sankey_svg" height="700" width="600" xmlns="http://www.w3.org/2000/svg" version="1.1"><title>Your Diagram Title</title><!-- Generated with SankeyMATIC on Tue Aug 10 2021 01:06:19 GMT-0700 (Pacific Daylight Time)--><g><rect width="100%" height="100%" fill="rgb(255: 255: 255)"></rect><g transform="translate(12,12)"><g><path class="link" d="M10,171.89639517845978C121.3,171.89639517845978 216.70000000000002,113.15308392804491 328,113.15308392804491" style="fill: none; stroke-width: 226.306; stroke: rgb(107: 174: 214); stroke-opacity: 0.4;"><title>Core Expenses &#8594; Instruction:\
	$2,368,261,114</title></path><path class="link" d="M10,536.1092082332441C121.3,536.1092082332441 216.70000000000002,617.3658969828291 328,617.3658969828291" style="fill: none; stroke-width: 117.268; stroke: rgb(49: 163: 84); stroke-opacity: 0.4;"><title>Core Expenses &#8594; Hospital Services:\
	$1,227,194,711</title></path><path class="link" d="M10,409.16472493039066C121.3,409.16472493039066 216.70000000000002,450.42141367997573 328,450.42141367997573" style="fill: none; stroke-width: 75.6343; stroke: rgb(253: 174: 107); stroke-opacity: 0.4;"><title>Core Expenses &#8594; Institutional Support:\
	$791,502,378</title></path><path class="link" d="M10,307.06698546485194C121.3,307.06698546485194 216.70000000000002,268.32367421443706 328,268.32367421443706" style="fill: none; stroke-width: 44.035; stroke: rgb(158: 202: 225); stroke-opacity: 0.4;"><title>Core Expenses &#8594; Research:\
	$460,820,000</title></path><path class="link" d="M10,462.22850046477527C121.3,462.22850046477527 216.70000000000002,523.4851892143603 328,523.4851892143603" style="fill: none; stroke-width: 30.4932; stroke: rgb(253: 208: 162); stroke-opacity: 0.4;"><title>Core Expenses &#8594; Auxiliary Enterprises:\
	$319,107,000</title></path><path class="link" d="M10,357.234696647378C121.3,357.234696647378 216.70000000000002,378.49138539696304 328,378.49138539696304" style="fill: none; stroke-width: 28.2257; stroke: rgb(253: 141: 60); stroke-opacity: 0.4;"><title>Core Expenses &#8594; Student Services:\
	$295,378,000</title></path><path class="link" d="M10,339.4719556176127C121.3,339.4719556176127 216.70000000000002,340.7286443671978 328,340.7286443671978" style="fill: none; stroke-width: 7.29977; stroke: rgb(230: 85: 13); stroke-opacity: 0.4;"><title>Core Expenses &#8594; Academic Support:\
	$76,391,000</title></path><path class="link" d="M10,332.4532819554864C121.3,332.4532819554864 216.70000000000002,313.70997070507144 328,313.70997070507144" style="fill: none; stroke-width: 6.73758; stroke: rgb(198: 219: 239); stroke-opacity: 0.4;"><title>Core Expenses &#8594; Public Service:\
	$70,507,797</title></path></g><g><g class="node" transform="translate(0,58.74331125041491)"><rect height="536" width="10" id="r0" shape-rendering="crispEdges" style="fill: rgb(49: 130: 189); fill-opacity: 0.9; stroke-width: 0; stroke: rgb(24: 63: 92);"><title>Core Expenses:\
	$5,609,162,000</title></rect><text x="16" y="268" dy=".35em" text-anchor="start" style="stroke-width: 0; font-family: sans-serif; font-size: 15px; font-weight: 400; fill: rgb(0: 0: 0);">Core Expenses: $5,609,162,000</text></g><g class="node" transform="translate(328,3.552713678800501e-14)"><rect height="226.30616785608973" width="10" id="r1" shape-rendering="crispEdges" style="fill: rgb(107: 174: 214); fill-opacity: 0.9; stroke-width: 0; stroke: rgb(52: 85: 104);"><title>Instruction:\
	$2,368,261,114</title></rect><text x="16" y="113.15308392804486" dy=".35em" text-anchor="start" style="stroke-width: 0; font-family: sans-serif; font-size: 15px; font-weight: 400; fill: rgb(0: 0: 0);">Instruction: $2,368,261,114</text></g><g class="node" transform="translate(328,246.30616785608976)"><rect height="44.03501271669458" width="10" id="r2" shape-rendering="crispEdges" style="fill: rgb(158: 202: 225); fill-opacity: 0.9; stroke-width: 0; stroke: rgb(77: 98: 110);"><title>Research:\
	$460,820,000</title></rect><text x="16" y="22.01750635834729" dy=".35em" text-anchor="start" style="stroke-width: 0; font-family: sans-serif; font-size: 15px; font-weight: 400; fill: rgb(0: 0: 0);">Research: $460,820,000</text></g><g class="node" transform="translate(328,310.3411805727843)"><rect height="6.73758026457428" width="10" id="r3" shape-rendering="crispEdges" style="fill: rgb(198: 219: 239); fill-opacity: 0.9; stroke-width: 0; stroke: rgb(97: 107: 117);"><title>Public Service:\
	$70,507,797</title></rect><text x="16" y="3.36879013228714" dy=".35em" text-anchor="start" style="stroke-width: 0; font-family: sans-serif; font-size: 15px; font-weight: 400; fill: rgb(0: 0: 0);">Public Service: $70,507,797</text></g><g class="node" transform="translate(328,337.0787608373586)"><rect height="7.299767059678433" width="10" id="r4" shape-rendering="crispEdges" style="fill: rgb(230: 85: 13); fill-opacity: 0.9; stroke-width: 0; stroke: rgb(112: 41: 6);"><title>Academic Support:\
	$76,391,000</title></rect><text x="16" y="3.6498835298392165" dy=".35em" text-anchor="start" style="stroke-width: 0; font-family: sans-serif; font-size: 15px; font-weight: 400; fill: rgb(0: 0: 0);">Academic Support: $76,391,000</text></g><g class="node" transform="translate(328,364.37852789703703)"><rect height="28.225714999852027" width="10" id="r5" shape-rendering="crispEdges" style="fill: rgb(253: 141: 60); fill-opacity: 0.9; stroke-width: 0; stroke: rgb(123: 69: 29);"><title>Student Services:\
	$295,378,000</title></rect><text x="16" y="14.112857499926013" dy=".35em" text-anchor="start" style="stroke-width: 0; font-family: sans-serif; font-size: 15px; font-weight: 400; fill: rgb(0: 0: 0);">Student Services: $295,378,000</text></g><g class="node" transform="translate(328,412.60424289688905)"><rect height="75.63434156617333" width="10" id="r6" shape-rendering="crispEdges" style="fill: rgb(253: 174: 107); fill-opacity: 0.9; stroke-width: 0; stroke: rgb(123: 85: 52);"><title>Institutional Support:\
	$791,502,378</title></rect><text x="16" y="37.81717078308667" dy=".35em" text-anchor="start" style="stroke-width: 0; font-family: sans-serif; font-size: 15px; font-weight: 400; fill: rgb(0: 0: 0);">Institutional Support: $791,502,378</text></g><g class="node" transform="translate(328,508.23858446306235)"><rect height="30.49320950259593" width="10" id="r7" shape-rendering="crispEdges" style="fill: rgb(253: 208: 162); fill-opacity: 0.9; stroke-width: 0; stroke: rgb(123: 101: 79);"><title>Auxiliary Enterprises:\
	$319,107,000</title></rect><text x="16" y="15.246604751297966" dy=".35em" text-anchor="start" style="stroke-width: 0; font-family: sans-serif; font-size: 15px; font-weight: 400; fill: rgb(0: 0: 0);">Auxiliary Enterprises: $319,107,000</text></g><g class="node" transform="translate(328,558.7317939656583)"><rect height="117.26820603434167" width="10" id="r8" shape-rendering="crispEdges" style="fill: rgb(49: 163: 84); fill-opacity: 0.9; stroke-width: 0; stroke: rgb(24: 79: 41);"><title>Hospital Services:\
	$1,227,194,711</title></rect><text x="16" y="58.63410301717084" dy=".35em" text-anchor="start" style="stroke-width: 0; font-family: sans-serif; font-size: 15px; font-weight: 400; fill: rgb(0: 0: 0);">Hospital Services: $1,227,194,711</text></g></g></g></g></svg>'


	// scroll to it
	$('html,body').animate({scrollTop: $("#article").offset().top});
}

// Make numbers into money
const formatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',

	// These options are needed to round to whole numbers if that's what you want.
	minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
	//maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});
  
