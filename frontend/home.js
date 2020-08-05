import { saveFormData, getMapData } from 'backend/googleSheet';

$w.onReady(async function () {
	// load map data
	let keyworkMap = $w('#html1');
	keyworkMap.scrolling = 'no';
	let mapData = await getMapData();
	keyworkMap.postMessage(mapData);
	
	// set up form submission
	let postcardForm = $w('#html2'); 
	postcardForm.scrolling = 'no';
  	postcardForm.onMessage(event => 
	  {
		console.log("message received");
		saveFormData(event.data).then((value) =>
		{
			console.log(value.updates.updatedRows);
			if (value.updates.updatedRows === 1)
			{
				console.log("ok");
				postcardForm.postMessage("ok");
			}
			else console.log("not ok");
		});
	});
});