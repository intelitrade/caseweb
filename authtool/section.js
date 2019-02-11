function getSectionTitle(sSection)
{
	try{
		var aResult = [];
		var oSection = oDoc.sectionByName(sSection);
		var sSectionName = "";
		if(oSection && oSection.propExists(CSECTIONCONTROL))
		{
			sSectionName = getSectionName(oDoc, sSection);
			if (validateCharString(sSectionName) && sSectionName != "Section name") {
				//return sSectionName;
			}else{
				//get the family tree of the section and start going up the tree to get the name
				//this might not be the case with content that has just been added
				var aOuterSections = getSectionFamilyTreeLib(sSection,oDoc);
				if(validateCharString(aOuterSections))
				{
					for(var i=aOuterSections.length;i>=0;i--)
					{
						sSection = aOuterSections[i];
						sSectionName = getSectionTitle(sSection);
						if (validateCharString(sSectionName) && sSectionName != "Section name") {
							break;//return sSectionName;
						}
					}
				}
			}
		}
		var sHeaderCell = getHeaderCellInSection(sSection,sSectionName);
		//Get the cell with the section title
		return aResult[aResult.length] = [sSectionName,sHeaderCell];
	}catch(e)
	{
		logError(e);
	}finally{
		oSection = null;
		oCircleList = null;
		oCirlce = null;
		aOuterSections = null;
	}
}

function getHeaderCellInSection(sSection,sSectionName)
{
	try{
		var aTable = getTableinSection(sSection,oDoc);
		var sCellName = "";
		if(validateCharString(aTable))
		{
			for(i=0;i<aTable.length;i++)
			{
				var sTable = aTable[i];
				var sCellTempName = sTable+".HEADER";
				var oCell = oDoc.cell(sCellTempName);
				if(oCell && oCell.value===sSectionName)
				{
					sCellName = sCellTempName;
					break;
				}
			}
		}
		return sCellName;
	}catch(e)
	{
		logError(e);
	}finally{
		oCell = null;
	}
}

function getClosestSectionWithCtype(sSection)
{
	try{
		//get the family tree of the section and start going up the tree to get the name
		//this might not be the case with content that has just been added
		var sSectionName = getSectionName(oDoc, sSection);
		if (validateCharString(sSectionName) && sSectionName != "Section name") {
			//return sSectionName;
		}else{
			var aOuterSections = getSectionFamilyTreeLib(sSection,oDoc);
			if(validateCharString(aOuterSections))
			{
				for(var i=aOuterSections.length;i>=0;i--)
				{
					sSection = aOuterSections[i];
					sSectionName = getSectionTitle(sSection);
					if (validateCharString(sSectionName) && sSectionName != "Section name")
					{
						break;
					}
				}
			}
		}
		return sSectionName; 			
	}catch(e)
	{
		logError(e);
	}finally{
		aOuterSections = null;
	}
}

function getMainSectionHeaderName()
{
	try{
		var sSectionName = "";
		//Check if the section is a notecontrol table
		var oSection = oDoc.sectionByName(sClosestSection);
		if(oSection.propExists("CTYPE")==1 && oSection.propGet("CTYPE")!="NOTECONTROL")
		{
			var aOuterSections = getSectionFamilyTreeLib(sClosestSection,oDoc);
			for(var i=0;i<aOuterSections.length;i++)
			{
				var sSection = aOuterSections[i];
				var oNoteControlSection = oDoc.sectionByName(sSection);
				if(oNoteControlSection.propExists("CTYPE")==1 && oNoteControlSection.propGet("CTYPE")=="NOTECONTROL")
				{
					sSectionName = getSectionName(oDoc,sSection);
					break;
				}
			}
		}else{
			sSectionName = getSectionName(oDoc,sClosestSection);
		}
		return sSectionName;
	}catch(e)
	{
		logError(e);
	}finally{
		
	}
}

function getSubSectionName(sSection)
{
	try{
		//debugger;
		//debugger;
		var sSectionLabel="";
		if(validateCharString(sSection))
		{
			var oSection = oDoc.sectionByName(sSection);
			sSectionLabel = sSection;
		}
		else
		{
			var oSection = oDoc.sectionByName(sClosestSection);
			sSectionLabel = sClosestSection;
		}
		var sSectionName = "";
		if(oSection)
		{
			var sCtypeVal = oSection.propGet("CTYPE");
			if(sCtypeVal=="NOTECONTROL"||sCtypeVal=="SUBNOTECONTROL"||sCtypeVal=="EXPANDCOLLAPSE"||sCtypeVal=="SUBNOTECONTROLGROUP"||sCtypeVal=="EXPANDCOLLAPSECOMPANY3RDYEAR")
			{					
				sSectionName = getSectionName(oDoc,sSectionLabel);
			}
			else if(sCtypeVal=="SUMMARYTABLE"||sCtypeVal=="STD6COLUMNTABLE"||sCtypeVal=="RECONTABLE"||sCtypeVal=="SUMMARYTABLEGROUP"||sCtypeVal=="HIDDENTABLEWHICHPULLSTOBS"||sCtypeVal=="RADIOBUTTONTABLE"||sCtypeVal=="GUIDANCETABLE"||sCtypeVal=="DEPMETHODSANDUSEFULLLIFETYPE1")
			{
				//Get the sections sort group
				var sSortGroup = oSection.sortGroup;
				var sParentSection = getParentSection(oDoc,"",sSectionLabel);
				sSectionName = getSubSectionName(sParentSection);
			}				
		}
		return sSectionName;
	}catch(e)
	{
		logError(e);
	}finally{
		
	}
}

function updateSectionHeader(oElement)
{
	try{
		//debugger;
		//debugger;
		var sSection = oElement.getAttribute("sectionlabel");
		var aTable = getTableinSection(sSection,oDoc);
		var sCellName = "";
		if(validateCharString(aTable))
		{
			for(i=0;i<aTable.length;i++)
			{
				var sTable = aTable[i];
				var sCellTempName = sTable+".HEADER";
				var oCell = oDoc.cell(sCellTempName);
				if(oCell)// && oCell.value===sSectionName)
				{
					oCell.value = oElement.value;
					oDoc.recalculate(0);
					break;
				}
			}
		}			
	}catch(e)
	{
		logError(e);
	}finally{
		
	}
}

function updateTextSection(oElement)
{
	try{
		if(oElement.tagName=="SPAN" && oElement.getAttribute("paragraphno")!="")
		{
			var iParaNo = oElement.getAttribute("paragraphno");
			var sChildText = oElement.innerText;
			var oPara = oDoc.para(iParaNo);
			if(oPara){
				oPara.replaceText(0, (oPara.textLength()-1), sChildText);
			}
		}
		oDoc.recalculate(0);
	}catch(e)
	{
		logError(e);
	}finally{
		oElement = null;
	}
}