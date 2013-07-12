

var asins = [];


function add3DObject(thisDiv){
	thisDiv.style.overflow = 'hidden';

	thisDiv.style.WebkitTransformStyle = 'preserve-3d';
	thisDiv.style.WebkitPerspectiveOrigin = '50% 50%';

	thisDiv.style.MozTransformStyle = 'preserve-3d';
	thisDiv.style.MozPerspectiveOrigin = '50% 50%';

	thisDiv.style.oTransformStyle = 'preserve-3d';
	thisDiv.style.oPerspectiveOrigin = '50% 50%';

	thisDiv.style.transformStyle = 'preserve-3d';
	thisDiv.style.perspectiveOrigin = '50% 50%';

    var dx=0,dy=0,dz= -500 * asins.length;
	thisDiv.style.transform = 'translate3d(' + dx + 'px,'+ dy +',' + dz + 'px)';
	asins.push(thisDiv);
}

function runMe(){
(function(){
	var allImgs,thisImg;
	var allImgs = document.evaluate('//div[@id]',
	document,
	null,
	XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null); 
    
	var resultExp = new RegExp("^result"); 
	for (var i=0;i<allImgs.snapshotLength;i++) {
		var thisDiv = allImgs.snapshotItem(i);
		var id = thisDiv.id;
		console.log(id);
		if (resultExp.test(id)) {
			add3DObject(thisDiv);
		} 
	} 
})();
}

runMe();