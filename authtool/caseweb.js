var CCOLTYPE = "CCOLTYPE";
var CROWTYPE = "CROWTYPE";
var CROWID = "CROWID"
//CM 27 May 2011
var HORIZONTAL_NOTETABLE8 = "N21";//Horizontal Note table 8

//Column custom properties
var CALC_COL		= "CA"; // Calculation column
var SPACE_COL		= "CS"; // Space column
var DESC_COL		= "CD"; // Description column
var VARIANCE_COL	= "CV"; // Variance column
var TOTAL_COL		= "CT"; // Total column
var HIDDEN_COL		= "CC"; // Hidden (controls) column
var MAP_COL		= "CM"; // Map Number column -- also the link to the Note
var NOTEREF_COL		= "CN"; // Note reference column
var PERCENT_COL		= "PC"; // Percentage Column
var LS_COL		= "LS"; // Lead sheet column
var PRINT_CONT_COL	= "CP"; // Print control column
var ST_REF_COL		= "ST"; // Statement reference column
var CTRLCELLCOL		= "CR"; // Column holding control cells
var ANNOTATION_COL	= "AN";	// Annotations column
var PAGENO_COL		= "PG"
var CACCBASIS_COL	= "CACCBASIS"//Basis of accounting column
var PYC_COL	= "PYC"//Company prior year column
var AYC_COL	="AYC"//Company current year column
var PYG_COL	= "PYG"
var AYG_COL	= "AYG"
var PYG2_COL	= "PYG2" // Second comparative - group
var PYC2_COL	= "PYC2" // second comparative - company

//Row custom properties values
var CONTROL_ROW			= "RH"; // Control row
var HEADING_ROW			= "D1"; // Heading row
var SUBHEADING_ROW		= "D2"; // Subheading row
var CALC1_ROW			= "C1"; // Calculation row  [grp]	->	grp(c1,ayg,entity(groupid,rc(-4)))
var CALC2_ROW			= "C2"; // Calculation row  [-grp]	->	-grp(c1,ayg,entity(groupid,rc(-4)))
var CALC3_ROW			= "C3"; // Calculation row [grpent,1]	->	grpent(c1,ayg,entity(groupid,rc(-4)),1)
var CALC4_ROW			= "C4"; // Calculation row [grpent,-1]	->	grpent(c1,ayg,entity(groupid,rc(-4)),-1)
var CALC5_ROW			= "C5"; // Cell reference calculation row / Multiple calculation row
var CALC6_ROW			= "C6"; // [grp] with Description based on map col less last 4 characters used in PPEV recon note
var CALC7_ROW			= "C7"; // [grp] with additional terms and conditions paragraph below
var CALC8_ROW			= "C8"; // pos of grp calcultion
var CALC9_ROW			= "C9"; // pos of -grp calculation
var CALC10_ROW			= "C0"; // Movement calculation - PY - CY
var CALCB_ROW			= "CB"; // PY value pulls through to the CY col. PY col is input
var CALCC_ROW			= "CC"; // Movement calculation - PY - CY -- Negative
var INPUT_ROW			= "I1"; // Input row
var TEXTONLY_ROW		= "I2";	// Text only row - skips if row above is skipped
var TEXTCALC1_ROW		= "I3"; // Input row with opening balance being last years total
var INPUTPERCENT_ROW		= "I4"; // Input row with percentage columns
var INPUTROLLFORWARD_ROW	= "I5"; // Input row roll forward to PY
var INPUTDESCNOT_ROW		= "I6";	// Input row, description columns not input
var INPUTBULLET_ROW		= "I7"; // Input row with bullet, description pulls through from Map number
var INPUTTOTAL_ROW		= "I8"; // Input row with last column being a total of other 3 columns
var INPUTANDTEXT_ROW		= "I9"; // Input row with additional paragraph input text
//I10 needs to be added it is an input row with the cells having 2 decimal places
var ACTCALC1_ROW		= "A1"; // Calculation row pulling through from account numbers
var ACTCALC2_ROW		= "A2"; // Negative Calculation row pulling through from account numbers
var SUBTOTAL_ROW		= "S1"; // Subtotal row
var THINLINE_ROW		= "L1"; // Thin line row
var THINKLINE_ROW		= "L2"; // Thick line row
var TOTAL_ROW			= "T1"; // Total row
var LINKTOTAL_ROW		= "T2"; // Total row with linkage
var LINKTOTALSKIP_ROW		= "T3"; // Total row with linkage --Always skipped and hidden
var LINKSUBTOTAL_ROW		= "T4"; // Total row based on row position in other tables
var YEARHEADER_ROW		= "RY"; // Year heading row
var NOTE_ROW			= "RN"; // Note linkage row
var PAGEBREAK_ROW		= "RP"; // Page break row
var BALCHK_ROW			= "BL";	// Balance check row
var CHEADDEFAULTPRINT		= "CHEADDEFAULTPRINT"
var CHEADSKIPDEFAULT		= "CHEADSKIPDEFAULT"
var CACCPOLLINK			= "CACCPOLLINK" //sets which accouting policies are associated with this note

