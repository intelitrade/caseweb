function getTableLineItems(oTable,sTableType,sSectionLabel,iSectionSkipCond)
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
			case NOTE_HIDE_TABLE:
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
				var sTableLabel = oTable.getLabel();
				var oCustTable = new oTableCustomProp(sTableLabel,oDoc);
				//Get the description column
				var aDescCol = oCustTable.getColWithProp(CCOLTYPE,DESC_COL);
				var aMapCol = oCustTable.getColWithProp(CCOLTYPE,MAP_COL);
				var aNoteRefCol = oCustTable.getColWithProp(NOTEREF_COL);
				var aCalcCol = oCustTable.getColWithProp(CALC_COL);
				var sDescCol = aDescCol[0];	
				var sMapCol = aMapCol[0];				
				var iColumn = getIntFromColLabel(sDescCol);
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
					
					if(oRow.propGet(CROWTYPE)===TEXTONLY_ROW)
					{
						//debugger;
						//debugger;
						var iTableCellFirstPara = oTable.cellFirstParaIndex(iCurrentRowNumber, iColumn);
						var iTableCellLastPara = oTable.cellLastParaIndex(iCurrentRowNumber, iColumn);
						var oPara = oDoc.para(iTableCellFirstPara);
						var sDesc = oPara.getText();
						
						if(!validateCharString(sDesc))
						{
							sDesc = "Paragraph text";
						}
						else{
							var iTextLength = sDesc.length;
							if(iTextLength>50)
								sDesc = sDesc.substr(0,50)+"...";						
						}
						
						if(validateCharString(sDesc))
						{
							if(sGUIDID!="")
							{
								sString = sString + "<li style='display:table-cell;background-color:#CCFFCC;color:"+sColor+";margin-left:25px;margin-top:5px' component='para' paraindex='"+oPara.index+"' jumpcode='"+sSectionLabel+"' onclick='gotoSection(this);updatePreviewPane(this);highlightElement(this);updateCurrentSelection(this)' onmousedown='onMouseDown(this)' guid='"+sGuid+"'  id='row_"+sGuid+"' tempguid='"+sGUIDID+"' tablename='"+sTableName+"' objecttype='row'><span>["+sDesc+"]</span></li>";								
							}else{
								sString = sString + "<li style='display:table-cell;background-color:#CCFFCC;color:"+sColor+";margin-left:25px;margin-top:5px' component='para' paraindex='"+oPara.index+"' jumpcode='"+sSectionLabel+"' onclick='gotoSection(this);updatePreviewPane(this);highlightElement(this);updateCurrentSelection(this)' onmousedown='onMouseDown(this)' guid='"+sGuid+"'  id='row_"+sGuid+"' tablename='"+sTableName+"' objecttype='row'><span>["+sDesc+"]</span></li>";
							}
						}
					}else
					{
						var sDescCell = getCellFromTableCell(sTableName,iColumn,iCurrentRowNumber,oDoc)[0];
						var oDescCell = oDoc.cell(sDescCell);
						if(oDescCell)
						{
							var sDesc = oDescCell.value;
							if(sDesc==="BR:YR1:Y1:SIGN:RND:SUB"||sDesc==="BR:YR0:Y1:SIGN:RND:SUB|0"||!validateCharString(sDesc))
								continue;
							
							if(sGUIDID!="")
							{
								//Check if the cell is input or not							
								if (oDescCell.input===1)
								{
									sString = sString + "<li style='display:table-cell;background-color:#FFFFC6;color:"+sColor+";margin-left:25px;margin-top:5px' component='row' cellnumber='"+oDescCell.number+"' guid='"+sGuid+"' tempguid='"+sGUIDID+"' mapcolumn='"+sMapCol+"' tablename='"+sTableName+"'  jumpcode='"+sSectionLabel+"' onclick='gotoSection(this);updatePreviewPane(this);highlightElement(this);updateCurrentSelection(this)' onmousedown='onMouseDown(this)' id='row_"+sGuid+"' objecttype='row'><span>["+sDesc+"]</span></li>";								
								}else{
									sString = sString + "<li style='display:table-cell;color:"+sColor+";margin-left:25px;margin-top:5px;margin-bottom:5px' component='row' cellnumber='"+oDescCell.number+"' guid='"+sGuid+"' mapcolumn='"+sMapCol+"' tempguid='"+sGUIDID+"' tablename='"+sTableName+"' jumpcode='"+sSectionLabel+"' onclick='gotoSection(this);updatePreviewPane(this);highlightElement(this);updateCurrentSelection(this)' onmousedown='onMouseDown(this)' id='row_"+sGuid+"' objecttype='row'><span>["+sDesc+"]</span></li>";	
								}
							}else{
								//Check if the cell is input or not							
								if (oDescCell.input===1)
								{
									sString = sString + "<li style='display:table-cell;background-color:#FFFFC6;color:"+sColor+";margin-left:25px;margin-top:5px' component='row' cellnumber='"+oDescCell.number+"' guid='"+sGuid+"' mapcolumn='"+sMapCol+"' tablename='"+sTableName+"' jumpcode='"+sSectionLabel+"' onclick='gotoSection(this);updatePreviewPane(this);highlightElement(this);updateCurrentSelection(this)' onmousedown='onMouseDown(this)' id='row_"+sGuid+"' objecttype='row'><span>["+sDesc+"]</span></li>";								
								}else{
									sString = sString + "<li style='display:table-cell;color:"+sColor+";margin-left:25px;margin-top:5px' component='row' cellnumber='"+oDescCell.number+"' guid='"+sGuid+"' mapcolumn='"+sMapCol+"' tablename='"+sTableName+"' jumpcode='"+sSectionLabel+"' onclick='gotoSection(this);updatePreviewPane(this);highlightElement(this);updateCurrentSelection(this)' onmousedown='onMouseDown(this)' id='row_"+sGuid+"' objecttype='row'><span>["+sDesc+"]</span></li>";	
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
		logError(e);
	}finally{
		oDescCell = null;
		oPara = null;
		oCell = null;
	}
}	

//Returns a row number based a a cell number
//Need to be made smarter by using regular expressions
function getRowNumberFromCell(sCellNumber)
{	//If no GUID found make the script backward compatible
	var aCellNumber = sCellNumber.split(".");
	var sCellSuffix = aCellNumber[1];
	var iCellSuffixLength = sCellSuffix.length;
	var sRowNum = "";
	for(var i=0;i<=iCellSuffixLength;i++)
	{
		if(sCellSuffix.charCodeAt(i)>=48&&sCellSuffix.charCodeAt(i)<=57)
		{
			sRowNum = sRowNum+sCellSuffix.charAt(i);
		}
	}					
	var iRowNumber = parseInt(sRowNum);	
	return iRowNumber;
}

function addGUIDToRow(oElement)
{
	//debugger;
	//debugger;
	if(oElement)
	{
		var sTableName = oElement.getAttribute("tablename");
		var sGuid = oElement.getAttribute("tempguid");
		var oTable = oDoc.tableByName(sTableName);
		if(oTable)
		{
			var iRowNumber = getRowNumber(oTable,sGuid,"TEMPGUID");				
			var oRow = oTable.getRow(iRowNumber);
			if(oRow)
			{
				//Create new GUID ID
				var ID = createGuid();
				//Add new GUID
				oRow.propSet("GUID",ID)
				//remove the temporary GUID;
				oRow.propDelete("TEMPGUID");
				//get the row with the GUID
				var oGuidElement = document.getElementById("guidrow");
				oGuidElement.value = ID;
				oElement.disabled=true;
			}
		}
	}
}