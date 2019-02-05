function mytest1(oDoc)
{
	try{
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

		var sHTMLStr =  "<ul>"+sPages+"</ul>";
		return sHTMLStr;
	}catch(e)
	{
		
	}finally{
		
	}
}

//Get all subsections belonging to a section
function getSubsections(sSectionLabel,oDoc,iSectionIndex)
{
	try{
		
		if (!isInputValid(sSectionLabel)&& iSectionIndex>0)
		{
			var oSection = oDoc.Section(iSectionIndex);//Get section object
		}else
		{
			var oSection = oDoc.SectionByName(sSectionLabel);//Get section object
		}
		
		if (oSection) // Check if section exists
		{
			var aSecParaIndex = getSectionParaIndexLib(oSection); //Get the first and last Paragraph of a section
			
			var iFirstPara  = aSecParaIndex[0]; // assign the fisrt paragraph index to iFirstPara
			var iLastPara = aSecParaIndex[1]; // assign the last paragraph index to iLastPara
		
			var iSections = oDoc.sectionCount(); //Get the number of sections in a document

			var aSection = new Array(); // Create an array object to hold all first level sections within a specific section
			
			for (var j=1;j<=iSections;j++) // loop through sections in the document
			{
				var oSubSection = oDoc.section(j); // assign sections in the document to oSubSection
				//Much more generic
				if(oSubSection && oSubSection.index!=oSection.index)
				{
					var iSubFirstPara = oSubSection.firstParaIndex; // assign the fisrt paragraph index to iSubFirstPara
					var iSubLastPara = oSubSection.lastParaIndex;// assign the last paragraph index to iSubLastPara
					//check if these fall within the first sections para range
					if (iSubFirstPara >= iFirstPara & iSubLastPara <= iLastPara)
					{
						aSection[aSection.length]=oSubSection; // if a section is found within the specified section add to array aSections
					}
				}
			}
			return aSection; // return an array with sections found within that section i.e. the Section Object is returned
		}
	}catch(e)
	{
		alert(e.description);
	}finally{
		
	}
}

//gets the first and last paragraph index of a section and returns it as an array
function getSectionParaIndexLib(oSection)
{
	try{
		var iFirstParaIndex = oSection.firstParaIndex; // assign the first paragraph index of a section to iFirstParaIndex
		var iLastParaIndex = oSection.lastParaIndex; // assign the last paragraph index of a section to iLastParaIndex
		var aParaIndex = new Array(iFirstParaIndex,iLastParaIndex);		
		return aParaIndex;
	}catch(e)
	{
		alert(e.description);
	}finally{
		
	}
}

/*
	Checks if data passed in is valid
	i.e. not null, undefined or empty string
 */
function isInputValid(vInput)
{
	try{
		bTrue = true;
		
		if(vInput===""||typeof(vInput)==="undefined"||vInput===null)
			bTrue = false;
		
		return bTrue;		
	}catch(e)
	{
		alert(e.description);
	}
}

//Gets all section srrounding the section passed in
function getOuterSections(sSection,oDoc)
{
	try
	{
		if(isInputValid(sSection))
		{
			var aOuterSections = new Array();
			//iParaIndex = oDoc.curParaIndex();
			if (oDoc.sectionByName(sSection))
			{
				var iParaIndex = oDoc.sectionByName(sSection).firstParaIndex;
				var iLastParaIndex = oDoc.sectionByName(sSection).lastParaIndex;
				
				for (var i = 1; i <= oDoc.sectionCount; i++)
				{
					var oSection = oDoc.section (i);

					if (oSection.firstParaIndex <= iParaIndex && oSection.lastParaIndex >= iLastParaIndex && oSection.label!="" && oSection.label!=sSection)
					{
						aOuterSections[aOuterSections.length] = oSection.Label;
					}
				}
			}
		}
		return aOuterSections;
	}catch(e)
	{
		alert(e);
	}
}

function buildTreeView(aOuterSections,oDoc)
{
	try{
		if(isInputValid(aOuterSections))
		{
			var sHTMLStr = "";
			for(var i=aOuterSections.length;i>=0;i--)
			{
				var oOuterSection = aOuterSections[i];
				if(!isInputValid(oOuterSection))
				{
					continue;
				}else{
					
					
					var sOuterSection = oOuterSection.label;
					if(sHTMLStr=="")
					{
						sHTMLStr = "<UL><LI>"+sOuterSection+"</LI></UL>";
					}else{
						sHTMLStr = "<UL><LI>"+sOuterSection+"</LI>"+sHTMLStr+"</UL>";
					}
					// = oOuterSection;
					/*var sOuterSectionCtype = oOuterSection.propGet("CTYPE");
					if(sOuterSectionCtype=="NOTECONTROL"||sOuterSectionCtype=="SUBNOTECONTROL"||sOuterSectionCtype=="EXPANDCOLLAPSE"||sOuterSectionCtype=="SUBNOTECONTROLGROUP"||sOuterSectionCtype=="EXPANDCOLLAPSECOMPANY3RDYEAR")
					{
						aSection[aSection.length]=oOuterSection;
						//Add the other section within oOuterSection
						var aReturnSubSection = getSectionInSectionLib(oOuterSection.label,oDoc);
						//Remoe all sections without a label
						if(validateCharString(aReturnSubSection))
						{
							for(var i=0;i<aReturnSubSection.length;i++)
							{
								var oReturnedSection = aReturnSubSection[i];
								var sReturnedSection = oReturnedSection.label;
								if(validateCharString(sReturnedSection))
									aSection[aSection.length] = oReturnedSection; 
							}
						}
						break;
					}*/
				}
			}
		}
		return sHTMLStr;
	}catch(e)
	{
		alert(e.description);
	}finally{
		
	}
}

//Build a treeview based on section passed in
function buildTreeViewEx(sSection,aSubSections,oDoc)
{
	try{
		if(isInputValid(aSubSections) && isInputValid(sSection))
		{
			var oSection = oDoc.sectionByName(sSection);
			if(oSection)
			{
				var sMainSectionId = "S"+oSection.index;
				var oContainer = document.getElementById("MainContentContainer");
				for (var i=0;i<aSubSections.length;i++)
				{
					var oSubSection = aSubSections[i];
					if (oSubSection)
					{
						if(oContainer && oContainer.children.length==0)
						{
							var oParentNode = document.createElement("UL");
							oParentNode.setAttribute("id",sMainSectionId);
							var oChildNode = document.createElement("LI");
							var oTextnode = document.createTextNode(sSection);
							oChildNode.appendChild(oTextnode);
							oParentNode.appendChild(oChildNode);
							oContainer.appendChild(oParentNode);							
						}else{
							
						}
					}
				}
			}
		}
	}catch(e)
	{
		alert(e.description);
	}finally{
		
	}	
}