// Table custom properties
var GENERIC_TABLE		= "G2"; // Generic table
var GENERIC_TABLE_SCHED		= "G5"; // Generic schedules table
var CONTROL_TABLE		= "PC"; // Controls table
var SECTIONHEAD_TABLE		= "H1"; // section Header table
var SECTIONSUBHEAD_TABLE	= "H2"; // section Header table
var BS_TABLE			= "B1"; // Balance sheet table
var IS_TABLE			= "I1"; // Income statemment table
var DETIS_TABLE			= "D1" // Detailed Income Statement table
var DETIS_SUBTABLE		= "D2" // Detailed income statement subtable
var CF_TABLE			= "C1"; // Cash flow statement table
var EQUITY_TABLE		= "E1"; // Statement of changes in equity
var FARM_TABLE			= "F1"; // Farming table
var NOTECONTROL_TABLE		= "N1"; // Note number / control table
var NOTE1_TABLE			= "N2"; // Note type 1 table - Standard note table
var NOTE2_TABLE			= "N3"; // Note type 2 table - Note Total table
var NOTE3_TABLE			= "N4"; // Note type 3 table - balance check
var INVEST_NOTE_TABLE		= "N5"; // Note Investment type table - used in investment to subs, JV's & Associates
var NOTE9_TABLE			= "N9"; // Note type 9 table - carrying value table
var HORIZONTAL_NOTE_TABLE	= "N10"; // Horizontal Note table - used in horizontal notes
var NOTE_HIDE_TABLE		= "N11"; // Hidden note table used for linking
var NOTE_TOTAL3_TABLE		= "N12"; // as note total  
var CDIRTABLE			= "CDIRTABLE" //Custom property that indicates if directors table to be sorted

//table uses
var MODTABLE			= "MT";	// Table is modifiable and as such has the various controls available, e.g sort rows
var STATEMENTTABLE		= "ST"; // Statement table e.g. Balance sheet
var NOTETABLE			= "NO"; // Note Table
var HEADERCTRL			= "HC"; //Header control table - The following table hold controls associated with the header 

var HEADING_TABLE		= "TH"; //Heading table
var FOOTER_TABLE		= "FT"; // Footer table

var INDEX_TABLE			= "IT" // Index table	


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

//Jump to different place in CaseView document
function gotoSection(oElement)
{
	try{
		//debugger;
		//debugger;
		var sLabel = "";
		if(isInputValid(oDoc))
			oCaseViewDocument = oDoc;
			
		if(!oElement)	
			oElement = event.srcElement;

		if(oElement && isInputValid(oElement.getAttribute("jumpcode")))
			oDoc.gotoSection(oElement.getAttribute("jumpcode"));
		
		//oCaseViewDocument.gotoSection(oElement.getAttribute("jumpcode"));
		//oElement.scrollIntoView(true);
	}catch(e)
	{
		alert(e.description);
	}finally{
		oElement = null;
	}
}

