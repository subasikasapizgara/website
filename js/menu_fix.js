document.querySelector('html').onclick = function(e)
{
	if(document.querySelector('a[href="#nav"]'))
	{
		if(e.target.className == 'meanmenu-reveal meanclose' || e.target.outerHTML == '<span></span>')
		{
			//console.log('yes');
		}
		else
		{
			if(document.querySelector('a[href="#nav"]').classList.length == 2)
			{
				document.querySelector('a[href="#nav"]').click();
			}
		}
	}
}