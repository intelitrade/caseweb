function updatePreviewPane(oElement)
{
	try{
		debugger;
		debugger;
		var sStr = "";
		
		//Clear the editor pane
		document.getElementById("editorPane").innerHTML = "";
		
		//Get the element type
		var sElement = oElement.getAttribute("component");
		if(sElement==="row")
		{
			var sTable = oElement.getAttribute("tablename");
			var oTable = oDoc.tableByName(sTable);
			var sGuid = oElement.getAttribute("guid");
			var sCellNumber = oElement.getAttribute("cellnumber");
			var sColumn = oElement.getAttribute("mapcolumn");
			var sDisableGuid = "";
			var sTempGuid = "";
			if(sGuid!="")
			{
				var iRowNumber = getRowNumber(oTable,sGuid);
				sDisableGuid = "disabled";
			}else{
				var iRowNumber = getRowNumberFromCell(sCellNumber);
				//Use the temporary GUID generated during loading to get the row
				var sTempGuid = oElement.getAttribute("tempguid");
				var iTempRowNumber = getRowNumber(oTable,sTempGuid,"TEMPGUID");
				if(validateCharString(iTempRowNumber)&&(iTempRowNumber!=iRowNumber))
					iRowNumber = iTempRowNumber;
			}

			var oRow = oTable.getRow(iRowNumber);
			
			var sRowType = oRow.propGet("CROWTYPE");
			
			var oCell = oDoc.cell(sCellNumber);
			var sMapCell = sTable+"."+sColumn+iRowNumber;
			var oMapCell = oDoc.cell(sMapCell);
			var sMapNo = "";
			if(oMapCell)
			{
				sMapNo = oMapCell.value;
			}
			
			//debugger;
			//debugger;
			
			var sCellValue = oCell.value;
			var sCalc = oCell.calculation;
			//Check if input row or header row
			if(sRowType=="I1"||sRowType=="D1")
			{
				sStr= '<table>\
							<tr>\
								<td colspan=2 width:100%>\
									<b>Properties</b>\
								</td>\
							</tr>\
							<tr>\
								<td style="width:35%">\
									<b>Description: </b>\
								</td>\
								<td style="width:65%"><b>'+sCellValue+'</b></td>\
							</tr>\
							<tr>\
								<td>\
									<b>Row type: </b>\
								</td>\
								<td><select disabled><option value="C1" '+(sRowType==="C1"?"selected":"")+'>Link to map row</option><option value="C2" '+(sRowType==="C2"?"selected":"")+'>Negative link to map</option><option value="C3" '+(sRowType==="C3"?"selected":"")+'>Link to map (Debits only)</option><option value="G3" '+(sRowType==="G3"?"selected":"")+'>Link to map (Credits only)</option><option value="C4" '+(sRowType==="C4"?"selected":"")+'>Negative link to map (Debits only)</option><option value="G4" '+(sRowType==="G4"?"selected":"")+'>Negative link to map (Credits only)</option><option value="A1" '+(sRowType==="A1"?"selected":"")+'>Link to account</option><option value="A2" '+(sRowType==="A2"?"selected":"")+'>Negative link to account</option><option value="I1" '+(sRowType==="I1"?"selected":"")+'>Input row</option><option value="I2" '+(sRowType==="I2"?"selected":"")+'>Input row with text</option><option value="D1" '+(sRowType==="D1"?"selected":"")+'>Heading row</option><option value="L1" '+(sRowType==="L1"?"selected":"")+'>Thin line</option><option value="L2" '+(sRowType==="L2"?"selected":"")+'>Thick line</option><select></td>\
							</tr><tr>\
								<td>\
									<b>Value: </b>\
								</td>\
								<td><input type="text" style="background-color:#FFFFC6;width:100%" value="'+sCellValue+'" desccell="'+sCellNumber+'" id="'+sCellNumber+'" srcelement="'+oElement.id+'" onblur="updateDescCell(this)"></td>\
							</tr><tr>\
								<td>\
									<b>Calculation: </b>\
								</td>\
								<td><!--<input type="text" style="background-color:#FFFFC6;width:100%" value='+escapeSpecialCharacterInString(sCalc)+' desccell="'+sCellNumber+'" id="'+sCellNumber+'" srcelement="'+oElement.id+'" onblur="">-->'+sCalc+'</td>\
							</tr>\
							<tr>\
								<td>\
									<b>GUID: </b>\
								</td>\
								<td><input type="text" disabled style="width:75%" id="guidrow" value="'+sGuid+'"> <input '+sDisableGuid+' type="button" value="Generate..." style="width:20%" tempguid="'+sTempGuid+'" tablename="'+sTable+'" onClick="addGUIDToRow(this)"></td></tr></table>';
			}else if(sRowType=="S1"||sRowType=="S2"){
				sStr= '<table>\
							<tr>\
								<td colspan=2 width:100%>\
									<b>Properties</b>\
								</td>\
							</tr>\
							<tr>\
								<td style="width:35%">\
									<b>Description: </b>\
								</td>\
								<td style="width:65%"><b>'+sCellValue+'</b></td>\
							</tr>\
							<tr>\
								<td>\
									<b>Row type: </b>\
								</td>\
								<td><select disabled><option value="C1" '+(sRowType==="C1"?"selected":"")+'>Link to map row</option><option value="C2" '+(sRowType==="C2"?"selected":"")+'>Negative link to map</option><option value="C3" '+(sRowType==="C3"?"selected":"")+'>Link to map (Debits only)</option><option value="G3" '+(sRowType==="G3"?"selected":"")+'>Link to map (Credits only)</option><option value="C4" '+(sRowType==="C4"?"selected":"")+'>Negative link to map (Debits only)</option><option value="G4" '+(sRowType==="G4"?"selected":"")+'>Negative link to map (Credits only)</option><option value="A1" '+(sRowType==="A1"?"selected":"")+'>Link to account</option><option value="A2" '+(sRowType==="A2"?"selected":"")+'>Negative link to account</option><option value="I1" '+(sRowType==="I1"?"selected":"")+'>Input row</option><option value="I2" '+(sRowType==="I2"?"selected":"")+'>Input row with text</option><option value="D1" '+(sRowType==="D1"?"selected":"")+'>Heading row</option><option value="L1" '+(sRowType==="L1"?"selected":"")+'>Thin line</option><option value="L2" '+(sRowType==="L2"?"selected":"")+'>Thick line</option><select></td>\
							</tr><tr>\
								<td>\
									<b>Description: </b>\
								</td>\
								<td><input type="text" style="background-color:#FFFFC6;width:100%" value="'+sCellValue+'" id="'+sCellNumber+'" srcelement="'+oElement.id+'" onblur="updateMapNo(this)"></td>\
							</tr>\
							<tr>\
								<td>\
									<b>GUID: </b>\
								</td>\
								<td><input type="text"  id="guidrow" disabled style="width:75%" value="'+sGuid+'"> <input '+sDisableGuid+' type="button" value="Generate..." style="width:20%" tempguid="'+sTempGuid+'" tablename="'+sTable+'" onClick="addGUIDToRow(this)"></td></tr></table>';
			}else{
				sStr= '<table>\
							<tr>\
								<td colspan=2 width:100%>\
									<b>Properties</b>\
								</td>\
							</tr>\
							<tr>\
								<td style="width:35%">\
									<b>Description: </b>\
								</td>\
								<td style="width:65%"><b>'+sCellValue+'</b></td>\
							</tr>\
							<tr>\
								<td>\
									<b>Row type: </b>\
								</td>\
								<td><select disabled><option value="C1" '+(sRowType==="C1"?"selected":"")+'>Link to map row</option><option value="C2" '+(sRowType==="C2"?"selected":"")+'>Negative link to map</option><option value="C3" '+(sRowType==="C3"?"selected":"")+'>Link to map (Debits only)</option><option value="G3" '+(sRowType==="G3"?"selected":"")+'>Link to map (Credits only)</option><option value="C4" '+(sRowType==="C4"?"selected":"")+'>Negative link to map (Debits only)</option><option value="G4" '+(sRowType==="G4"?"selected":"")+'>Negative link to map (Credits only)</option><option value="A1" '+(sRowType==="A1"?"selected":"")+'>Link to account</option><option value="A2" '+(sRowType==="A2"?"selected":"")+'>Negative link to account</option><option value="I1" '+(sRowType==="I1"?"selected":"")+'>Input row</option><option value="I2" '+(sRowType==="I2"?"selected":"")+'>Input row with text</option><option value="D1" '+(sRowType==="D1"?"selected":"")+'>Heading row</option><option value="L1" '+(sRowType==="L1"?"selected":"")+'>Thin line</option><option value="L2" '+(sRowType==="L2"?"selected":"")+'>Thick line</option><select></td>\
							</tr><tr>\
								<td>\
									<b>Map number: </b>\
								</td>\
								<td><input type="text" style="background-color:#FFFFC6;width:100%" value="'+sMapNo+'" desccell="'+sCellNumber+'" id="'+sMapCell+'" srcelement="'+oElement.id+'" onblur="updateMapNo(this)"></td>\
							</tr>\
							<tr>\
								<td>\
									<b>GUID: </b>\
								</td>\
								<td><input type="text" id="guidrow" disabled style="width:80%" value="'+sGuid+'"> <input '+sDisableGuid+' type="button" value="Generate..." style="width:15%" tempguid="'+sTempGuid+'" tablename="'+sTable+'" onClick="addGUIDToRow(this)"></td></tr></table>';
			}					
			highlightRow(sCellNumber,oRow);

		}else if(sElement==="para")
		{
			var sTable = oElement.getAttribute("tablename");
			var oTable = oDoc.tableByName(sTable);
			var sGuid = oElement.getAttribute("guid");
			var sCellNumber = oElement.getAttribute("cellnumber");
			var sColumn = oElement.getAttribute("mapcolumn");
			var sDisableGuid = "";
			var sTempGuid = "";
			if(sGuid!="")
			{
				var iRowNumber = getRowNumber(oTable,sGuid);
				sDisableGuid = "disabled";
			}else{
				var iRowNumber = getRowNumberFromCell(sCellNumber);
				//Use the temporary GUID generated during loading to get the row
				var sTempGuid = oElement.getAttribute("tempguid");
				var iTempRowNumber = getRowNumber(oTable,sTempGuid,"TEMPGUID");
				if(validateCharString(iTempRowNumber)&&(iTempRowNumber!=iRowNumber))
					iRowNumber = iTempRowNumber;
			}
			var oRow = oTable.getRow(iRowNumber);				
			var sRowType = oRow.propGet("CROWTYPE");

			var iParaIndex = oElement.getAttribute("paraindex");
			sStr= '<table>\
						<tr>\
							<td colspan=2 width:100%>\
								<b>Properties</b>\
							</td>\
						</tr>\
						<tr>\
							<td style="width:35%">\
								<b>Description: </b>\
							</td>\
							<td style="width:65%"><b>Paragraph text</b></td>\
						</tr>\
						<tr>\
							<td><b>Row type: </b></td><td><select disabled><option value="C1" '+(sRowType==="C1"?"selected":"")+'>Link to map row</option><option value="C2" '+(sRowType==="C2"?"selected":"")+'>Negative link to map</option><option value="C3" '+(sRowType==="C3"?"selected":"")+'>Link to map (Debits only)</option><option value="G3" '+(sRowType==="G3"?"selected":"")+'>Link to map (Credits only)</option><option value="C4" '+(sRowType==="C4"?"selected":"")+'>Negative link to map (Debits only)</option><option value="G4" '+(sRowType==="G4"?"selected":"")+'>Negative link to map (Credits only)</option><option value="A1" '+(sRowType==="A1"?"selected":"")+'>Link to account</option><option value="A2" '+(sRowType==="A2"?"selected":"")+'>Negative link to account</option><option value="I1" '+(sRowType==="I1"?"selected":"")+'>Input row</option><option value="I2" '+(sRowType==="I2"?"selected":"")+'>Input row with text</option><option value="D1" '+(sRowType==="D1"?"selected":"")+'>Heading row</option><option value="L1" '+(sRowType==="L1"?"selected":"")+'>Thin line</option><option value="L2" '+(sRowType==="L2"?"selected":"")+'>Thick line</option><select>\
							</td>\
						</tr>\
						<tr>\
							<td colspan=2 contenteditable="true" style="background-color:#CCFFCC;color:#000000;width:100%">\
								<span contenteditable="true">'+oDoc.para(iParaIndex).getText()+'</span>\
							</td>\
						</tr>\
						<tr>\
							<td>\
								<b>GUID: </b>\
							</td>\
							<td><input type="text" id="guidrow" disabled style="width:80%" value="'+sGuid+'"> <input '+sDisableGuid+' type="button" value="Generate..." style="width:15%" tempguid="'+sTempGuid+'" tablename="'+sTable+'" onClick="addGUIDToRow(this)"></td>\
						</tr></table>';
		}else if(sElement==="table")
		{
			var sTableIdentifier = oElement.getAttribute("tablename");
			sStr='<span style="display:table-cell;">Identifier:</span><span style="display:table-cell;width:100%;">'+sTableIdentifier+'</span><b><br><input type="checkbox"></b><span display:table-cell;:table-cell;width:100%;">Enable wide-table printing</span><br>';
			sStr=	'<table>\
						<tr>\
							<td style="width:35%">\
								<b>Component Type: </b>\
							</td>\
							<td>Table</td>\
						</tr>\
						<tr>\
							<td colspan=2>\
								<b>Properties</b>\
							</td>\
						</tr>\
						<tr>\
							<td colspan="2">\
								<input type="checkbox">Enable wide-table printing\
							</td>\
						</tr>\
					</table>';				
			highlightTable(sTable,oTable);
		}else if(sElement==="column")
		{
			var sTable = oElement.getAttribute("tablename");
			var oTable = oDoc.tableByName(sTable);
			//get the number of columns 
			var iCol = oTable.nColumns();
			var iRow = oTable.nRows();
			
			var iRefRow = 0;
			//get row CL2
			for(var m=1;m<=iRow;m++)
			{
				var oRow = oTable.getRow(m);
				if(oRow.propGet("ROWTYPE")==="HEADING_ROW")
				{
					iRefRow = m;
					break; 
				}
			}
			
			var iCount = 0;
			for (var i=1;i<=iCol;i++)
			{					
				var oCol = oTable.getColumn(i);
				//Check the type of column
				var sColType = oCol.propGet(CCOLTYPE);
				if(sColType!=CALC_COL)
					continue;
				
				var sCol = GetColnumber(i);
				var sCellName = sTable+"."+sCol+iRefRow;
				var oHeaderCell = oDoc.cell(sCellName);
			
				if(oHeaderCell)
				{
					iCount++;
					var sCellValue = oDoc.interpret(oHeaderCell.calculation);
					if(sStr==="")
					{
						sStr = '<tr>\
							<td style="width:35%">\
								<b>Column header '+iCount+'</b>\
							</td>\
							<td style="width:50%">\
								<input type="text" style="background-color:FFFFC6" id="'+sCellName+'" originalvalue="'+sCellValue+'" value="'+sCellValue+'" cellguid="'+oHeaderCell.propGet("GUID")+'" style="width:95%" onclick="\
								highlightRow(this.id)" onblur="\
								updateColDesc(this.id,this)"/>\
							</td>\
							</tr>';	
							//sInitialCellToSet = sCellName;
					}else{							
						sStr = sStr +'<tr>\
							<td style="width:35%">\
								<b>Column header '+iCount+'</b>\
							</td>\
							<td style="width:50%">\
								<input type="text" style="background-color:FFFFC6" id="'+sCellName+'" originalvalue="'+sCellValue+'" value="'+sCellValue+'" cellguid="'+oHeaderCell.propGet("GUID")+'" style="width:95%" onclick="\
								highlightRow(this.id)" onblur="\
								updateColDesc(this.id,this)"/>\
							</td>\
							</tr>';	
					}							
				}
			}
			sStr = sStr +'</table>';					
		}else if(sElement==="mapcolumn")
		{

			var sTable = oElement.getAttribute("tablename");
			var oTable = oDoc.tableByName(sTable);
			//get the number of columns 
			var iCol = oTable.nColumns();
			var iRow = oTable.nRows();
			
			var iRefRow = 0;
			//get row CL2
			for(var m=1;m<=iRow;m++)
			{
				var oRow = oTable.getRow(m);
				if(oRow.propGet("ROWTYPE")==="COL_MAPPING_ROW")
				{
					iRefRow = m;
					break; 
				}
			}

			var iCount = 0;
			var iUseRow = 0;
			for (var i=1;i<=iCol;i++)
			{
				var oCol = oTable.getColumn(i);
				//Check the type of column
				var sColType = oCol.propGet(CCOLTYPE);
				
				var sCol = GetColnumber(i);
				var sCellName = sTable+"."+sCol+iRefRow;
				var oHeaderCell = oDoc.cell(sCellName);

				var oDescMapCol = oDoc.cell(sTable+".COLL"+i)
				if(!oDescMapCol)
				{
					oDescMapCol = oHeaderCell;
					//Catering for statement tables
					if(sColType!=CALC_COL)
						continue;
				}
				
				if (!oDescMapCol)
					continue;
				
				iCount++;
				var sCellValue = oDescMapCol.value;//oDoc.interpret(oDescMapCol.calculation);
				if(sStr==="")
				{
					sStr = '<tr>\
						<td style="width:35%">\
							<b>Column header '+iCount+'</b>\
						</td>\
						<td style="width:50%">\
							<input type="text" style="background-color:FFFFC6" id="'+oDescMapCol.number+'" originalvalue="'+sCellValue+'" value="'+sCellValue+'" cellguid="'+oDescMapCol.propGet("GUID")+'" style="width:95%" onclick="\
							highlightRow(this.id)" onblur="\
							updateColDesc(this.id,this)"/>\
						</td>\
						</tr>';	
				}else{
					sStr = sStr +'<tr>\
						<td style="width:35%">\
							<b>Column header '+iCount+'</b>\
						</td>\
						<td style="width:50%">\
							<input type="text" style="background-color:FFFFC6" id="'+oDescMapCol.number+'" originalvalue="'+sCellValue+'" value="'+sCellValue+'" cellguid="'+oDescMapCol.propGet("GUID")+'" style="width:95%" onclick="\
							highlightRow(this.id)" onblur="\
							updateColDesc(this.id,this)"/>\
						</td>\
						</tr>';	
				}					
			}
			sStr = sStr +'</table>';					
		}
		else if(sElement==="inputtextsection")
		{
			//Get the section label
			var sSection = oElement.getAttribute("jumpcode");
			var oSection = oDoc.sectionByName(sSection);
			var sGuid = oSection.propGet("GUID");
			var iFirstParaIndex = oSection.firstParaIndex;
			var iLastParaIndex = oSection.lastParaIndex;
			var sText = "";
			
			var sDisableGuid = "";
			var sTempGuid = "";
			if(sGuid!="")
			{
				sDisableGuid = "disabled";				
			}
			
			for(var ii=iFirstParaIndex;ii<=iLastParaIndex;ii++)
			{
				if(sText=="")
				{
					sText = '<span contenteditable="true" paragraphno='+ii+' onblur="\
								updateTextSection(this)">'+oDoc.para(ii).getText()+'</span>'
				}else{
					sText = sText + '<br><br><span contenteditable="true" paragraphno='+ii+' onblur="\
								updateTextSection(this)">'+oDoc.para(ii).getText()+'</span>';
				}
			}
			
			sStr= '<table>\
						<tr>\
							<td colspan=2 width:100%>\
								<b>Properties</b>\
							</td>\
						</tr>\
						<tr>\
							<td style="width:35%">\
								<b>Description: </b>\
							</td>\
							<td style="width:65%"><b>Paragraph text</b></td>\
						</tr>\
						<tr>\
							<td colspan=2 contenteditable="true" style="background-color:#CCFFCC;color:#000000;width:100%">'+sText+'</td>\
						</tr>\
						<tr>\
							<td>\
								<b>GUID: </b>\
							</td>\
							<td><input type="text" id="guidsection" disabled style="width:80%" value="'+sGuid+'"> <input '+sDisableGuid+' type="button" value="Generate..." style="width:15%" tempguid="'+sTempGuid+'" sectionname="'+sSection+'"></td>\
						</tr></table>';					
			sStr = sStr +'</table>';					
		}else if(sElement==="sectionheader"){
			//Get the section label
			var sSection = oElement.getAttribute("jumpcode");
			var oSection = oDoc.sectionByName(sSection);
			var sGuid = oElement.getAttribute("guid");
			//var sCellNumber = oElement.getAttribute("cellnumber");
			//var sColumn = oElement.getAttribute("mapcolumn");
			var sDisableGuid = "";
			var sTempGuid = "";
			if(sGuid!="")
				sDisableGuid = "disabled";
			
			var sSectionName = getSectionName(oDoc, sSection);
			var sCellNumber = "";
			var sTable = "";
			sStr= '<table>\
						<tr>\
							<td colspan=2 width:100%>\
								<b>Properties</b>\
							</td>\
						</tr>\
						<tr>\
							<td style="width:35%">\
								<b>Description: </b>\
							</td>\
							<td style="width:65%"><b>'+sSectionName+'</b></td>\
						</tr>\
						<tr>\
							<td>\
								<b>Section name: </b>\
							</td>\
							<td>'+sSection+'</td>\
						</tr><tr>\
							<td>\
								<b>Description: </b>\
							</td>\
							<td><input type="text" style="background-color:#FFFFC6;width:100%" value="'+sSectionName+'" desccell="'+sCellNumber+'" id="'+sCellNumber+'" srcelement="'+oElement.id+'" sectionlabel="'+sSection+'" onblur="updateSectionHeader(this)"></td>\
						</tr>\
						<tr>\
							<td>\
								<b>GUID: </b>\
							</td>\
							<td><input type="text" disabled style="width:75%" id="guidrow" value="'+sGuid+'"> <input '+sDisableGuid+' type="button" value="Generate..." style="width:20%" tempguid="'+sTempGuid+'" tablename="'+sTable+'"></td></tr></table>';
			sStr = sStr +'</table>';				
		}
		var oEditorPane = document.getElementById("editorPane").innerHTML = sStr;

	}catch(e)
	{
		logError(e);
	}finally{
		oElement = null;
	}
}