//Build a treeview based on section passed in
function buildTreeViewEx(sSectionLabel,oDoc)//,oProgBar)
{
	try{
		var CTABLETYPE = "CTABLETYPE";
		var sColor = "";
		if(isInputValid(sSectionLabel))
		{
			//var oContainer = document.getElementById("MainContentContainer");
			var oContainer = document.getElementById("MainContentContainer");
			var oSection = oDoc.sectionByName(sSectionLabel); 
			
			if(oSection)
			{
				if(oContainer.children.length==0)
				{				
					var sSectionTitle = getSectionName(oDoc,sSectionLabel);
					var sMainSectionId = "S"+oSection.index;
					var oParentNode = document.createElement("UL");
					var oParentListItemNode = document.createElement("LI");
					//var oTextnode = document.createTextNode(sSectionLabel);
					var oTextnode = document.createTextNode(sSectionTitle);
					oParentListItemNode.appendChild(oTextnode);
					oParentNode.setAttribute("id",sMainSectionId);
					//oParentListItemNode.setAttribute("style","background-color:#F5DEB3");
					oParentListItemNode.style.backgroundColor = "#F5DEB3";
					oParentListItemNode.style.fontWeight = "bold"
					oParentListItemNode.style.padding="10px";
					
					oParentListItemNode.setAttribute("ismainsection","true");
					
					oParentNode.appendChild(oParentListItemNode);				
					oContainer.appendChild(oParentNode);
					oParentNode.setAttribute("id",sMainSectionId);
					oParentListItemNode.setAttribute("jumpcode",sSectionLabel);
					oParentListItemNode.setAttribute("onclick","gotoSection(this);highlightElement(this)");
					oParentListItemNode.onclick = function() { gotoSection();highlightElement();  };					
					oParentNode.setAttribute("title","Component: Section\nSection name: "+sSectionTitle+"\nSection label: "+sSectionLabel+"\nSection index: "+oSection.index()+"\nVersion: "+oSection.propGet("CVERSION"));
					
					if(document.getElementById("docmapheading"))
						document.getElementById("docmapheading").innerHTML = "Edit options<br>"+sSectionTitle;

					var iSectionSkipCond = oSection.evaluateSkip();
					var iSectionHideCond = oSection.evaluateHide();
					
					if(iSectionSkipCond===1 || iSectionHideCond==1)
						sColor = '#0000FF';
					else
						sColor = '#000000';	
						
					oParentListItemNode.style.color = sColor;

				}
				var aSubSection = getSubsections(sSectionLabel,oDoc)//,iSectionIndex);
				if(isInputValid(aSubSection))
				{
					//oProgBar.setMessage(sSectionTitle);
					for(var i=0;i<aSubSection.length;i++)
					{
							
						var oSubSection = aSubSection[i];
						if(isInputValid(oSubSection))
						{
							var iSubSectionId = "S"+oSubSection.index;
							if(document.getElementById(iSubSectionId))
								continue;
							
							var sSubSection = oSubSection.label;
							var aOuterSections = getOuterSections(sSubSection,oDoc);
							var sCtypeVal = oSubSection.propGet("CTYPE");
							if(isInputValid(aOuterSections))
							{
								for(var j=aOuterSections.length;j>=0;j--)
								{
									var sOuterSection = aOuterSections[j];
									if(!isInputValid(sOuterSection))
										continue;
									
									var oOuterSection = oDoc.sectionByName(sOuterSection);
									var sHTMLParentElementId = "S"+oOuterSection.index;
									var oHTMLParentElement = document.getElementById(sHTMLParentElementId);
									if(oOuterSection && oHTMLParentElement)
									{
										var sSectionTitle = getSectionName(oDoc,sSubSection);
										var oChildNode = document.createElement("UL");
										var oChildListItemNode = document.createElement("LI");
										var oChildTextnode = document.createTextNode(sSectionTitle);
										oChildNode.setAttribute("id",iSubSectionId);
										oChildListItemNode.appendChild(oChildTextnode);
										oChildNode.appendChild(oChildListItemNode);
										oHTMLParentElement.appendChild(oChildNode);
										
										var iSectionSkipCond = oSubSection.evaluateSkip();
										var iSectionHideCond = oSubSection.evaluateHide();
										
										if(iSectionSkipCond===1 || iSectionHideCond==1)
											sColor = '#0000FF';
										else
											sColor = '#000000';
										
										
										if(sCtypeVal=="NOTECONTROL"||sCtypeVal=="SUBNOTECONTROL"||sCtypeVal=="EXPANDCOLLAPSE"||sCtypeVal=="SUBNOTECONTROLGROUP"||sCtypeVal=="EXPANDCOLLAPSECOMPANY3RDYEAR")
										{
											oChildListItemNode.setAttribute("id","HEADER_"+iSubSectionId);
											oChildListItemNode.setAttribute("isheader","true");
											oChildListItemNode.setAttribute("jumpcode",sSubSection);
											oChildListItemNode.setAttribute("onclick","gotoSection(this);highlightElement(this)");
											oChildListItemNode.onclick = function() { gotoSection();highlightElement();  };
	
											oChildNode.style.color=sColor;
											oChildNode.setAttribute("title","Component: Section\nSection name: "+sSectionTitle+"\nSection label: "+sSubSection+"\nSection index: "+oSubSection.index()+"\nVersion: "+oSection.propGet("CVERSION"));
											oChildListItemNode.style.backgroundColor = "#F5DEB3";
											oChildListItemNode.style.fontWeight = "bold"
											oChildListItemNode.style.padding="10px";	
										}
										
										if(sCtypeVal=="SUMMARYTABLE"||sCtypeVal=="STD6COLUMNTABLE"||sCtypeVal=="RECONTABLE"||sCtypeVal=="SUMMARYTABLEGROUP"||sCtypeVal=="HIDDENTABLEWHICHPULLSTOBS"||sCtypeVal=="RADIOBUTTONTABLE"||sCtypeVal=="GUIDANCETABLE"||sCtypeVal=="DEPMETHODSANDUSEFULLLIFETYPE1")
										{
											//Get table in section
											var sStr = getTableData(oDoc,oSubSection);
											if(sStr=="")
												continue;
											
											oChildNode.innerHTML = sStr;
											oChildNode.setAttribute("title","Component: Section\nSection name: "+sSectionTitle+"\nSection label: "+sSubSection+"\nSection index: "+oSubSection.index()+"\nVersion: "+oSection.propGet("CVERSION"));
											//var olastChild = oChildNode.lastChild;
											//olastChild.style.borderBottom="1px dotted";
										}
										
										if(sCtypeVal=="PARAGRAPH")
										{
											var sStr = getParaData(oDoc,oSubSection);	
											oChildNode.innerHTML = sStr;
											oChildNode.setAttribute("title","Component: Section\nSection name: "+sSectionTitle+"\nSection label: "+"\nSection index: "+oSubSection.index()+"\nVersion: "+oSection.propGet("CVERSION"));
										}		
										break;
									}
								}
								buildTreeViewEx(sSubSection,oDoc);//,oProgBar);
							}							
						}
					}
				}
			}
		}
	}catch(e)
	{
		alert(e.description);
	}finally{
		//Clear all objects
		oChildNode = null;
		oChildListItemNode = null;
		oHTMLParentElement = null;
		oContainer = null;
		oSection = null;
		oTextnode =  null;
		oParentListItemNode =  null;
		oParentNode =  null;
		oDoc = null;
	}	
}

function getSkipCondIndicator(oSection)
{
	var iSectionSkipCond = oSection.evaluateSkip();
	if(iSectionSkipCond===1)
		var sColor = '#0000FF';
	else
		var sColor = '#000000';	

	return sColor;
}				


