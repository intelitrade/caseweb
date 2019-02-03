function mytest1(oDoc)
{
	debugger;
	debugger;
	//alert(oDoc.cellCount());
	var iSectionCount = oDoc.sectionCount();
	var sPages = ""
	for(var i=1;i<=iSecionCount;i++)
	{
		var oSection = oDoc.section(i);
		if(oSection && oSection.propExists("CFORMAT")==1)
		{
			if(sPages=="")
			{
				sPages = "<li>"+oSection.label+"<li>";
			}else{
				sPages = sPages + "<li>"+oSection.label+"</li>";
			}
		}
	}
	 document.getElementById("demo").innerHTML = "<ul>"+sPages+"</ul>";
}