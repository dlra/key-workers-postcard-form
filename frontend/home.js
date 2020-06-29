import { saveFormData } from '../backend/googleSheet';
$w.onReady(function () {
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