function getTableTypeDesc(sTableType)
{
	try{
		var sDescription = "";

		switch(sTableType)
		{
			case GENERIC_TABLE:
				sDescription = "Generic table";
				break;
			case GENERIC_TABLE_SCHED:
				sDescription = "Generic schedules table";
				break;
			case CONTROL_TABLE:
				sDescription = "Controls table";
				break;
			case SECTIONHEAD_TABLE:
				sDescription = "section Header table";
				break;			
			case SECTIONSUBHEAD_TABLE:
				sDescription = "section Header table";
				break;			
			case BS_TABLE:
				sDescription = "Balance sheet table";
				break;			
			case IS_TABLE:
				sDescription = "Income statemment table";
				break;			
			case DETIS_TABLE:
				sDescription = "Detailed Income Statement table";
				break;
			case DETIS_SUBTABLE	:
				sDescription = "Detailed income statement subtable";
				break;
			case CF_TABLE:
				sDescription = "Cash flow statement table";
				break;
			case EQUITY_TABLE:
				sDescription = "Statement of changes in equity";
				break;
			case FARM_TABLE:
				sDescription = "Farming table";
				break;
			case NOTECONTROL_TABLE:
				sDescription = "Note number / control table";
				break;
			case NOTE1_TABLE:
				sDescription = "Note type 1 table - Standard note table";
				break;
			case "6N2":
			case NOTE2_TABLE:
				sDescription = "Note type 2 table - Note Total table";
				break;
			case NOTE3_TABLE:
				sDescription = "Note type 3 table - balance check";
				break;
			case INVEST_NOTE_TABLE:
				sDescription = "Note Investment type table - used in investment to subs, JV's & Associates";
				break;
			case "6N9":
			case NOTE9_TABLE:
				sDescription = "Note type 9 table - carrying value table";
				break;
			case HORIZONTAL_NOTE_TABLE:
				sDescription = "Horizontal Note table - used in horizontal notes";
				break;
			case NOTE_HIDE_TABLE:
				sDescription = "Hidden note table used for linking";
				break;
			case NOTE_TOTAL3_TABLE:
				sDescription = "Note total";
				break;
			case CDIRTABLE:
				sDescription = "Custom property that indicates if directors table to be sorted";
				break;
			//table uses
			case MODTABLE:
				sDescription = "Table is modifiable and as such has the various controls available, e.g sort rows";
				break;
			case STATEMENTTABLE:
				sDescription = "Statement table e.g. Balance sheet";
				break;
			case NOTETABLE:
				sDescription = "Note Table";
				break;
			case HEADERCTRL:
				sDescription = "Header control table - The following table hold controls associated with the header";
				break;
			case HEADING_TABLE:
				sDescription = "Heading table";
				break;
			case FOOTER_TABLE:
				sDescription = "Footer table";
				break;
			case INDEX_TABLE:
				sDescription = "Index table";
				break;
		}
		return sDescription;
	}catch(e)
	{
		alert(e.description);
	}finally{
		
	}
}

function getRowTypeDesc(sRowType)
{
	try{
		var sDescription = "";

		switch(sRowType)
		{
			case CONTROL_ROW:
				sDescription = "Control row";
				break;
			case HEADING_ROW:
				sDescription = "Generic schedules table";
				break;
			case SUBHEADING_ROW:
				sDescription = "Subheading row";
				break;
			case CALC1_ROW:
				sDescription = "Calculation row  [grp]	->	grp(c1,ayg,entity(groupid,rc(-4)))";
				break;			
			case CALC2_ROW:
				sDescription = "Calculation row  [-grp]	->	-grp(c1,ayg,entity(groupid,rc(-4)))";
				break;			
			case CALC3_ROW:
				sDescription = "Calculation row [grpent,1]	->	grpent(c1,ayg,entity(groupid,rc(-4)),1)";
				break;			
			case CALC4_ROW:
				sDescription = "Calculation row [grpent,-1]	->	grpent(c1,ayg,entity(groupid,rc(-4)),-1)";
				break;			
			case CALC5_ROW:
				sDescription = "Cell reference calculation row / Multiple calculation row";
				break;
			case CALC6_ROW	:
				sDescription = "[grp] with Description based on map col less last 4 characters used in PPEV recon note";
				break;
			case CALC7_ROW:
				sDescription = "[grp] with additional terms and conditions paragraph below";
				break;
			case CALC8_ROW:
				sDescription = "pos of grp calcultion";
				break;
			case CALC9_ROW:
				sDescription = "pos of -grp calculation";
				break;
			case CALC10_ROW:
				sDescription = "Movement calculation - PY - CY";
				break;
			case CALCB_ROW:
				sDescription = "PY value pulls through to the CY col. PY col is input";
				break;
			case CALCC_ROW:
				sDescription = "Movement calculation - PY - CY -- Negative";
				break;			
			case INPUT_ROW:
				sDescription = "Input row";
				break;
			case TEXTONLY_ROW:
				sDescription = "Text only row - skips if row above is skipped";
				break;
			case TEXTCALC1_ROW:
				sDescription = "Input row with opening balance being last years total";
				break;
			case INPUTPERCENT_ROW:
				sDescription = "Input row with percentage columns";
				break;			
			case INPUTROLLFORWARD_ROW:
				sDescription = "Input row roll forward to PY";
				break;
			case INPUTDESCNOT_ROW:
				sDescription = "Input row, description columns not input";
				break;
			case INPUTBULLET_ROW:
				sDescription = "Input row with bullet, description pulls through from Map number";
				break;
			case INPUTTOTAL_ROW:
				sDescription = "Input row with last column being a total of other 3 columns";
				break;
			case INPUTANDTEXT_ROW:
				sDescription = "Input row with additional paragraph input text";
				break;
			//table uses
			case ACTCALC1_ROW:
				sDescription = "Calculation row pulling through from account numbers";
				break;
			case ACTCALC2_ROW:
				sDescription = "Negative Calculation row pulling through from account numbers";
				break;
			case SUBTOTAL_ROW:
				sDescription = "Subtotal row";
				break;
			case THINLINE_ROW:
				sDescription = "Thin line row";
				break;
			case THINKLINE_ROW:
				sDescription = "Thick line row";
				break;
			case TOTAL_ROW:
				sDescription = "Total row";
				break;
			case LINKTOTAL_ROW:
				sDescription = "Total row with linkage";
				break;
			case LINKSUBTOTAL_ROW:
				sDescription = "Total row based on row position in other tables";
				break;				
			case LINKTOTALSKIP_ROW:
				sDescription = "Total row with linkage --Always skipped and hidden";
				break;
			case YEARHEADER_ROW:
				sDescription = "Year heading row";
				break;
			case NOTE_ROW:
				sDescription = "Note linkage row";
				break;
			case PAGEBREAK_ROW:
				sDescription = "Page break row";
				break;
			case BALCHK_ROW:
				sDescription = "Balance check row";
				break;
			case CHEADDEFAULTPRINT:
				sDescription = "";
				break;
			case CHEADSKIPDEFAULT:
				sDescription = "";
				break;
			case CACCPOLLINK:
				sDescription = "sets which accouting policies are associated with this note";
				break;			
			}
		return sDescription;
	}catch(e)
	{
		alert(e.description);
	}finally{
		
	}
}

