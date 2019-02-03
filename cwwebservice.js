function mytest1(oDoc,oHTMLDoc)
{
	debugger;
	debugger;
	//alert(oDoc.cellCount());
	var iSectionCount = oDoc.sectionCount();
	var sPages = ""
	for(var i=1;i<=iSectionCount;i++)
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
	oHTMLDoc.getElementById("demo").innerHTML = "<ul>"+sPages+"</ul>";
}