function previewDocument()
{
	try{
		//document.getElementById("editorPane").innerHTML = '<table width="100%" height="100%"><tr><td width="100%" height="100%" align="center"><p><b>Select Item on the left to view / modify its properties</b></p><object width="100%" height="400" data="PWC Illustrative Financial Statements 2013 - Financial statements - IFRS.pdf"></object></td></tr></table>';
		//debugger;
		//debugger;
		var sCVTableName = "HBD";
		var sCVTableName = "MFG";
		var oTable = oDoc.tableByName(sCVTableName);
		if(isInputValid(oTable))
		{
			//Get the number of columns and the number of rows in the table
			var iColumns = oTable.nColumns();
			var iRows = oTable.nRows();
			var oHTMLTable = createHTMLTable(iRows,iColumns);	
			if(isInputValid(oHTMLTable))
			{
				//var sHTMLStr = document.getElementById("editorPane").innerHTML="Preview of Table HBD";
				document.getElementById("editorPane").appendChild(oHTMLTable);
				var sHTMLTableId = oHTMLTable.id;
				//debugger;
				//debugger;
				addCVTableDataToHTMLTable(sCVTableName, sHTMLTableId);
			}
		}
	}catch(e)
	{
		logError(e);
	}finally
	{
		
	}
}

function addCVTableDataToHTMLTable(sCVTableName, sHTMLTableId)
{
	try{
		//debugger;
		//debugger;
		if(oDoc)
		{
			var oCVTable = oDoc.tableByName(sCVTableName);
			var oHTMLTable = document.getElementById(sHTMLTableId);
			if(oCVTable && oHTMLTable)
			{
				var iRows = oCVTable.nRows();
				var iColumns = oCVTable.nColumns();				
				//Make sure they both have the same structure i.e. same columns and same rows
				if(oHTMLTable.rows.length == iRows && oHTMLTable.rows[0].cells.length == iColumns)
				{
					var iRows = oCVTable.nRows();
					var iColumns = oCVTable.nColumns();
					var oProgBar = oDoc.createProgressBar("Loading data...",iRows,1);
					for(var i = 1; i <= iRows; i++){
						var oRow = oCVTable.getRow(i);
						if(oRow.evaluateSkip()==1 && oRow.evaluateHide()==1)
							oHTMLTable.rows[(i-1)].style.color="red";
							//continue;
						
						if(oRow.evaluateSkip()==1)
						{
							oHTMLTable.rows[(i-1)].style.color="blue";//continue;
						}
						
						if(oRow.evaluateHide()==1)
						{
							oHTMLTable.rows[(i-1)].style.color="red";
						}
							//continue;
						
						//Get row properties
						var sRowType = oRow.propGet(CROWTYPE);
						var sGUID = oRow.propGet("GUID");
						if(sGUID!="")
							oHTMLTable.rows[(i-1)].setAttribute("GUID",sGUID);
						
						if(sRowType==LINKTOTALSKIP_ROW||sRowType==BALCHK_ROW||sRowType==TOTAL_ROW||sRowType==LINKTOTAL_ROW||sRowType==LINKSUBTOTAL_ROW||sRowType==YEARHEADER_ROW||sRowType==SUBTOTAL_ROW||sRowType==HEADING_ROW||sRowType==SUBHEADING_ROW||sRowType==CONTROL_ROW)
						{
							oHTMLTable.rows[(i-1)].style.fontWeight="bold";
							//oHTMLTable.rows[(i-1)].style.borderBottomWidth="2px";
						}
						
						if(sRowType==THINLINE_ROW){
							//oHTMLTable.rows[(i-1)].style.borderBottom = "thin solid black";
							//oHTMLTable.rows[(i-1)].style.borderBottomWidth="1.5px";
						}
						
						if(sRowType==THINKLINE_ROW)
						{
							//oHTMLTable.rows[(i-1)].style.borderBottom = "thick solid black";	
							//oHTMLTable.rows[(i-1)].style.borderBottomWidth="2px";
						}							
						
						oHTMLTable.rows[(i-1)].style.fontSize = "small";
						var sRowHasData = false;
						for(var j = 1; j <= iColumns; j++)
						{
							//get the table cell in CaseView Table
							//var oCVTableCell = oCVTable.getCell(j,i);
							//check if there are any cells in the table
							var iTableCellFirstPara = oCVTable.cellFirstParaIndex(i, j);
							//var iTableCellLastPara = oCVTable.cellLastParaIndex(i, j);						
							var oPara = oDoc.para(iTableCellFirstPara);
							var sText = oPara.getText();
							if(!isInputValid(sText))
								sText = "&nbsp;";	

							var sColType = oCVTable.getColumn(j).propGet(CCOLTYPE);
							
							oHTMLTable.rows[(i-1)].cells[(j-1)].innerHTML = sText;//oPara.getText();
						
							if((sRowType==LINKTOTALSKIP_ROW||sRowType==BALCHK_ROW||sRowType==TOTAL_ROW||sRowType==SUBTOTAL_ROW||sRowType==LINKTOTAL_ROW||sRowType==LINKSUBTOTAL_ROW||sRowType==CALC1_ROW||sRowType==CALC2_ROW||sRowType==CALC3_ROW||sRowType==CALC4_ROW||sRowType==CALC5_ROW||sRowType==CALC6_ROW||sRowType==CALC7_ROW||sRowType==CALC8_ROW||sRowType==CALC9_ROW||sRowType==CALC10_ROW||sRowType==LINKTOTALSKIP_ROW||sRowType==BALCHK_ROW||sRowType==NOTE_ROW||sRowType==CALCB_ROW||sRowType==CALCC_ROW||sRowType==INPUT_ROW||sRowType==TEXTCALC1_ROW||sRowType==INPUTPERCENT_ROW||sRowType==INPUTROLLFORWARD_ROW||sRowType==INPUTDESCNOT_ROW||sRowType==INPUTBULLET_ROW||sRowType==INPUTTOTAL_ROW||sRowType==ACTCALC1_ROW||sRowType==ACTCALC2_ROW)&&(sColType==CALC_COL||sColType==VARIANCE_COL||sColType==TOTAL_COL||sColType==PERCENT_COL))
							{
								oHTMLTable.rows[(i-1)].cells[(j-1)].style.textAlign = "right";							
							}
							
							if(sRowType==INPUTTOTAL_ROW||sRowType==SUBTOTAL_ROW||sRowType==LINKTOTAL_ROW||sRowType==LINKSUBTOTAL_ROW||sRowType==TOTAL_ROW)
								//oHTMLTable.rows[(i-1)].cells[(j-1)].style.borderWidth = "2px 1px 3px 1px";//"thick solid";// #0000FF";	

							if(sColType==NOTEREF_COL||sColType==LS_COL||sColType==ST_REF_COL||sRowType==CONTROL_ROW||sRowType==HEADING_ROW||sRowType==SUBHEADING_ROW)
							{
								oHTMLTable.rows[(i-1)].cells[(j-1)].style.textAlign = "center";								
							}	

							if(sRowType==THINLINE_ROW){
								oHTMLTable.rows[(i-1)].cells[(j-1)].innerHTML="<hr style='border-width:1px;border-color:black;'/>";
							}
							
							if(sRowType==THINKLINE_ROW){
								oHTMLTable.rows[(i-1)].cells[(j-1)].innerHTML="<hr style='border-width:5px;border-color:black;'/>";
							}
							
							//if(sColType==)
						}
						oProgBar.updateProgress(1);
					}
					oProgBar.destroyProgressBar();
					
					var oProgBar = oDoc.createProgressBar("Clean up...",iRows,1);
					//Turn hide columns that do no need to be shown
					for(var i=1;i<=iColumns;i++)
					{
						var sColType = oCVTable.getColumn(i).propGet(CCOLTYPE);
						if(sColType==PRINT_CONT_COL||sColType==SPACE_COL||sColType==HIDDEN_COL||sColType==CTRLCELLCOL)
							hideCol(sHTMLTableId,i);
						
						oProgBar.updateProgress(1);
					}
					oProgBar.destroyProgressBar();
				}
			}
		}
	}catch(e)
	{
		alert(e.description);
	}finally{
		
	}
}