function getTableData(oDoc,oSection)
{
	try{
		var CTABLETYPE = "CTABLETYPE";
		var sStr = "";
		//Show whether the section is being skipped or not
		var iSectionSkipCond = oSection.evaluateSkip();
		var sSection = oSection.label;
		var sColor = getSkipCondIndicator(oSection);
		var aTable = getTableinSection(sSection,oDoc);
		if(isInputValid(aTable))
		{
			var sTable = aTable[0];
			var oTable = oDoc.tableByName(sTable);
			if(oTable)
			{
				var sTableType = oTable.propGet(CTABLETYPE);
				
				//get table type description
				var sTableTypeDesc = getTableTypeDesc(sTableType);
				
				var sTableStr = getTableLineItems(oTable,sTableType,sSection,iSectionSkipCond,oDoc);
				if(isInputValid(sTableStr))
					sStr = "<li jumpcode='"+sSection+"' onclick='gotoSection(this);highlightElement(this);updatePreviewPane(this);' component='column' title='Component: Table row\nRow type: HEADING_ROW\nRow desc: Column heading row\nTable name: "+sTable+"\nTable type: "+sTableType+"\nTable desc: "+sTableTypeDesc+"' tablename='"+sTable+"'>[Column header row]</li><li style='color:"+sColor+";' jumpcode='"+sSection+"' onclick='gotoSection(this);highlightElement(this);updatePreviewPane(this);' component='mapcolumn' title='Component: Table row\nRow type: HEADING_ROW\nRow desc: Column mapping row\nTable name: "+sTable+"\nTable type: "+sTableType+"\nTable desc: "+sTableTypeDesc+"' tablename='"+sTable+"'>[Column mapping row]</li>"+sTableStr;	
			}
		}
		return sStr;
	}catch(e)
	{
		alert(e.description);
	}finally{
		oSection = null;
		aTable = null;
		oTable = null;
	}
}

function getParaData(oDoc,oSubSection)
{
	try{
		var sStr = "";
		var iFirstParaIndex = oSubSection.firstParaIndex;
		var sSubSection = oSubSection.label;
		var sCtypeVal = oSubSection.propGet("CTYPE");
		var oPara = oDoc.para(iFirstParaIndex);
		var sParaText = oPara.getText();
		var iSkipCond = oPara.evaluateSkip();
		var iHideCond = oPara.evaluateHide();
		var sParaGuid = oPara.propGet("GUID");
		if(iSkipCond===1 || iHideCond===1)
			var sColor = '#0000FF';
		else
			var sColor = '#000000';
		
		if(!isInputValid(sParaText))
			sParaText = "Paragraph text";
		else{
			var iTextLength = sParaText.length;
			if(iTextLength>50)
				sParaText = sParaText.substr(0,50)+"...";
		}
		//var sStr = "<ul><li component='inputtextsection' id='"+sSubSection+"' objecttype='section' jumpcode='"+sSubSection+"' onclick='gotoSection(this);highlightElement(this);highlightSection(this.jumpcode);updatePreviewPane(this);updateCurrentSelection(this);' guid='"+sParaGuid+"' style='background-color:#CCFFCC;color:"+sColor+";'>"+sParaText+"</li></ul>";
		sStr = "<li component='inputtextsection' id='"+sSubSection+"' objecttype='section' jumpcode='"+sSubSection+"' onclick='gotoSection(this);highlightElement(this);updatePreviewPane(this);updateCurrentSelection(this);' guid='"+sParaGuid+"' style='background-color:#CCFFCC;color:"+sColor+";' ctype='"+sCtypeVal+"' title='Component: Paragraph\nParagraph index: "+oPara.index+"'>"+sParaText+"</li>";	
		
		return sStr;
	}catch(e)
	{
		alert(e.description);
	}finally{
		
	}
}
function getSectionName(oDoc,sSection)
{
	try{
		
		var CONTROL_TABLE = "PC";
		var SECTIONHEAD_TABLE = "H1";
		var SECTIONSUBHEAD_TABLE = "H2";
		var CTABLETYPE = "CTABLETYPE";
		var sSectionName = "";
		//Get the table in the section
		var aTable = getTableinSection(sSection,oDoc,"");	  
		for (var i=0;i<aTable.length;i++)
		{
			var sTable = aTable[i];
			var oTable = oDoc.tableByName(sTable);
			var sTableType = oTable.propGet(CTABLETYPE);
			//Get control table
			//if(sTableType==CONTROL_TABLE | sTableType== SECTIONSUBHEAD_TABLE){
			if(sTableType == CONTROL_TABLE || sTableType == SECTIONSUBHEAD_TABLE || sTableType == SECTIONSUBHEAD_TABLE|| sTableType == "6H2" || sTableType == "TH"){
				//var sTable = aTable[i];
				//Get the section name
				var oCell = oDoc.cell(sTable+".HEADER");
				sSectionName = oDoc.cell(sTable+".HEADER").value;
				break;
			}else{
				//If a control table is not found then return the default name section name
				sSectionName = "Section name";
			}
		} 
		if(sSectionName == "")
			sSectionName = "Section name";
		
		return sSectionName;
	}catch(e)
	{
		alert(e.description);
	}
}

//returns all the tables in a section
function getTableinSection(sSection,oDoc,iSection)
{
	try{
		var aTables = new Array();
		var sTableName;
		var sTableCheck ="";
		if (oDoc)
		{
			if ((iSection>0 && typeof(iSection)=="integer") || sSection=="")
			{
				var oSection = oDoc.section(iSection);	
			}else{
				var oSection = oDoc.sectionByName(sSection);
			}
		}
		else{
			if ((iSection>0 && typeof(iSection)=="integer") || sSection=="")
			{
				var oSection = document.section(sSection);
			}
			else
			{
				var oSection = document.sectionByName(sSection);
			}
		}
		//check if section exits
		if (oSection)
		{
			var iFirstSectIndex = oSection.firstparaIndex;
			var iLastSectIndex = oSection.lastparaIndex;
			for (var j=iFirstSectIndex;j<iLastSectIndex;j++)
			{
				if (oDoc)
				{
					var oTable = oDoc.tableByParaIndex(j);
				}
				else
				{
					var oTable = document.tableByParaIndex(j);
				}
				if (oTable)
				{
					sTableName = oTable.getLabel;
					if (sTableCheck != sTableName)
					{
						aTables[aTables.length] = sTableName;
						sTableCheck = sTableName;
						j = oTable.lastParaIndex - 1;
					}
				}
			}
		}
		return aTables;
	}catch(e){
		alert(e.description);
	}finally{
		oDoc = null;
		oSection = null;
		oTable = null;
		aTables = null;
	}
}

//Sets attributes on html dom elements
function addElementAttribute(sHTMLElement,sAttributeName,sAttributeValue)
{
	try{
		if(isInputValid(sHTMLElement) && isInputValid(sAttribute))
		{
			var oHTMLElement = document.getElementById(sHTMLElement);
			if(oHTMLElement)
			{
				oHTMLElement.setAttribute(sAttributeName,sAttributeValue);
			}
		}
	}catch(e)
	{
		alert(e.description);
	}finally{
		oHTMLElement = null;
	}
}

function createGuid(){
   return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {  
      var r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);  
      return v.toString(16);  
})}