function hideCol(sTableId,iCol){

	var col = iCol;//document.getElementById("txtCol").value;
	if (isNaN(col) || col == "") {
		alert("Invalid Column");
		return;
	}
	col = parseInt(col, 10);
	col = col - 1;
	var tbl = document.getElementById(sTableId)//;"tblMain");
	if (tbl != null) {
		if (col < 0 || col >= tbl.rows.length - 1) {
			alert("Invalid Column");
			return;
		}
		for (var i = 0; i < tbl.rows.length; i++) {
			/*for (var j = 0; j < tbl.rows[i].cells.length; j++) {
				tbl.rows[i].cells[j].style.display = "";
				if (j == col)
					tbl.rows[i].cells[j].style.display = "none";
			}*/
			tbl.rows[i].cells[col].style.display = "none";
		}
	}
}

function show_hide_column(col_no, do_show) {
   var tbl = document.getElementById('id_of_table');
   var col = tbl.getElementsByTagName('col')[col_no];
   if (col) {
     col.style.visibility=do_show?"":"collapse";
   }
}

function createHTMLTable(iRows,iColumns)
{
	//var iRows = window.prompt("Input number of rows", 1);
	//var iColumns = window.prompt("Input number of columns",1);
	// create elements <table> and a <tbody>
	try{
		var oProgBar = oDoc.createProgressBar("Creating HTML Table...",iRows,1)
		var oTable = document.createElement("table");
		//var oTableBody = document.createElement("tbody");
		//for(var i=0;i<parseInt(iRows,10);i++)
		var iRowNo = 0;
		for(var i=0;i<iRows;i++)	
		{
			iRowNo++;	
			//oProgBar.setMessage("Creating row "+iRowNo);
			var oTableRow = oTable.insertRow(i);
			oProgBar.updateProgress(1);
			//for(var j=0;j<parseInt(iColumns,10);j++)
			var iColumnNo = 0;
			for(var j=0;j<iColumns;j++)
			{
				iColumnNo++;
				var oTableCell = oTableRow.insertCell(j);
				oTableCell.style.borderColor = "black";
				//oProgBar.setMessage("Inserting column "+iColumnNo+" in row "+iRowNo);
				//oTableCell.innerHTML="Row-"+i+" Column-"+j; 
			}
		}
		//Give the table a random ID
		var ID = createGuid();
		oTable.setAttribute("id",ID);
		oTable.setAttribute("border", "1");
		oTable.style.borderCollapse = "collapse";
		oTable.style.borderColor = "black";
		//Destroy the progress bar
		oProgBar.destroyProgressBar();	
		// append the <tbody> inside the <table>
		//oTable.appendChild(oTableBody);
		return oTable;
	}catch(e)
	{
		
	}finally{
		
	}
}


//Show properties
function showProperties(oElement)
{
	try{

		var sSectionLabel = oElement.getAttribute("jumpcode");
		var oElToChange = document.getElementById(sSectionLabel+"_properties");
		var sProperties = "";
		if(oElToChange)
		{
			if(oElToChange.style.display==="none"){
				oElToChange.style.display = "block";
				highlightSection(sSectionLabel);
				
				if(oElToChange.innerHTML==="")
				{
					sProperties = loadControls(sSectionLabel);
					oElToChange.innerHTML = sProperties;
				}
			}
			else{
				oElToChange.style.display ="none";
			}
		}
	}catch(e)
	{
		logError(e);
	}
}