function getTableLineItems(oTable,sTableType,sSectionLabel,iSectionSkipCond,oDoc)
{
	try{		
		var sString = "";
		var ssTable = "";
		//Check table type
		switch (sTableType)
		{
			case "6N8":	
			case "N3":
			case "N2X":
			case "S1":
			case "S3":
			case "N11": // Hidden note table used for linking//NOTE_HIDE_TABLE:
			case "6G2":
			case "G2":
			case "J1":
			case "6N9":		
			case "6N2":
				var iRows = oTable.nRows();
				var sTableName = oTable.getLabel();
				var oStartCell = oDoc.cell(sTableName+".START");
				var oEndCell = oDoc.cell(sTableName+".END");
				if(!oStartCell||!oEndCell)
				{
					var iStartRow = 1;
					var iEndRow = oTable.nRows();
				}
				else{	
					//Get Start & End Row
					var iStartRow = parseInt(oStartCell.value)+1;
					var iEndRow = parseInt(oEndCell.value);
				}

				//Get the description column
				var aDescCol = getColWithProp(CCOLTYPE,DESC_COL,oTable);
				var aMapCol = getColWithProp(CCOLTYPE,MAP_COL,oTable);
				var aCalcCol = getColWithProp(CCOLTYPE,CALC_COL);
				var sDescCol = aDescCol[0];	
				var sMapCol = aMapCol[0];				
				var iColumn = getIntFromColLabel(sDescCol);
				var sTableTypeDesc = getTableTypeDesc(sTableType);
				for(var iCurrentRowNumber=iStartRow;iCurrentRowNumber<=iEndRow;iCurrentRowNumber++)
				{				
					var oRow = oTable.getRow(iCurrentRowNumber);
					if(oRow.propGet(CROWTYPE)===CONTROL_ROW)
						continue;

					var iSkipCond = oRow.evaluateSkip();
					
					if(iSkipCond===1 || iSectionSkipCond===1)
						var sColor = '#0000FF';
					else
						var sColor = '#000000';
										
					//Get the row guid
					var sGuid = oRow.propGet("GUID");
					if(oRow && oRow.propExists("GUID")!=1){
						//generate temporary guid to the row to make it easy to access it
						var sGUIDID = createGuid();
						oRow.propSet("TEMPGUID") = sGUIDID;
					}
					var sRowType = oRow.propGet(CROWTYPE);
					var sRowTypeDesc = getRowTypeDesc(sRowType);
					
					if(sRowType===TEXTONLY_ROW)
					{
						//debugger;
						//debugger;
						var iTableCellFirstPara = oTable.cellFirstParaIndex(iCurrentRowNumber, iColumn);
						var iTableCellLastPara = oTable.cellLastParaIndex(iCurrentRowNumber, iColumn);
						var oPara = oDoc.para(iTableCellFirstPara);
						var sDesc = oPara.getText();
						
						if(!isInputValid(sDesc))
						{
							sDesc = "Paragraph text";
						}
						else{
							var iTextLength = sDesc.length;
							if(iTextLength>50)
								sDesc = sDesc.substr(0,50)+"...";						
						}
						
						if(isInputValid(sDesc))
						{
							if(sGUIDID!="")
							{
								sString = sString + "<li style='background-color:#CCFFCC;color:"+sColor+";' component='para' paraindex='"+oPara.index+"' jumpcode='"+sSectionLabel+"' onclick='gotoSection(this);highlightElement(this);updatePreviewPane(this);' guid='"+sGuid+"'  id='row_"+sGuid+"' tempguid='"+sGUIDID+"' tablename='"+sTableName+"' objecttype='row' title='Component: Table row\nRow type: "+sRowType+"\nRow type desc: "+sRowTypeDesc+"\nTable name: "+sTableName+"\nTable type: "+sTableType+"\nTable desc: "+sTableTypeDesc+"'><span>["+sDesc+"]</span></li>";								
							}else{
								sString = sString + "<li style='display:table-cell;background-color:#CCFFCC;color:"+sColor+";' component='para' paraindex='"+oPara.index+"' jumpcode='"+sSectionLabel+"' onclick='gotoSection(this);highlightElement(this);updatePreviewPane(this);' guid='"+sGuid+"'  id='row_"+sGuid+"' tablename='"+sTableName+"' objecttype='row' title='Component: Table row\nRow type: "+sRowType+"\nRow type desc: "+sRowTypeDesc+"\nTable name: "+sTableName+"\nTable type: "+sTableType+"\nTable desc: "+sTableTypeDesc+"'><span>["+sDesc+"]</span></li>";
							}
						}
					}else
					{
						var sDescCell = getCellFromTableCell(sTableName,iColumn,iCurrentRowNumber,oDoc)[0];
						var oDescCell = oDoc.cell(sDescCell);
						if(oDescCell)
						{
							var sDesc = oDescCell.value;
							if(sDesc==="BR:YR1:Y1:SIGN:RND:SUB"||sDesc==="BR:YR0:Y1:SIGN:RND:SUB|0"||!isInputValid(sDesc))
								continue;
							
							if(sGUIDID!="")
							{
								//Check if the cell is input or not							
								if (oDescCell.input===1)
								{
									sString = sString + "<li style='background-color:#FFFFC6;color:"+sColor+"' component='row' cellnumber='"+oDescCell.number+"' guid='"+sGuid+"' tempguid='"+sGUIDID+"' mapcolumn='"+sMapCol+"' tablename='"+sTableName+"'  jumpcode='"+sSectionLabel+"' onclick='gotoSection(this);highlightElement(this);updatePreviewPane(this);' id='row_"+sGuid+"' objecttype='row' title='Component: Table row\nRow type: "+sRowType+"\nRow type desc: "+sRowTypeDesc+"\nTable name: "+sTableName+"\nTable type: "+sTableType+"\nTable desc: "+sTableTypeDesc+"'><span>["+sDesc+"]</span></li>";								
								}else{
									sString = sString + "<li style='color:"+sColor+";' component='row' cellnumber='"+oDescCell.number+"' guid='"+sGuid+"' mapcolumn='"+sMapCol+"' tempguid='"+sGUIDID+"' tablename='"+sTableName+"' jumpcode='"+sSectionLabel+"' onclick='gotoSection(this);highlightElement(this);updatePreviewPane(this);' id='row_"+sGuid+"' objecttype='row' title='Component: Table row\nRow type: "+sRowType+"\nRow type desc: "+sRowTypeDesc+"\nTable name: "+sTableName+"\nTable type: "+sTableType+"\nTable desc: "+sTableTypeDesc+"'><span>["+sDesc+"]</span></li>";	
								}
							}else{
								//Check if the cell is input or not							
								if (oDescCell.input===1)
								{
									sString = sString + "<li style='background-color:#FFFFC6;color:"+sColor+";' component='row' cellnumber='"+oDescCell.number+"' guid='"+sGuid+"' mapcolumn='"+sMapCol+"' tablename='"+sTableName+"' jumpcode='"+sSectionLabel+"' onclick='gotoSection(this);highlightElement(this);updatePreviewPane(this);' id='row_"+sGuid+"' objecttype='row' title='Component: Table row\nRow type: "+sRowType+"\nRow type desc: "+sRowTypeDesc+"\nTable name: "+sTableName+"\nTable type: "+sTableType+"\nTable desc: "+sTableTypeDesc+"'><span>["+sDesc+"]</span></li>";								
								}else{
									sString = sString + "<li style='display:table-cell;color:"+sColor+";' component='row' cellnumber='"+oDescCell.number+"' guid='"+sGuid+"' mapcolumn='"+sMapCol+"' tablename='"+sTableName+"' jumpcode='"+sSectionLabel+"' onclick='gotoSection(this);highlightElement(this);updatePreviewPane(this);' id='row_"+sGuid+"' objecttype='row' title='Component: Table row\nRow type: "+sRowType+"\nRow type desc: "+sRowTypeDesc+"\nTable name: "+sTableName+"\nTable type: "+sTableType+"\nTable desc: "+sTableTypeDesc+"'><span>["+sDesc+"]</span></li>";	
								}								
							}
						}						
					}
				}
				if(iSectionSkipCond===1)
					var sColor = '#0000FF';
				else
					var sColor = '#000000';				
				
				sString = ssTable + sString;	
				break;
			default:
		}

		return sString;
	}catch(e)
	{
		alert(e.description);
	}finally{
		oDescCell = null;
		oPara = null;
		oCell = null;
		oStartCell = null;
		oEndCell = null;
		oTable = null;
	}
}	

//method to get a row number based on its type
function getRowWithProp(sProp,sValue,oTable)
{
	try
	{
		var aRows = new Array();
		var iRow = oTable.nRows();
		for (row=1;row<=iRow;row++)
		{
			var oRow = oTable.getRow(row);
			var sRowCType = oRow.propGet(sProp);//getProperty.getProp(sProp,oRow)
			if (sValue==sRowCType)
			{
				aRows[aRows.length] = row-1;
			}		
		}
		return aRows;
	}
	catch(e)
	{
	}	
}

//method to get a column based on its type
function getColWithProp(sProp,sValue,oTable)
{	
	try
	{
		var iCol = oTable.nColumns();
		var aCols = new Array()
		for ( var col=1;col<=iCol;col++)
		{
			var oCol = oTable.getColumn(col);
			var sColCType = oCol.propGet(sProp);//getProperty.getProp(sProp,oCol)
			if (sValue==sColCType)
			{
				aCols[aCols.length] = GetColnumber(col);
			}			
		}
		return aCols;
	}
	catch(e)
	{
	}
}

function GetColnumber(iCol)
{
	//A=65
	var iStart = 65
	if (iCol<=26)
	{
		var sCol=String.fromCharCode(64 + iCol*1)
	}
	if (iCol==26)
	{
		return sCol;
	}
	var iTableRepeats=iCol/26;
	if (iCol%26==0)
	{
		iTableRepeats -= 1
	}
	iTableRepeats =	Math.floor(iTableRepeats);
	if (iTableRepeats>0)
	{
		//Get the first alpha char in the col name
		var sColInit = String.fromCharCode(65+(iTableRepeats-1))
		//Get the second alpha char in the col name
		//get the amount of cols over 26 to remove from the calc
		var iExcess = (iTableRepeats)*26
		iCol = iCol -iExcess - 1
		sColSecond = String.fromCharCode(65 + (iCol*1))
		//concatenate
		sCol = sColInit + sColSecond
	}
	return sCol;
}

//Returns an array of cell names in a table cell.
function getCellFromTableCell(sTable,iColumn,iRow,oDoc)
{
	/*if (!oDoc)
	{
		var oDoc = document
	}*/

	var oTable = oDoc.tableByName(sTable)
	if (oTable)
	{
		var oTableCell = oTable.getCell(iColumn,iRow)
		if (oTableCell)
		{
			//create an array to store the cells in the table cell
			var aCells = new Array()
			//get the first and last paragraph of the table cell
			var iTableCellFirstParaIndex = oTable.cellFirstParaIndex(iRow,iColumn) 

			var iTableCellLastParaIndex = oTable.cellLastParaIndex(iRow,iColumn)

			for (var i=iTableCellFirstParaIndex;i<=iTableCellLastParaIndex;i++)
			{
				//get each paragraph and check if there is a cell on that paragraph
				var oPara = oDoc.para(i)
				if (oPara)
				{
					var iTextLength = oPara.textLength()
					var sTempCellName = ""
					for (var j=1;j<iTextLength;j++)
					{
						var oObj = oPara.getObjectAt(j)
						if(oObj && oObj.typeid==1)
						{
							var oCell = oObj.cell
							if (oCell && oCell.number != sTempCellName)
							{
								//add the cell to an array
								aCells[aCells.length] = oCell.number
								sTempCellName = oCell.number
							}
						}
					}
				}
			}
		}
	}
	return aCells
}

//return the equivalent integer value of a letter e.g. A = 1, B= 2 etc
function getIntFromColLabel(sCol)
{
	if (isInputValid(sCol))
	{
		var iString = sCol.length
		sCol = sCol.toUpperCase()
		if (iString>0)
		{
			if (iString>1)
			{
				var iCharCode = parseInt(sCol.charCodeAt(0)-64)*26
				var iCol = iCharCode+sCol.charCodeAt(1)-64
				return iCol
			}
			else
			{
				var iCol = parseInt(sCol.charCodeAt(0))-64
				return iCol
			}		
		}
	}
}

/*
function convertLetterToNumber(str) {
  var out = 0, len = str.length;
  for (pos = 0; pos < len; pos++) {
    out += (str.charCodeAt(pos) - 64) * Math.pow(26, len - pos - 1);
  }
  return out;
}

var testCase = ["A","B","C","Z","AA","AB","BY"];

var converted = testCase.map(function(obj) {
  return {
    letter: obj,
    number: convertLetterToNumber(obj)
  };

});

*/